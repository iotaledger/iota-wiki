# IOTA wiki

The IOTA wiki is a central hub for entering into the IOTA eco-system. A community driven initiative to provide an up-to-date collection of introductions and further reading for the Tech, The Teams, The Community, and everything in between. So anyone can learn how to build, adopt, and engage with IOTA, all in one space.

# Contributions

The IOTA wiki is a community development and we will review all pull-requests and issues posted to this repository. If you notice any errors, or feel we have ommited something, please feel free to create a pull request with any suggestions. Larger content additions and suggestions can start as issues which can further be discussed with the team maintaining the page. 

# The Build

The IOTA wiki and content are contained within this repo, and the system has been built using [Docusaurus v2.0](https://docusaurus.io/) and [react.js](https://reactjs.org).

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
