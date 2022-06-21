---
keywords:
- how to
description: How to setup documentation of a software project.
image: /img/participate.sng
---

# Setting Up Documentation

IOTA Wiki pulls project documentation from external GitHub repositories. For that to work, each project needs to maintain the same standard to keep itself compatible with the wiki's pipeline. For better reader experience, we also recommend the same documentation structure for every project, as once you know how to navigate through a single IOTA project, you know how to get around in any other.

For technical setup, base your repository on the [documentation template](https://github.com/iota-wiki/docs-template) or copy files from there. The `documentation` folder contains everything that is related to documentation. `documentation/docs` contains all actual documentation. You can use the `documentation/static` folder to store resources to your documentation. You can edit `sidebars.js` to include new articles to the table of contents.

The `documentation/docs` also contains preset folder structure that reflects our [software documentation structure guidelines](../reference/structure/overview.md).