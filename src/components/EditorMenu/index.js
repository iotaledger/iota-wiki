import React, { useState } from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'


const headingLevels = [1, 2, 3, 4, 5, 6]

export default function EditorMenu({ editor, className }) {
  const changeFontStyle = (event) => {
    event.preventDefault()

    const value = event.target.value
    if (value == 'paragraph') {
      editor.chain().focus().setParagraph().run()
    } else {
      let level = parseInt(value)
      if (headingLevels.includes(level)) {
        editor.chain().focus().toggleHeading({ level: level }).run()
      }
    }
  }

  const checkFontStyle = () => {
    let active = []

    if (editor.isActive('paragraph')) {
      active.push('paragraph')
    }
    for (const level of headingLevels) {
      if (editor.isActive('heading', { level: level })) {
        active.push(level.toString())
      }
    }

    return active.length == 1 ? active[0] : ''
  }

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
      <select
        value={checkFontStyle()}
        onChange={changeFontStyle}>
        <option hidden disabled selected value=''></option>
        <option value="paragraph">Normal text</option>
        {
          headingLevels.map((level) => {
            return <option key={level} value={level.toString()}>{`Heading ${level}`}</option>
          })
        }
      </select>
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
