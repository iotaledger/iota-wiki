---
description: Contribute to the wiki by editing articles.
image: /img/iota-wiki.png
tags:
  - edit
  - contribute
  - update
---

# Edit an Article

You can edit any article in this wiki in six simple steps.

:::tip Create an Issue

You can [create an issue](../how_tos/create_an_issue.md) to let the wiki team know what you'd like.

:::

## Prerequisites

- A [GitHub account](https://github.com/join).
- Basic [Markdown](https://www.markdownguide.org/basic-syntax/) knowledge.

:::tip Writing Tools
There are plenty of [tools](../explanations/tools/writing_tools.md) to help you improve your writing.
:::

## 1. Click the `Edit this Page` Button

Every article in this wiki has an `Edit this Page` button you can use to automatically create a
[fork](https://docs.github.com/es/get-started/quickstart/fork-a-repo) of the repository you are currently viewing,
and open up an online text editor which you can use to edit content.

![Edit Button](/img/learn/contribute/editButton.png)

## 2. Update the Article

Once you have connected your GitHub account, the editor will open the article, and you are ready to start editing.

![GitHub Editor](/img/learn/contribute/gitHubEditor.png)

### 2.1 Preview Your Changes

You can use the `Preview` tab to preview your changes. You can also show the difference between the current article and
your update by checking the `Show diff` checkbox. Content which is marked in red will be removed, and content which is
marked in green will be added.

![GitHub Editor Preview](/img/learn/contribute/gitHubEditorPreview.png)

## 3. Propose Your Changes

After you have [updated the article](#2-update-the-article) in any way, the `Propose changes` button will be
automatically enabled. This button will create the first [commit](https://github.com/git-guides/git-commit) in your
upcoming
[pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
.

To ensure your pull request is successful you should add a descriptive title that explains the motivation for your
update. For example:

![Github Editor Propose Changes](/img/learn/contribute/gitHubEditorProposeChanges.png)

## 4. Compare Your Changes

Once you click the `Propose Changes` button you will be directed to a new page in which you will be able to review your
changes side by side with the original. The left side will show the original file, while the right shows the updated
version.

![Github Editor Compare Changes](/img/learn/contribute/gitHubEditorCompare.png)

## 5. Create the Pull Request

Once you are happy with your changes you should draft a pull request by clicking the `Create pull request` button
located above the side by side editor. The pull request uses a similar editor to the one you used to edit the file in
step 2, so you'll be able to preview your request before submitting it.

The description will be auto-populated with section headers and a small explanation about what you should add to each
section. You should add a descriptive tile as well as address any relevant sections to ensure your pull request is
successful.

### Template Sections

#### Description of change

This is the most important section in the template. Make sure that you include all your updates and the motivation
behind them in this section.

##### Links to any relevant issues

If you have [created an issue](../how_tos/create_an_issue.md), or are working on an existing issue, please add it here so the pull
request can be linked to the issue.

##### Type of change

You should delete the types which don't apply to your changes in this section.

##### How the change has been tested

Please add any details on any test you run here. If you haven't tested anything, please clarify it here, **the
repositories will automatically test any pull requests for build errors.**

##### Change checklist

You should check the boxes that apply to your changes, and delete the others.

## 6. Submit the Pull Request

Once you have updated the title and description, you can click the `Create pull request` button. This will submit the
pull request, but it will not be merged until the project maintainers approve it. This may take some time, and they may
request or suggest changes to your pull request.
