import React, { useState, useEffect } from 'react';
import List from '../component/List';
import { FaBeer, FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Addmedicine from './Addmedicine';
import { Button, Input } from 'reactstrap';

function Medicine(props) {

    const orgData = [
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


    // const [search, setsearch] = useState('')
    const [render, setReRender] = useState([{}])
    const [update, setupdate] = useState({})
    const [data, setData] = useState([{}])
    const [searchData, setSearchData] = useState()
    const [sortData, setSortData] = useState()
    const [sort, setSort] = useState()


    useEffect(
        () => {
            loadData()
        },

        [])

    const loadData = () => {


        let medicineData = localStorage.getItem('medicine')
        let localmedicineData;

        if (medicineData == null) {
            localStorage.setItem('medicine', JSON.stringify(orgData))

            localmedicineData = orgData
        } else {
            localmedicineData = JSON.parse(medicineData)

        }
        setData(localmedicineData)
        // console.log(localmedicineData)
    }


    const handleSearch = (e) => {
        console.log(e.target.value)

        if (e.target.value !== '') {
            let afterSearch = data.filter((d) =>
                d.name.toLowerCase().includes(e.target.value) ||
                d.price.toString().includes(e.target.value) ||
                d.quantity.toString().includes(e.target.value) ||
                d.expiry.toString().includes(e.target.value)
            )

            setSearchData(afterSearch)

        } else {
            setSearchData()
            setSortData()
            loadData()
            handleSort('', "yes")

        }
    }

    const handleSort = (e = '', status = '') => {

        let val = e === '' ? sort : e.target.value

        setSort(val)

        let afterData = searchData && status === "" ? searchData : data

        let afterSort = afterData.sort((a, b) => {
            if (val === "hl") {
                return a.price < b.price ? 1 : -1
            } else if (val === "lh") {
                return a.price > b.price ? 1 : -1
            } else if (val === "name") {
                return a.name.localeCompare(b.name)
            } else if (val === "quantity") {
                return a.quantity > b.quantity ? 1 : -1
            } else if (val === "expiry") {
                return a.expiry > b.expiry ? 1 : -1
            }
        })

        setSortData(afterSort)

        setReRender({})

    }

    const handleReRender = () => {
        setReRender({})
        loadData()
    }

    const handleDelete = (id) => {

        let afterDelete = data.filter((d) => d.id !== id)
        localStorage.removeItem('medicine')
        localStorage.setItem('medicine', JSON.stringify(afterDelete))

        alert('delete successfully')
        handleReRender()

    }

    const handleEdit = (id) => {

        let afterEdit = data.filter((d) => d.id === id)
        setupdate(afterEdit[0])
    }

    let finalsearchData = searchData ? searchData : sortData ? sortData : data
    console.log(finalsearchData)


    return (
        <section id="doctors" className="doctors">
            <div className="container">
                <div className="section-title">
                    <h2>Medicine</h2>
                </div>
                <div className="row">


                    <Addmedicine updateProps={update} renderProps={() => handleReRender()} />
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                        <input type="search" name="name" className="form-control" placeholder="Serch here" onChange={(e) => handleSearch(e)} />
                    </div>

                    <div className="col-md-6 form-group mt-3 mt-md-0">
                        <Input type="select" name="select" id="exampleSelect" placeholder="sort here" onChange={(e) => handleSort(e)}>
                            <option value="">---Sort---</option>
                            <option value="lh"> price low to high</option>
                            <option value="hl">price high to low</option>
                            <option value="name">name</option>
                            <option value="quantity">quantity</option>
                            <option value="expiry">expiry</option>
                        </Input>
                    </div>
                </div>
                <div className="row">

                    {


                        finalsearchData.map((m, index) => <List onDelete={() => handleDelete(m.id)} onEdit={() => handleEdit(m.id)} name={m.name} quantity={m.quantity} price={m.price} expiry={m.expiry} />)


                    }
                </div>

            </div >
        </section >

    );
}

export default Medicine;