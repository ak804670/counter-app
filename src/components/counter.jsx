import { useState } from "react"
import './counter.css'
function Counter(){
 const [count,setCount]= useState(0)

    return(
        
        <div className="frame">
        <h1>Counter</h1>
        <div className="container">
         
            <div className="minus" id="one" onClick={()=>setCount(count-1)}>- </div>
            <div className="count">{count}</div>
            <div className="plus" onClick={()=> setCount(count+1)}>+</div>
        </div>
    </div>
    )
}

export default Counter;