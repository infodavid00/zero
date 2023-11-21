
import React from 'react'
import HtmlReactParser from 'html-react-parser'
import './RFCDA.css'

export default function Engine({template}) {
  return (
    <>
      {HtmlReactParser(template)}
    </>
  )
}
