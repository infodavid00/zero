import { Routes, Route } from 'react-router-dom'
import Zerohost from './containers/docs/entry/Zerohost.jsx'

function App() {
  return (
    <>
      <Routes>
       <Route exact path='/docs/zero_host/:docid' element={<Zerohost />} />
       {/* <Route exact path='/docs/:username/:docid' element={<Docs />} /> */}
      </Routes>
    </>
  )
}

export default App
