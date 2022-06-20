<!--
*** This README is usinge the Best-README-Template (https://github.com/othneildrew/Best-README-Template).
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Gitpod][gitpod-shield]][gitpod-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://wiki.iota.org">
    <img src="static/img/GitHub_Wiki_Banner.png" alt="IOTA Wiki GitHub Banner" width="830" height="300">
  </a>

  <p align="center">
    <a href="https://wiki.iota.org"><strong>Explore the Wiki »</strong></a>
    <br />
    <br />
    <a href="https://github.com/iota-community/iota-wiki/issues">Report Error</a>
    ·
    <a href="https://github.com/iota-community/iota-wiki/issues">Request Topic</a>
    .
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#local-development">Local Development</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

The IOTA wiki is a central hub for entering into the IOTA eco-system. A community driven initiative to provide an up-to-date collection of introductions and further reading for the Tech, The Teams, The Community, and everything in between. So anyone can learn how to build, adopt, and engage with IOTA, all in one space.

### Built With

The IOTA wiki and content is contained within this repo, and the system has been built using [Docusaurus v2.0](https://docusaurus.io/).

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/en/download/).

### Local Development

1. Run `yarn install` in your terminal. If you want to also install the external docs use:
```
git submodule update --init --recursive --remote
yarn cli start
yarn cli checkout
```
2. Run `yarn start` to build the basic Wiki structure or `BUILD=*/*/documentation,*/* yarn start` to also include external docs
3. Open `http://localhost:3000`

<!-- CONTRIBUTING -->

## Contributing

The IOTA wiki is a community development and we will review all pull-requests and issues posted to this repository. If you notice any errors, or feel we have forgot something, please feel free to create a pull request with any suggestions. Larger content additions and suggestions can start as issues which can further be discussed with the team maintaining the page.  
Have a look at [CONTRIBUTING](.github/CONTRIBUTING.md).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feat/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feat/AmazingFeature`)
5. Open a Pull Request

### Online one-click setup for contributing

You can use Gitpod (a free, online, VS Code-like IDE) for contributing. With a single click it will prepare everything you need to build and contribute to the wiki. Just click on this button and skip step one from above.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)][gitpod-url]

<!-- CONTACT -->

## Contact

Phylo - [Phyloiota](https://github.com/Phyloiota) - Phylo [Community DAO - lets go!]#2233  
Jeroen van den Hout - [jlvandenhout](https://github.com/jlvandenhout) - jvdhout#4402  
Dr.Electron - [Dr-Electron](https://github.com/Dr-Electron) - Dr.Electron#9370  
Critical - [Critical94](https://github.com/Critical94) - Critical#7111  
JSto - [JSto91](https://github.com/JSto91) - JSto#3746  

## Donate

The IOTA wiki is a completely voluntary project put together, maintained, and contributed to by a group of enthusiastic community members.
Feel free to support our work:

#### iota1qzrmyrnfhfauhv6gax50ncx844uppq4c5dddp3gk99ha0lx5jeqkwk6dapx

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/iota-community/iota-wiki.svg?style=for-the-badge
[contributors-url]: https://github.com/iota-community/iota-wiki/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/iota-community/iota-wiki.svg?style=for-the-badge
[forks-url]: https://github.com/iota-community/iota-wiki/network/members
[stars-shield]: https://img.shields.io/github/stars/iota-community/iota-wiki.svg?style=for-the-badge
[stars-url]: https://github.com/iota-community/iota-wiki/stargazers
[issues-shield]: https://img.shields.io/github/issues/iota-community/iota-wiki.svg?style=for-the-badge
[issues-url]: https://github.com/iota-community/iota-wiki/issues
[gitpod-shield]: https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod&style=for-the-badge
[gitpod-url]: https://gitpod.io/#https://github.com/iota-community/iota-wiki
