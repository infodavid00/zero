import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Zeroheader from '../cores/Zeroheader.jsx'
import Coreplate from '../cores/Coreplate.jsx'
import Asyncscreen from '../cores/Asyncscreen.jsx'
import axios from 'axios';


export default function Zerohost() {
  const { docid } = useParams()
  const endpoint = 'https://zero-b1h2.onrender.com/v1/docs/get/'

  const [isloading , setisloading] = useState(true)
  const [data , setdata] = useState(null)
  const [err, seterr]  = useState(false)

  useEffect(() => {
    const fetchData = async () => {
        try {
          const url = endpoint + docid;
          const response = await axios.get(url, {
            headers: { 'Content-Type': 'application/json' }
          });
          setdata(response.data.data);
          seterr(false)
        } catch (err) {
          seterr('internal server error');
        } finally {
          setisloading(false);
        }
    };

    fetchData();
  }, []); 


  return (
  <>
    {isloading === true ? <Asyncscreen webstate={'loading'}/> :
      (
      <>
      {err === false ? (
        <>
        <Zeroheader />
         {typeof data === 'string' ? <Coreplate template={data} /> :
         <Asyncscreen webstate={'Docs Not Found!'} />
         }
       </> ) : 
        <Asyncscreen webstate={'Internal server error'} /> }
      </>
    )
  }
  </>
    // hide components and return only a loader
    // query database for zero hosts doc matching the docid
    // zero hosts uses thier own header
    // return header [its a zero host header meaning no props to pass(static)]
    // return core plate (pass props)
  )
}

