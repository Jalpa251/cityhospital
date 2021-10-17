
import React, { useEffect, useState, version } from 'react';
import List from '../component/List';
import { Button, Form, Input } from 'reactstrap';



function Addmedicine(props) {
    const [inputFields, setinputFields] = useState([
        { name: '', price: '', quantity: '', expiry: '' }]);
    const [editData, seteditData] = useState({})


    console.log(props.updateProps)

    useEffect(
        () => {
            seteditData(props.updateProps)
        }
        , [props.updateProps])

    const handleSubmit = (e) => {


        e.preventDefault()

        const values = [...inputFields]

        // console.log(values)

        // localStorage.removeItem('medicine')
        let medicineData = JSON.parse(localStorage.getItem('medicine'))

        // console.log(medicineData)

        // console.log(medicineData.length-1)

        // console.log(medicineData[medicineData.length-1])

        // console.log(medicineData[medicineData.length-1].id+1)

        let n = (medicineData[medicineData.length - 1].id + 1)

        let s = values.map((d) => ({ ...d, "id": n++ }))
        // console.log(s)

        s.map((v) => medicineData.push(v))

        // console.log(medicineData)

        setinputFields([{ name: '', price: '', quantity: '', expiry: '' }])



        localStorage.setItem('medicine', JSON.stringify(medicineData))

        let localmedicineData = medicineData
        // localmedicineData  = JSON.parse(medicineData)
        console.log(localmedicineData)

        props.renderProps()

        alert("data is successfully added")

        // seteditData({})

    }
    const handleinputField = (e, index) => {
        console.log("handleinputField")
        const values = [...inputFields]

        if (e.target.name == "name") {
            values[index].name = e.target.value
        } else if (e.target.name == "price") {
            values[index].price = parseInt(e.target.value)
        } else if (e.target.name == "quantity") {
            values[index].quantity = parseInt(e.target.value)
        } else if (e.target.name == "expiry") {
            values[index].expiry = parseInt(e.target.value)
        }
        // console.log(values)
        setinputFields(values)
    }
    const addInputfield = (index) => {
        // console.log("ok")
        const values = [...inputFields]

        values.splice(index + 1, 0, { name: '', price: '', quantity: '', expiry: '' })
        setinputFields(values)

    }
    const removeinputField = (index) => {
        // console.log("okeremove")
        const values = [...inputFields]

        values.splice(index, 1)
        // if (index !== 0) {
            
        // }


        setinputFields(values)
    }

    const handleEdit = (e) => {
        // console.log("handleEdit")
        // const values = [...inputFields]

        seteditData(values => ({ ...values, [e.target.name]: e.target.name === "name" ? e.target.value : parseInt(e.target.value) }))
    }

    // console.log(editData)

    const handleEditSubmit = () => {
        // console.log(editData)

        let localmedicineData = JSON.parse(localStorage.getItem('medicine'))
        console.log(localmedicineData)

        let afterEdit = localmedicineData.map((l) => {
            if (editData.id === l.id) {
                return editData
            }
            return l
        })

        localStorage.removeItem('medicine')
        localStorage.setItem('medicine', JSON.stringify(afterEdit))
        // console.log(afterEdit)

        props.renderProps()
    //    props.setRerender()

        seteditData({})

        alert("update successfully")

    }

    // console.log(editData)

    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Add medicine</h2>
                    </div>

                    {
                        inputFields.map((inputField, index) => {

                            return (

                                <div className="row">

                                    <div className="col-2">
                                        <Input type="text" name="name" placeholder="name" style={{ marginBottom: '7px' }}
                                            value={editData.name && index == [0] ? editData.name : inputField.name}
                                            onChange={(e) => { editData.name ? handleEdit(e) : handleinputField(e, index) }}
                                        />
                                    </div>
                                    <div className="col-2">
                                        <Input type="text" name="price" placeholder="price"
                                            value={editData.price && index == [0] ? editData.price : inputField.price}
                                            onChange={(e) => { editData.price ? handleEdit(e) : handleinputField(e, index) }} />
                                    </div>
                                    <div className="col-2">
                                        <Input type="text" name="quantity" placeholder="quantity"
                                            value={editData.quantity && index == [0] ? editData.quantity : inputField.quantity}
                                            onChange={(e) => { editData.quantity ? handleEdit(e) : handleinputField(e, index) }} />
                                    </div>
                                    <div className="col-2">
                                        <Input type="text" name="expiry" placeholder="expiry"
                                            value={editData.expiry && index == [0] ? editData.expiry : inputField.expiry}
                                            onChange={(e) => { editData.expiry ? handleEdit(e) : handleinputField(e, index) }} />
                                    </div>

                                    <div className="col-2">
                                        {
                                            Object.keys(editData).length > 0 ?
                                            null
                                                :
                                                <>
                                                    <Button style={{ marginRight: '10px' }} onClick={() => { addInputfield(index); }} >+</Button>
                                                    <Button disabled={inputFields.length === 1 ? true : false} onClick={() => removeinputField(index)}>-</Button>
                                                </>
                                        }
                                    </div>
                                </div>

                            )

                        })

                    }
                    {

                        Object.keys(editData).length > 0 ?
                            <Button onClick={(e) => { handleEditSubmit(e) }} style={{ marginTop: '10px' }}>Update</Button>

                            :
                            <Button onClick={(e) => handleSubmit(e)} style={{ marginTop: '10px' }}> Submit</Button>
                    }

                </div>
            </section>
        </div>
    );
}

export default Addmedicine;