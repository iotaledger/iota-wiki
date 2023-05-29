import path from 'path';
import fs from 'fs';
import { merge } from '@wiki/utils/config';

const startConfigPath = path.resolve(__dirname, './start.js');
const buildConfigPath = path.resolve(__dirname, './build.js');

const CLI_CONFIG = {
    start: {
        onBrokenLinks: 'log',
        onBrokenMarkdownLinks: 'log',
        onDuplicateRoutes: 'log',
        themeConfig: {
            announcementBar: {
                id: 'preview',
                content:
                    'This is a local preview. Please find available routes <a href="/404">here</a>.',
                isCloseable: false,
            },
        },
    },
    build: {
        onBrokenLinks: 'throw',
        onBrokenMarkdownLinks: 'throw',
        onDuplicateRoutes: 'throw',
        themeConfig: {
            navbar: {
                logo: {
                    href: 'https://wiki.iota.org',
                },
            },
        },
    }
}

async function generate(workingDirectory, pathToWrite, content) {
    try {
        const externalPath = path.resolve(workingDirectory, 'docusaurus.config.js');
        let external = require(externalPath);

        if (typeof external === 'function') {
            external = await external();
        }

        const mergedConfig = merge(external, content);
        const writeData = `module.exports = ${JSON.stringify(mergedConfig, null, 2)}`

        fs.writeFile(startConfigPath, writeData, (err) => {
            if (err) throw err;
        });


        console.log(`Generated config at ${pathToWrite}`)
    } catch (e) {
        console.error(`Failed to generate config at ${pathToWrite}: ${e}`)
    }
}

export async function generateStartConfig(directory) {
    return await generate(directory, startConfigPath, CLI_CONFIG.start)
}

export async function generateBuildConfig(directory) {
    return await generate(directory, buildConfigPath, CLI_CONFIG.build)
}
