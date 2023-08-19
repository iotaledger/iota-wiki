import type { LoadContext, Plugin } from '@docusaurus/types';
import { OptionValidationContext, PluginOptions } from './types';
import { LoadedContent as DocsContentLoaded } from '@docusaurus/plugin-content-docs';
export default function pluginDocs(context: LoadContext, options: PluginOptions): Promise<Plugin<DocsContentLoaded>>;
export declare function validateOptions({ validate, options, }: OptionValidationContext): PluginOptions;
