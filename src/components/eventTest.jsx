import React from 'react'

export default function EventTest() {

  const onBtnClick = () => {
   alert("click")
  }
   
  return (
    <div className='container'>
        <h2>Event test</h2>
        <button onClick={onBtnClick}>click 1</button>
        <button onClick={() => {
            alert("click 2")
        }}>click 2</button>
    </div>
  )
}
