import React, { useEffect, useState } from 'react';
import { Button, Input } from 'reactstrap';
import List from '../component/List';
import {useDispatch} from 'react-redux'
import { addPatients } from '../redux/actions/patient.action';

function Addpatient(props) {
    const dispatch = useDispatch()
    // const [values,setvalues] = useState()
    const [inputField, setinputField] = useState([
        { name: '', age: '', phone: '', disease: '' }])
    const [updateData, setUpadateData] = useState({})

    // 
    useEffect(
        () => {
            setUpadateData(props.editProps)
        },
      [props.editProps])

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
        // 

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

    const handleSubmit = (e) => {
        const oldData = [...inputField]

        e.preventDefault()
            dispatch(addPatients(inputField))
          

       
    }

    const handleEdit = (e) => {
        
         setUpadateData(values => ({ ...values, [e.target.name]: e.target.value }))
        
         console.log(e.target.name , e.target.value)
    }
    
    
    const handleEditSubmit = () =>{
        // console.log(updateData)
            let localPatientData =JSON.parse(localStorage.getItem('patient'))
            console.log(localPatientData)
            let editData = localPatientData.map((l)=> {
            if(updateData.id === l.id){
                return updateData
            }
                return l
            })
            localStorage.removeItem('patient')
            localStorage.setItem('patient',JSON.stringify(editData))
            
            alert("data edit successfully")
            setUpadateData({})

            props.rerenderprops()
    }

    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Add patient</h2>
                    </div>
                    <div className="row">
                        
                    </div>
                    {

                        inputField.map((i, index) => {
                            return (
                                <div className="row">

                                    <div className="col-2">
                                        <Input type="text" name="name" placeholder="name" value={updateData.name && index == [0] ? updateData.name : i.name}  onChange={(e) =>{updateData.name ? handleEdit(e) : handleChange(e, index)}} style={{marginBottom:'5px'}}/>
                                    </div>
                                    <div className="col-2">
                                        <Input type="text" name="age" placeholder="age" value={updateData.age  && index == [0]  ? updateData.age : i.age} onChange={(e) =>updateData.age ? handleEdit(e) : handleChange(e, index)} />
                                    </div>
                                    <div className="col-2">
                                        <Input type="text" name="phone" placeholder="phone" value={updateData.phone  && index == [0]  ? updateData.phone : i.phone} onChange={(e) => updateData.phone? handleEdit(e) : handleChange(e, index)} />
                                    </div>
                                    <div className="col-2">
                                        <Input type="text" name="disease" placeholder="disease" value={updateData.disease  && index == [0] ? updateData.disease : i.disease} onChange={(e) =>updateData.disease ? handleEdit(e) : handleChange(e, index)} />
                                    </div>
                                    <div className="col-2">
                                        {
                                            Object.keys(updateData).length > 0 ?
                                            null
                                            :
                                            <>
                                        <Button style={{ marginRight: '10px' }} onClick={() => handleAdd(index)}>+</Button>
                                        <Button disabled={inputField.length === 1? true : false} onClick={() => handleRemove(index)}>-</Button>
                                        </>
                                        }
                                    </div>
                                </div>
                            )
                        })

                    }
                    {
                        Object.keys(updateData).length > 0?
                        <Button style={{ marginTop: '10px' }} onClick={(e)=>handleEditSubmit(e)}>Update</Button>
                        :
                        <Button style={{ marginTop: '10px' }} onClick={(e) => handleSubmit(e)}>Submit</Button>
    
                    }
                    
                </div>
            </section>
        </div>
    );
}

export default Addpatient;