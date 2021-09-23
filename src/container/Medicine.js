import React, { useState } from 'react';
import List from '../component/List';
import { FaBeer, FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Addmedicine from './Addmedicine';
import { Button } from 'reactstrap';

const data = [
    {
        id: 101,
        name: "Abacavir",
        quantity: 69,
        price: 900,
        expiry: 2020,
    },
    {
        id: 102,
        name: "Busulfan",
        quantity: 50,
        price: 250,
        expiry: 2021,
    },
    {
        id: 103,
        name: "Captopril",
        quantity: 34,
        price: 480,
        expiry: 2022,
    },
    {
        id: 104,
        name: "Dasatinib",
        quantity: 99,
        price: 100,
        expiry: 2023,
    },
    {
        id: 105,
        name: "Efavirenz",
        quantity: 100,
        price: 670,
        expiry: 2024,
    },
    {
        id: 106,
        name: "Famciclovir",
        quantity: 46,
        price: 300,
        expiry: 2025,
    }
]




function Medicine(props) {
    // const [medicine, setmedicine] = useState(data)
    const [search, setsearch] = useState('')
    const[render,setReRender] = useState({})
    const [update,setupdate] = useState({})

        // localStorage.removeItem('medicine')
    let medicineData = localStorage.getItem('medicine')
    let localmedicineData;
    
    if(medicineData == null){
        localStorage.setItem('medicine',JSON.stringify(data))

        localmedicineData = data
        // console.log("if"+localmedicineData)
    }else{
        localmedicineData = JSON.parse(medicineData)
        console.log(localmedicineData)
    }

    let filterData = localmedicineData.filter((m) =>
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.price.toString().includes(search.toString()) ||
        m.quantity.toString().includes(search.toString()) ||
        m.expiry.toString().includes(search.toString()))

    if (search == '') {
        filterData = localmedicineData
    }

    const handleReRender = () =>{
        setReRender({})
    }
    
    const handleDelete =(id) =>{
        console.log("ok" +id)

     console.log(localmedicineData)

 let afterDelete =   localmedicineData.filter((d)=>d.id !== id)
        
        localStorage.removeItem('medicine')
        localStorage.setItem('medicine',JSON.stringify(afterDelete))

        alert('delete successfully')

        setReRender({})
        console.log(afterDelete)
    }
    const handleEdit = (id)=>{
        console.log("ok"+id)

        console.log(localmedicineData)

        let afterEdit = localmedicineData.filter ((d)=>d.id === id)
        console.log(afterEdit)
        console.log(afterEdit[0])

        setupdate(afterEdit[0])

    }
    console.log(update)
   

    return (
        <section id="doctors" className="doctors">
            <div className="container">
                <div className="section-title">
                    <h2>Medicine</h2>
                </div>
                <div className="row">
                    {/* <div className="text-center"><NavLink to="/addmedicine">Addmedicine</NavLink></div> */}
                    <Addmedicine updateProps={update} renderProps = {()=>handleReRender()}/>

                    <input type="text" name="name" className="form-control" id="name" placeholder="Serch here" onChange={event => { setsearch(event.target.value) }} className="search" />

                    {
                        filterData.map((m, index) => <List onDelete = {()=>handleDelete(m.id)}  onEdit={()=>handleEdit(m.id)}name={m.name} quantity={m.quantity} price={m.price} expiry={m.expiry} />)
                    }
                    
                </div>
            </div>
        </section>

    );
}

export default Medicine;