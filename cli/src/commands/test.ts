import {Command, flags} from '@oclif/command'
import {spawn} from 'child_process'
import {join, resolve} from 'path'
const  replaceInFile = require('replace-in-file')
import {existsSync, readFileSync} from 'fs'
import {copySync} from 'fs-extra'
const syncDirectory = require('sync-directory')
const debounce = require('lodash.debounce')
import {getLocalConfig} from '../local-config'

export default class Test extends Command {
    static description = 'test local wiki build'

    static flags = {
        help: flags.help({char: 'h'}),
    }

    async run() {
        const PWD = process.env.PWD ?? ''
        const userConfig = await getLocalConfig()
        const WORKING_FOLDER = join(PWD, userConfig.localWikiFolder ?? '', userConfig.localWikiFolder ? 'iota-wiki' : '')
        const DOCUSAURUS_CONFIG_PATH = join(WORKING_FOLDER, 'docusaurus.config.js')

        const EXTERNAL_DOCS_CONFIG = readFileSync(join(PWD, userConfig.configFolder ?? '', 'EXTERNAL_DOCS_CONFIG'), 'utf8')
        await replaceInFile({
            files: DOCUSAURUS_CONFIG_PATH,
            from: /\/\* AUTO GENERATED EXTERNAL DOCS CONFIG \*\//,
            to: EXTERNAL_DOCS_CONFIG,
        })

        const EXTERNAL_DOCS_DROPDOWN_CONFIG = readFileSync(join(PWD, userConfig.configFolder ?? '', 'EXTERNAL_DOCS_DROPDOWN_CONFIG'), 'utf8')
        await replaceInFile({
            files: DOCUSAURUS_CONFIG_PATH,
            from: /\/\* AUTO GENERATED EXTERNAL DOCS DROPDOWN CONFIG \*\//,
            to: EXTERNAL_DOCS_DROPDOWN_CONFIG,
        })

        if (!userConfig.localWikiFolder)
            return

        const WIKI_EXTERNAL_FOLDER = join(WORKING_FOLDER, 'external')

        const WIKI_CONTENT_REPO_FOLDER = join(WIKI_EXTERNAL_FOLDER, userConfig.repoName)

        copySync(join(PWD, 'static', 'img'), join(WORKING_FOLDER, 'static', 'img'))

        const runYarn = debounce(() => {
            spawn('yarn', [
                'build',
            ], {
                cwd: WORKING_FOLDER,
                shell: true,
                stdio: 'inherit',
            })
        }, 100)

        const directoryToSync = this.getGitRootDirectory(PWD);

        syncDirectory(resolve(directoryToSync), resolve(WIKI_CONTENT_REPO_FOLDER), {
            exclude: userConfig.excludeList,
            watch: true,
            afterSync: ({type, relativePath}: {type: string; relativePath: string}) => {
                this.log(`${type}: ${relativePath}`)
                if (type === 'init:hardlink') {
                    runYarn()
                }
            },
        })
    }


    /**
     * Get the repository's GIT root directory
     * @param directory string
     * @returns string
     */
    getGitRootDirectory(directory:string){
        while(!existsSync(join(directory, '..')))
        {
            directory = resolve(join(directory, '..'));
        }
        return directory;
    }
}
