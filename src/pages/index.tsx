import React, { useState, useEffect } from 'react'
import Child from '../components/child'

const App = (props)=>{
  const [text,setText] =useState(0)

  return <>
  name{text}


  <button onClick={()=>setText(text+1)}>124</button>
  <p>-------------</p>
  <Child name={'jk'} id={text}></Child>
  </>
}
export default App