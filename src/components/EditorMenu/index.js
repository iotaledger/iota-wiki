import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

export default function EditorMenu({ editor, className }) {
  if (!editor) {
    return null
  }

  return (
    <div className={clsx(className, styles.menu)}>
      <span
        onClick={() => editor.chain().focus().undo().run()}
        className='material-icons'
      >
        undo
      </span>
      <span
        onClick={() => editor.chain().focus().redo().run()}
        className='material-icons'
      >
        redo
      </span>
      <span
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={clsx('material-icons', editor.isActive('paragraph') ? 'is-active' : '')}
      >
        segment
      </span>
      <span
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={clsx(editor.isActive('heading', { level: 1 }) ? 'is-active' : '')}
      >
        h1
      </span>
      <span
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={clsx(editor.isActive('heading', { level: 2 }) ? 'is-active' : '')}
      >
        h2
      </span>
      <span
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={clsx(editor.isActive('heading', { level: 3 }) ? 'is-active' : '')}
      >
        h3
      </span>
      <span
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={clsx(editor.isActive('heading', { level: 4 }) ? 'is-active' : '')}
      >
        h4
      </span>
      <span
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={clsx(editor.isActive('heading', { level: 5 }) ? 'is-active' : '')}
      >
        h5
      </span>
      <span
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={clsx(editor.isActive('heading', { level: 6 }) ? 'is-active' : '')}
      >
        h6
      </span>
      <span
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className='material-icons'
      >
        horizontal_rule
      </span>
      <span
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className='material-icons'
      >
        keyboard_return
      </span>
      <span
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={clsx('material-icons', editor.isActive('bold') ? 'is-active' : '')}
      >
        format_bold
      </span>
      <span
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={clsx('material-icons', editor.isActive('italic') ? 'is-active' : '')}
      >
        format_italic
      </span>
      <span
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={clsx('material-icons', editor.isActive('code') ? 'is-active' : '')}
      >
        code
      </span>
      <span
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={clsx('material-icons', editor.isActive('bulletList') ? 'is-active' : '')}
      >
        format_list_bulleted
      </span>
      <span
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={clsx('material-icons', editor.isActive('orderedList') ? 'is-active' : '')}
      >
        format_list_numbered
      </span>
      <span
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={clsx('material-icons', editor.isActive('codeBlock') ? 'is-active' : '')}
      >
        code
      </span>
      <span
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={clsx('material-icons', editor.isActive('blockquote') ? 'is-active' : '')}
      >
        format_quote
      </span>
      <span
        onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}
        className='material-icons'
      >
        format_clear
      </span>
    </div>
  )
}
