import React, {useState} from 'react'

export default function Counter() {
  
    const [counter, setCounter] = useState(3)

    const onAdd1 = () => {
        // counter++;
        setCounter(counter+1);
        if (counter+1 > 5){
            setCounter(0);
        }
    }

    return (
    <div className='container'>
        <h2>Counter: {counter} </h2>
        <button onClick={onAdd1}>Add 1</button>
    </div>
  )
}
