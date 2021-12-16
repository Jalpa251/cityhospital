
import React, { useEffect, useState, version } from 'react';
import List from '../component/List';
import { Button, Form, Input } from 'reactstrap';
import { addMedicine, editMedicine } from '../redux/actions/medicine.action';
import { useDispatch, useSelector } from 'react-redux';
import { Medicines } from '../redux/reducers/medicine.reducer';




function Addmedicine(props) {
    const [inputFields, setinputFields] = useState([
        { name: '', price: '', quantity: '', expiry: '' }]);
    const [editData, seteditData] = useState({})
    const dispatch = useDispatch()
    const medicine = useSelector(state => state.Medicines)
    console.log(props.updateProps)

    useEffect(
        () => {
            seteditData(props.updateProps)
        }
        , [props.updateProps])

    const handleSubmit = (e) => {
        e.preventDefault()
        const values = [...inputFields]
        dispatch(addMedicine(inputFields))
        
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
        const values = [...inputFields]

        values.splice(index, 1)
        setinputFields(values)
    }

    const handleEdit = (e) => {
        seteditData(values => ({ ...values, [e.target.name]: e.target.name === "name" ? e.target.value : parseInt(e.target.value) }))
    }



    const handleEditSubmit = () => {
        dispatch(editMedicine(editData))
        seteditData({})
    }

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