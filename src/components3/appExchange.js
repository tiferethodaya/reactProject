import React, {useRef, useState} from 'react'

export default function AppExchange() {

let coinRef = useRef();
let amountRef = useRef();
let [total, setTotal] = useState(0);

const calcTotal = () => {
    let myTotal = coinRef.current.value * amountRef.current.value;
    setTotal(myTotal.toFixed(2));
}
  return (
    <div className='col-lg-6 p-3 shadow mt-3 mx-auto'>
         <h2>Enter the currency you want to exchange:</h2>
         <select onChange={calcTotal} ref={coinRef} className='form-select'>
            <option value="3.3">USD</option>
            <option value="3.9">EURO</option>
            <option value="0.11">BATH</option>
         </select>
         <h2>Enter the amount you want:</h2>
         <input onInput={calcTotal} ref={amountRef} type="number" defaultValue={100} className='form-control' />
         <h3 className='mt-4'>You will get {total} NIS</h3>
    </div>
  )
}



