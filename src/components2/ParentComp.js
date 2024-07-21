import React, {useState} from 'react'

export default function ParentComp(children) {
  const [show,setShow] = useState(false);

  return (
    <div className='border  p-3'>
        <h2>Parent</h2>
        <button onClick={() => setShow(true)}>Show</button>
        {show && children}
    </div>
  )
}