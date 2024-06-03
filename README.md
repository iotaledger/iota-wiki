<!--
*** This README is using the Best-README-Template (https://github.com/othneildrew/Best-README-Template).
-->

<div align="center">

  <!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Gitpod][gitpod-shield]][gitpod-url]

  <!-- PROJECT LOGO -->
  <p>
    <a href="https://wiki.iota.org">
      <img src="static/img/GitHub_Wiki_Banner.png" alt="IOTA Wiki GitHub Banner" max-width="830px">
    </a>
  </p>
  <p>
    <a href="https://wiki.iota.org"><strong>EXPLORE THE WIKI</strong></a>
  </p>
  <p>
    <a href="https://github.com/iota-wiki/iota-wiki/issues">Report Error</a>
    ·
    <a href="https://github.com/iota-wiki/iota-wiki/issues">Request Topic</a>
  </p>

</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Local Development](#local-development)
- [Contributing](#contributing)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About the Project

The IOTA Wiki is a central hub for entering into the IOTA ecosystem. A community driven initiative to provide an up-to-date collection of introductions and further reading about the technology, the teams, the community, and everything in between. So anyone can learn how to build, adopt, and engage with IOTA, all in one space.

### Built With

The IOTA Wiki is built using [TypeScript](https://www.typescriptlang.org/), [ReactJS](https://reactjs.org/) and [Docusaurus v2.0](https://docusaurus.io/).

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- [git 1.8.2 or above](https://git-scm.com/downloads).
- [Node.js 16.10 or above](https://nodejs.org/en/download/).
- [Modern Yarn](https://yarnpkg.com/getting-started/install) enabled by running `corepack enable`.

### Preview Locally

To preview the Wiki locally, use the following steps. For more detailed scripts, see [Pre-configured scripts](#pre-configured-scripts) for reference.

> Please note that the Wiki has a lot of content, so currently the initial build is taking a while. Effort is taken to try and reduce the build time in the future.

1. Clone the repository by running `git clone https://github.com/iotaledger/iota-wiki.git` and go to the directory with `cd iota-wiki`.
2. Install dependencies with `yarn`.
3. Prepare the environment by running `yarn prepare`, this has to be done only once.
4. Preview the Wiki with `yarn start`, this will start a development server serving the Wiki with hot reload capability, so it will update content after any changes were made.

#### Pre-configured scripts

| Script                    | Explanation                                                                                                                                                                                                         |
|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `prepare`                 | Prepare the environment by checking out submodules build.                                                                                                           |
| `start`                   | Start a development server serving the Wiki, with hot reloading on changes.                                                                                                                                         |
| `start:section:{section}` | Start a development server serving only a section of the Wiki, with hot reloading on changes. Available sections are `build`, `get-started`, `learn`, and `maintain`.                                               |
| `build`                   | Build the Wiki. To build for production, checkout the latest version of external documentation by running `yarn checkout:remote` and set the `MODE` environment variable to `production`.                           |
| `checkout:remote`         | Check out the latest version of external documentation.                                                                                                                                                             |
| `generate:api`            | Generate available API documentation configured through the [Docusaurus OpenAPI plugin](https://www.npmjs.com/package/@paloaltonetworks/docusaurus-plugin-openapi) and by compiling documentation from source code. |

<!-- CONTRIBUTING -->

## Contributing

The IOTA Wiki is maintained by the IF and community contributions are always welcome. The DX team and related teams from the IF will review all issues and pull requests posted to this repository. If you notice any mistakes, or feel something is missing, feel free to create an issue to discuss with the team or directly create a pull request with suggestions. Here is a basic workflow to open a pull request:

1. Fork this repository to your own account and clone it (`git clone https://github.com/<YOUR_USERNAME>/iota-wiki.git`)
2. Create a feature branch for your changes (`git checkout -b feat/amazing-feature`).
3. Make your changes and optionally [preview them locally](#preview-locally).
4. Run `yarn format` and `yarn lint` and fix any remaining errors and warnings.
5. Commit your changes (`git commit -m 'Add some amazing feature'`).
6. Push your changes to your fork (`git push origin feat/amazing-feature`).
7. Open a pull request to the `main` branch of this repository.

Have a look at [CONTRIBUTING](.github/CONTRIBUTING.md) for further guidance.

### Versioning

To find out how to version your docs, read [this guide](https://wiki.iota.org/community/contribute-to-wiki/how_tos/versioning).

### Online one-click setup for contributing

You can use Gitpod (a free, online, VS Code-like IDE) for contributing. With a single click it will prepare everything you need to build and contribute to the Wiki. Just click on this button and skip step 1 from above.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)][gitpod-url]

<!-- CONTACT -->

## Contact

Phylo - [Phyloiota](https://github.com/Phyloiota) - Phylo [Community DAO - lets go!]#2233  
Jeroen van den Hout - [jlvandenhout](https://github.com/jlvandenhout) - jvdhout#4402  
Dr.Electron - [Dr-Electron](https://github.com/Dr-Electron) - Dr.Electron#9370  
Critical - [kilianhln](https://github.com/kilianhln) - Critical#7111  
JSto - [JSto91](https://github.com/JSto91) - JSto#3746

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/iota-wiki/iota-wiki.svg?style=for-the-badge
[contributors-url]: https://github.com/iota-wiki/iota-wiki/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/iota-wiki/iota-wiki.svg?style=for-the-badge
[forks-url]: https://github.com/iota-wiki/iota-wiki/network/members
[stars-shield]: https://img.shields.io/github/stars/iota-wiki/iota-wiki.svg?style=for-the-badge
[stars-url]: https://github.com/iota-wiki/iota-wiki/stargazers
[issues-shield]: https://img.shields.io/github/issues/iota-wiki/iota-wiki.svg?style=for-the-badge
[issues-url]: https://github.com/iota-wiki/iota-wiki/issues
[gitpod-shield]: https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod&style=for-the-badge
[gitpod-url]: https://gitpod.io/#https://github.com/iota-community/iota-Wiki
