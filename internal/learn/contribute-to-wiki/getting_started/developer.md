---
keywords:
  - how to
description: How to get your project documented.
image: /img/iota-wiki.png
---

# Writing as a Dev

As a developer, you are responsible for documentation of your project. You are the one to choose its content, write it, and keep it updated with every release of your software. The [wiki maintainers](https://wiki.iota.org/team) and technical writers from IOTA Foundation will help you to coordinate the work, setup your project, and bring it to the standard.

## Make a Friend

Before you start, contact a technical writer. We could then take a look at your project, assess its state, give you an advice, and plan the work together. Reach out to us through the `#iota-wiki` Discord channel,the `#dev-documentation` Slack channel, Slack DMs or via e-mail — whatever you have access to.

Active technical writers:

- Aleksei Korolev
- Lucas Tortora

## Prepare Your Repository

See [Setting Up Documentation](../how_tos/documentation_setup.md).

## Write Documentation

There are [four kinds of documentation](../reference/structure/overview.md). The reference can be generated automatically from inline comments in your code: say, with [rustdoc](https://doc.rust-lang.org/rustdoc/index.html), [typedoc](https://typedoc.org/), [javadoc](https://docs.oracle.com/javase/8/docs/technotes/tools/windows/javadoc.html), or [pydoc](https://docs.python.org/3/library/pydoc.html). Tutorials are handled by the IOTA Foundation's DevX team. This leaves you with [how to guides](../how_tos/how_to_write_how_tos.md) and explanation articles.

You do not have to write perfectly. It is a technical writer's job to produce a perfectly polished article. But we need to base our writing on something, and when it comes to a brand new feature or a code change, you momentarily become the world's only expert in it. If you write a rough, flawed article to the release of your software, your users would already prefer it over a blank page. And it is much less work for technical writers to streamline your text a bit instead of doing our own research of your project.

### Write Documentation As a Routine 

Documentation is not optional. If a feature is new and undocumented, then nobody knows that they could use it. This feature doesn't exist. If you changed an existing feature and forgot to update the documentation, then users will follow your instructions just to fail. From their point of view, you have introduced a bug. Documentation is fused with your code, and you should treat it as inherent part of your job, in the same right as coding and testing is.

The natural way to plan documentation is to create a ticket before every release, to treat it as a separate product feature which must be written in a very odd programming language. We would instead suggest your team to treat documentation as a mandatory part of every task:

|Documentation as a part of every ticket           |Documentation as a separate ticket                                                |
|---                                               |---                                                                               |
|You have it listed for every feature by default.  | You can forget to create it.                                                     |
|You release the feature documented.               | You can keep the ticket at the bottom of the backlog forever and never write it. |
|The polished version is in the work right away.   | Documentation tickets get deprioritized over features and bugfixes. TWs get involved weeks later, shortly before a major version release.  |
|You write it while it fresh.                      | You will have to recall every detail later.                                      |
|You write one small piece at a time.              | You write in huge intimidating chunks.                                           |                                     
|You write regularily and build a habit.           | You write once in a few months and you treat writing as an unpleasant odd job.   |

### Let Writers Know

Once again, technical writers are here to help. To let us know that you got some work for us, see [Request a Technical Writer](../how_tos/request_tw.md).

## Further Reads

Technical writers follow the [full style guide](../reference/style/manifesto.md), but we prepared a [single-page version](./quick_advice.md) of it for you.

We also keep a list of techniques that might help you: see [Writing Tools](../explanations/tools/).