import React, { useState, useEffect } from 'react';
import List from '../component/List';
import { FaBeer, FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Addmedicine from './Addmedicine';
import { Button, Input } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import {deleteMedicine, editMedicine, fetchMedicines} from '../redux/actions/medicine.action'
function Medicine(props) {
    const [update, setupdate] = useState({})
    const [data, setData] = useState([{}])
    const [searchData, setSearchData] = useState()
    const [sortData, setSortData] = useState()
    const [sort, setSort] = useState()

    const dispatch = useDispatch()
    const medicine = useSelector(state =>state.Medicines)
 

    useEffect(
        () => {
           
            dispatch(fetchMedicines())
        },

        [])
        console.log(medicine.medicines)

        const handleSearch = (e) => {
        console.log(e.target.value)

        if (e.target.value !== '') {
            let afterSearch = medicine.medicines.filter((d) =>
                d.name.toLowerCase().includes(e.target.value) ||
                d.price.toString().includes(e.target.value) ||
                d.quantity.toString().includes(e.target.value) ||
                d.expiry.toString().includes(e.target.value)
            )

            setSearchData(afterSearch)

        } else {
            setSearchData()
            setSortData()
           handleSort('', "yes")
        }
    }

    const handleSort = (e = '', status = '') => {

        let val = e === '' ? sort : e.target.value

        setSort(val)

        let afterData = searchData && status === "" ? searchData : medicine.medicines

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
    }
    const handleDelete = (id) => {
         dispatch(deleteMedicine(id))
    }

    const handleEdit = (id) => {
        let afterEdit = medicine.medicines.filter((d) => d.id === id)
        setupdate(afterEdit[0])
    }

    let finalsearchData = searchData ? searchData : sortData ? sortData : medicine.medicines
    console.log(finalsearchData)


    return (
        <section id="doctors" className="doctors">
            <div className="container">
                <div className="section-title">
                    <h2>Medicine</h2>
                </div>
                <div className="row">


                    <Addmedicine updateProps={update}  />
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