import React from 'react'
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from '@syncfusion/ej2-react-richtexteditor'
import { EditorData } from '../../public/data/dummy'
import Header from '../../components/Header'

function editor() {
  return (
    <div className="m-2 mt-24 rounded-3xl bg-white p-2 dark:bg-secondary-dark-bg md:m-10 md:p-10">
      <Header title="Editor" category="App" />
      <RichTextEditorComponent>
        <EditorData />
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  )
}

export default editor
