import React, { useState } from 'react';
import { Button, Input } from 'reactstrap';
import List from '../component/List';


function Addpatient(props) {
    // const [values,setvalues] = useState()
    const [inputField, setinputField] = useState([
        { name: '', age: '', phone: '', disease: '' }])

    const handleChange = (e, index) => {
        const oldData = [...inputField]

        if (e.target.name == "name") {
            oldData[index].name = e.target.value
        } else if (e.target.name == "age") {
            oldData[index].age = parseInt(e.target.value)
        } else if (e.target.name == "phone") {
            oldData[index].phone = parseInt(e.target.value)
        } else if (e.target.name == "disease") {
            oldData[index].disease = e.target.value
        }
        // console.log(oldData)

        setinputField(oldData)
    }
    const handleAdd = (index) => {
        const oldData = [...inputField]
        oldData.splice(index + 1, 0, { name: '', age: '', phone: '', disease: '' })

        setinputField(oldData)
    }
    const handleRemove = (index) => {
        const oldData = [...inputField]
        oldData.splice(index, 1)
        setinputField(oldData)

    }

    const handleSubmit = () => {
        console.log("ok")
        const oldData = [...inputField]
localStorage.removeItem('patient')
    let patientData =  JSON.parse(localStorage.getItem('patient'))
    console.log(patientData)
        console.log(patientData)
        console.log(patientData.length)

        let n = (patientData.length+100)
        console.log(n)
         let s = oldData.map((d)=>({...d,"id":n++}))
         console.log(s)
// localStorage.removeItem('patient')
        s.map((v)=>patientData.push(v))

        localStorage.removeItem('patient')
        localStorage.setItem('patient',JSON.stringify(patientData))

       let localpatientData = patientData

       localpatientData = JSON.parse(patientData)
       console.log(localpatientData)



    }

    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Add patient</h2>
                    </div>
                    <div className="row">
                        {/* {
                            localpatientData.map((p) => <List name={p.name} age={p.age} phone={p.phone} disease={p.disease} />)

                        } */}
                    </div>
                    {

                        inputField.map((i, index) => {
                            return (
                                <div className="row">

                                    <div className="col-2">
                                        <Input type="text" value={i.name} name="name" placeholder="name" onChange={(e) => handleChange(e, index)} />
                                    </div>
                                    <div className="col-2">
                                        <Input type="text" name="age" placeholder="age" value={i.age} onChange={(e) => handleChange(e, index)} />
                                    </div>
                                    <div className="col-2">
                                        <Input type="text" name="phone" placeholder="phone" value={i.phone} onChange={(e) => handleChange(e, index)} />
                                    </div>
                                    <div className="col-2">
                                        <Input type="text" name="disease" placeholder="disease" value={i.disease} onChange={(e) => handleChange(e, index)} />
                                    </div>
                                    <div className="col-2">
                                        <Button style={{ marginRight: '10px' }} onClick={() => handleAdd(index)}>+</Button>
                                        <Button onClick={() => handleRemove(index)}>-</Button>
                                    </div>
                                </div>
                            )
                        })

                    }
                    <Button style={{ marginTop: '10px' }} onClick={() => handleSubmit()}>Submit</Button>

                </div>
            </section>
        </div>
    );
}

export default Addpatient;