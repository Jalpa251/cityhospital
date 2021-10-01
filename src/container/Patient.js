import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import List from '../component/List';
import Addpatient from './Addpatient';

// const data = [
//     {
//         id: 101,
//         name: "Smith Carter",
//         age: 28,
//         phone: 1234567890,
//         disease :"Asthma"

//     },
//     {
//         id: 102,
//         name: "Harry Potter",
//         age: 38,
//         phone: 4567894321,
//         disease:"Influenza" 
//     },
//     {
//         id: 103,
//         name: "Tonny Stark",
//         age: 35,
//         phone: 7896540654,
//         disease:"Malaria"
//     }
// ]
// localStorage.removeItem('patient')



function Patient(props) {
// const [ render,setRerender] = useState ({})
localStorage.removeItem('patient')
let  localpatientData =  JSON.parse(localStorage.getItem('patient'))
console.log(localpatientData)

// const handleReRender =()=>{
//     setRerender({})
// }

    return (
        <div>
            <section id="doctors" className="doctors">
                <div className="container">
                    <div className="section-title">
                        <h2>Patient</h2>
                        <div className="text-center"><NavLink to="/addpatient">addpatient</NavLink></div> 
                    </div>
                    <div className="row">
                        {/* <Addpatient rerenderprops={()=>handleReRender()}/> */}
                        {/* <div className="text-center"><NavLink to="/addpatient">addpatient</NavLink></div>  */}

                         {/* {
                            localpatientData.map((p)=><List name={p.name} age={p.age} phone={p.phone} disease={p.disease}/>)
                        }     */}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Patient;