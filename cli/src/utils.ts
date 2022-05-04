import { execute } from '@yarnpkg/shell';
import { PassThrough } from 'stream';

export async function readCommandLine(command: string) {
  const chunks: Array<Buffer> = [];
  const stdout = new PassThrough();
  stdout.on(`data`, (chunk) => chunks.push(chunk));

  await execute(command, [], { stdout });

  return Buffer.concat(chunks)
    .toString()
    .replace(/[\r\n]+$/, ``);
}
