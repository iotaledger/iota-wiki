# IOTA Wiki CLI

This utility requires [`yarn`](https://yarnpkg.com/) and [`git`](https://git-scm.com/) to be installed.

<!-- toc -->

- [IOTA Wiki CLI](#iota-wiki-cli)
- [Usage](#usage)
- [Commands](#commands)
- [Release](#release)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g @iota-community/iota-wiki-cli
$ iota-wiki-cli COMMAND
running command...
$ iota-wiki-cli (--version)
@iota-community/iota-wiki-cli/1.7.0 linux-x64 node-v16.13.1
$ iota-wiki-cli --help [COMMAND]
USAGE
  $ iota-wiki-cli COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`iota-wiki-cli help [COMMAND]`](#iota-wiki-cli-help-command)
- [`iota-wiki-cli plugins`](#iota-wiki-cli-plugins)
- [`iota-wiki-cli plugins:install PLUGIN...`](#iota-wiki-cli-pluginsinstall-plugin)
- [`iota-wiki-cli plugins:inspect PLUGIN...`](#iota-wiki-cli-pluginsinspect-plugin)
- [`iota-wiki-cli plugins:install PLUGIN...`](#iota-wiki-cli-pluginsinstall-plugin-1)
- [`iota-wiki-cli plugins:link PLUGIN`](#iota-wiki-cli-pluginslink-plugin)
- [`iota-wiki-cli plugins:uninstall PLUGIN...`](#iota-wiki-cli-pluginsuninstall-plugin)
- [`iota-wiki-cli plugins:uninstall PLUGIN...`](#iota-wiki-cli-pluginsuninstall-plugin-1)
- [`iota-wiki-cli plugins:uninstall PLUGIN...`](#iota-wiki-cli-pluginsuninstall-plugin-2)
- [`iota-wiki-cli plugins update`](#iota-wiki-cli-plugins-update)
- [`iota-wiki-cli start [SITEDIR]`](#iota-wiki-cli-start-sitedir)

## `iota-wiki-cli help [COMMAND]`

Display help for iota-wiki-cli.

```
USAGE
  $ iota-wiki-cli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for iota-wiki-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `iota-wiki-cli plugins`

List installed plugins.

```
USAGE
  $ iota-wiki-cli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ iota-wiki-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `iota-wiki-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ iota-wiki-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ iota-wiki-cli plugins add

EXAMPLES
  $ iota-wiki-cli plugins:install myplugin

  $ iota-wiki-cli plugins:install https://github.com/someuser/someplugin

  $ iota-wiki-cli plugins:install someuser/someplugin
```

## `iota-wiki-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ iota-wiki-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ iota-wiki-cli plugins:inspect myplugin
```

## `iota-wiki-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ iota-wiki-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ iota-wiki-cli plugins add

EXAMPLES
  $ iota-wiki-cli plugins:install myplugin

  $ iota-wiki-cli plugins:install https://github.com/someuser/someplugin

  $ iota-wiki-cli plugins:install someuser/someplugin
```

## `iota-wiki-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ iota-wiki-cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ iota-wiki-cli plugins:link myplugin
```

## `iota-wiki-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ iota-wiki-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ iota-wiki-cli plugins unlink
  $ iota-wiki-cli plugins remove
```

## `iota-wiki-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ iota-wiki-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ iota-wiki-cli plugins unlink
  $ iota-wiki-cli plugins remove
```

## `iota-wiki-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ iota-wiki-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ iota-wiki-cli plugins unlink
  $ iota-wiki-cli plugins remove
```

## `iota-wiki-cli plugins update`

Update installed plugins.

```
USAGE
  $ iota-wiki-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `iota-wiki-cli start [SITEDIR]`

Start a development server to preview your content.

```
USAGE
  $ iota-wiki-cli start [SITEDIR] [--port <value>] [--open]

ARGUMENTS
  SITEDIR  [default: .] the path to the module

FLAGS
  --[no-]open
  --port=<value>  [default: 3000] the port of the dev server

DESCRIPTION
  Start a development server to preview your content.
```

_See code: [dist/commands/start.ts](https://github.com/iota-community/iota-wiki-cli/blob/v1.7.0/dist/commands/start.ts)_

<!-- commandsstop -->

# Release

1. Ensure git commit signing is properly setup.
2. Change the package version according [semantic versioning](https://semver.org/).
3. Commit the version bump with `git commit -m "Bump version to v[VERSION]"`.
4. Tag the commit with `git tag -a v[VERSION] -m "v[VERSION]"`.
5. Push the commit including the tag with `git push --follow-tags`.
6. Create a GitHub release using the tag above.
