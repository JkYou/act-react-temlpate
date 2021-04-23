import React, {useEffect, useState} from 'react'
export default  function Hook(){
    const [count,setCount] = useState(0)
    const add=()=>{
        setCount(count+1)
    }
    const minu= ()=>{
        setCount(count-1)
    }
    useEffect(()=>{
        console.info(1111111)
        return ()=>{
            console.info('return222222')
        }

    },[count])
    return <div>
        <p>
            {count}
        </p>
        <p>
            <button onClick={()=>add()}>+</button>
            <button onClick={()=>minu()}>-</button>
        </p>
    </div>
}