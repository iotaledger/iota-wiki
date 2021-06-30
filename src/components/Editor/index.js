import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import clsx from 'clsx'
import StarterKit from '@tiptap/starter-kit'
import EditorMenu from '../EditorMenu'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import unified from 'unified'
import markdown from 'remark-parse'
import frontmatter from 'remark-frontmatter'
import remark2rehype from 'remark-rehype'
import stringify from 'rehype-stringify'
import styles from './styles.module.css'

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
    autofocus: 'start',
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
            editor.chain().setContent(String(file)).focus('start').run()
          })
      } else {
        console.log(`Path does not exist: ${path ?? '/'}`)
      }
    },
  })

  return (
    <div className={clsx(styles.editor)}>
      <EditorMenu editor={editor} />
      <EditorContent editor={editor} className={clsx(styles.content, 'padding-vert--lg padding-horiz--xl')}/>
    </div>
  )
}