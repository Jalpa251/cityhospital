import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

function Counter1(props) {
    const[counter,setCounter]=useState(0);

    const count=()=>{
        setCounter(counter+1)
        console.log("count")
        
    }
    useEffect(
        ()=>{
            setInterval(count(),10)
            return()=>{

            }
        }
    )
    return (
        <div>
            <h2>{counter}</h2>

        </div>
    );
}

export default Counter1;