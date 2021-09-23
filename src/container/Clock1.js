import React,{useState,useEffect} from 'react';

function Clock1(props) {
    const [date,setDate]=useState(new Date())
    const [name,setName]=useState("Amit")

    const changeName =()=>{
        setName("Ajay")
    }
    const tick =()=>{
        console.log("4 tick");
        setDate(new Date())
    }
    useEffect(
        ()=>{
            //componentDidMount
            setInterval(tick(),1000);
            return()=>{
                //component will unmount
            }
        }
    ,[date])
    return (
        <div>
            <h1>{date.toLocaleTimeString()}</h1>
            <h2>{name}</h2>
            <button onClick={()=>changeName()}>Change</button>
        </div>
    );
}

export default Clock1;