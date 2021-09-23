
import React, { useEffect, useState, version } from 'react';
import List from '../component/List';
import { Button, Form, Input } from 'reactstrap';



function Addmedicine(props) {
    const [inputField, setinputField] = useState([
        { name: '', price: '', quantity: '', expiry: '' }]);
       const [editData,seteditData] = useState()

       
       console.log(props.updateProps)
        
useEffect(
    () =>{
        seteditData(props.updateProps)
    }
,[props.updateProps])

    const handleSubmit = (e) => {
    
    
        e.preventDefault()

        const values = [...inputField]

        // localStorage.removeItem('medicine')
        let medicineData = JSON.parse(localStorage.getItem('medicine'))

        // console.log(medicineData)

        // console.log(medicineData.length-1)

        // console.log(medicineData[medicineData.length-1])

        // console.log(medicineData[medicineData.length-1].id+1)

        let n = (medicineData[medicineData.length-1].id+1)
        
        let s = values.map((d)=>({...d, "id": n++}))
        // console.log(s)
        
        s.map((v)=>medicineData.push(v))
        
         console.log(medicineData)

         setinputField([{ name: '', price: '', quantity: '', expiry: '' }])
        
       
        
         localStorage.setItem('medicine',JSON.stringify(medicineData))
         
        let  localmedicineData = medicineData
        // localmedicineData  = JSON.parse(medicineData)
         console.log(localmedicineData)
         
         props.renderProps()

    }
    const handleinputField = (e, index) => {
        const values = [...inputField]

         if(e.target.name == "name") {
            values[index].name = e.target.value
        } else if (e.target.name == "price") {
            values[index].price = parseInt(e.target.value)
        } else if (e.target.name == "quantity") {
            values[index].quantity = parseInt(e.target.value)
        } else if (e.target.name == "expiry") {
            values[index].expiry = parseInt(e.target.value)
        }
        // console.log(values)
        setinputField(values)
    }
    const addInputfield = (index) => {
        // console.log("ok")
        const values = [...inputField]

       

        values.splice(index+1,0,{ name: '', price: '', quantity: '', expiry: '' })
        setinputField(values)

    }
    const removeinputField = (index) => {
        // console.log("okeremove")
        const values = [...inputField]

        values.splice(index, 1)
        setinputField(values)
    }

    const handleEdit = (e)=>{
        const values = [...inputField]

        seteditData(values => ({ ...values, [e.target.name]: e.target.value }))
         console.log(console.log(e.target.name + e.target.value))

         setinputField(values)
    }

    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Add medicine</h2>
                    </div>
                    <Form method="post" onSubmit={(e) => handleSubmit(e)}>
                        {
                            inputField.map((inputField, index) => {

                                return (
                                    
                                    <div className="row">

                                        <div className="col-2">
                                            <Input type="text" name="name" placeholder="name" 
                                            
                                            // {setedit?value={props.updateProps.name}:value={inputField.name} }
                                            value={editData && index==[0]? editData.name : inputField.name} 
                                            onChange={(e) => handleinputField(e, index)} />
                                        </div>
                                        <div className="col-2">
                                            <Input type="text" name="price" placeholder="price" 
                                            value={editData && index==[0]? editData.price : inputField.price}
                                            onChange={(e) => handleinputField(e, index)} />
                                        </div>
                                        <div className="col-2">
                                            <Input type="text" name="quantity" placeholder="quantity" 
                                            value={editData && index==[0]? editData.quantity : inputField.quantity}
                                            onChange={(e) => handleinputField(e, index)} />
                                        </div>
                                        <div className="col-2">
                                            <Input type="text" name="expiry" placeholder="expiry" 
                                            value={editData && index==[0]? editData.expiry : inputField.expiry}  
                                            onChange={(e) => handleinputField(e, index)} />
                                        </div>
                                        <div className="col-2">
                                            <Button style={{marginRight:'10px'}} onClick={() => addInputfield(index)} >+</Button>
                                            <Button onClick={() => removeinputField(index)}>-</Button>
                                        </div>
                                        
                                        
                                    </div>

                                )
                               
                            })
                           
                        }
                         <Button type="submit" className="text-align-center" style={{marginTop:'10px'}}>Submit</Button>
                    </Form>
                    
                </div>
            </section>
        </div>
    );
}

export default Addmedicine;