
import React from 'react'
import './coreplate.css'
import Engine from '../../engine/Engine.jsx'

export default function Coreplate({template}) {
  return (
    <section>
      <section className='zero-core-container'>
        <Engine template={template} />
      </section>
    </section>
  )
}
