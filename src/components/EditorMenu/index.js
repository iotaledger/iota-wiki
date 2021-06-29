import React, { useState } from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'


const headingLevels = [1, 2, 3, 4, 5, 6]

const Group = ({className, children}) => {
  return (
    <div className={clsx(styles.group, className)}>
      {children}
    </div>
  )
}

const Icon = (args) => {
  return (
    <div
      className={clsx(
        styles.icon,
        (args.name && args.editor.isActive(args.name)) ? 'active' : ''
      )}
      onClick={args.action}
    >
      <span>{args.children}</span>
    </div>
  )
}


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
    <div className={clsx(className, styles.menu, 'material-icons')}>
      <Group>
        <Icon editor={editor} action={() => editor.chain().focus().undo().run()}>
          undo
        </Icon>
        <Icon editor={editor} action={() => editor.chain().focus().redo().run()}>
          redo
        </Icon>
      </Group>
      <Group>
        <select value={checkFontStyle()} onChange={changeFontStyle}>
          <option hidden disabled value=''></option>
          <option value="paragraph">Normal text</option>
          {headingLevels.map((level) => {
            return <option key={level} value={level}>{`Heading ${level}`}</option>
          })}
        </select>
      </Group>
      <Group>
        <Icon editor={editor} action={() => editor.chain().focus().toggleBold().run()} name='bold'>
          format_bold
        </Icon>
        <Icon editor={editor} action={() => editor.chain().focus().toggleItalic().run()} name='italic'>
          format_italic
        </Icon>
        <Icon editor={editor} action={() => editor.chain().focus().toggleCode().run()} name='code'>
          code
        </Icon>
      </Group>
      <Group>
        <Icon editor={editor} action={() => editor.chain().focus().toggleBulletList().run()} name='bulletList'>
          format_list_bulleted
        </Icon>
        <Icon editor={editor} action={() => editor.chain().focus().toggleOrderedList().run()} name='orderedList'>
          format_list_numbered
        </Icon>
        <Icon editor={editor} action={() => editor.chain().focus().toggleCodeBlock().run()} name='codeBlock'>
          code
        </Icon>
        <Icon editor={editor} action={() => editor.chain().focus().toggleBlockquote().run()} name='blockquote'>
          format_quote
        </Icon>
      </Group>
      <Group>
        <Icon editor={editor} action={() => editor.chain().focus().setHorizontalRule().run()}>
          horizontal_rule
        </Icon>
        <Icon editor={editor} action={() => editor.chain().focus().setHardBreak().run()}>
          keyboard_return
        </Icon>
      </Group>
      <Group>
        <Icon editor={editor} action={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}>
          format_clear
        </Icon>
      </Group>
    </div>
  )
}
