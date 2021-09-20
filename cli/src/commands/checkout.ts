import {Command, flags} from '@oclif/command'
import {spawnSync} from 'child_process'
import {getLocalConfig} from '../local-config'
import {join} from 'path'
import {copySync} from 'fs-extra'

export default class Checkout extends Command {
  static description = 'checkout content repositories'

  static examples = [
    '$ iota-wiki-cli checkout',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    const {flags} = this.parse(Checkout)
    const PWD = process.env.PWD ?? ''
    const userConfig = await getLocalConfig()
    const content = userConfig.content as {repo: string; checkoutParams?: string[]; staticPath?: string}[]
    this.log(`Working in ${PWD}`)

    content.forEach(entry => {
      const GIT_ARGS = ['clone']
      GIT_ARGS.push('--depth 1')
      GIT_ARGS.push(entry.repo)
      if(entry.checkoutParams) {
        GIT_ARGS.push(...entry.checkoutParams)
      }
      spawnSync('git', GIT_ARGS, {
        cwd: join(PWD, 'external'),
        shell: true,
        stdio: 'inherit',
      })
      if(entry.staticPath) {
        copySync(join(PWD, 'external', entry.repo.split('/').pop() as string, entry.staticPath), join(PWD, './static'))
      }
    });
  }
}
