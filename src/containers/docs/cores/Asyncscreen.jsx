import React from 'react'
import './acs.css'
import Loader from '../../../components/common/loaders.jsx'

export default function asyncscreen({webstate}) {
  return (
    <section className='As-body'>
	   {webstate === 'notfound' ? (
       <h1>404 Not Found!</h1>
     ) :  webstate === 'loading' ?
      <Loader size={25} col={'dodgerblue'} />  : 
       <h1>{webstate}</h1>}
  	</section>
  )
}
