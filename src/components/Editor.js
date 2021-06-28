import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import EditorMenu from './EditorMenu'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import unified from 'unified'
import markdown from 'remark-parse'
import frontmatter from 'remark-frontmatter'
import remark2rehype from 'remark-rehype'
import stringify from 'rehype-stringify'

export default function Editor() {
  const {
    siteConfig: {
      organizationName,
      projectName,
    }
  } = useDocusaurusContext()

  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    onBeforeCreate: async ({ editor }) => {
      let parameters = new URLSearchParams(window.location.search)
      let path = parameters.get("path")

      let response = await fetch(`https://raw.githubusercontent.com/${organizationName}/${projectName}/master${path}`)
      if (response.ok) {
        let text = await response.text()

        const options = {}
        unified()
          .use(markdown)
          .use(frontmatter, ['yaml'])
          .use(remark2rehype)
          .use(stringify)
          .process(text, function (err, file) {
            if (err) throw err
            editor.commands.setContent(String(file))
          })
      } else {
        console.log(`Path does not exist: ${path ?? '/'}`)
      }
    },
  })

  return (
    <div>
      <EditorMenu editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}