import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Input } from 'reactstrap';
import List from '../component/List';
import Addpatient from './Addpatient';



function Patient(props) {
    const oldData = [
        {
            id: 101,
            name: "Smith Carter",
            age: 28,
            phone: 1234567890,
            disease: "Asthma"

        },
        {
            id: 102,
            name: "Harry Potter",
            age: 38,
            phone: 4567894321,
            disease: "Influenza"
        },
        {
            id: 103,
            name: "Tonny Stark",
            age: 35,
            phone: 7896540654,
            disease: "Malaria"
        }
    ]


    const [rerender, SetreRender] = useState([{}])
    const [editData, SetEditData] = useState({})
    const [data, setData] = useState([{}])
    const [searchData, setSearchData] = useState()
    const [sortData,setSortData] = useState()
    const [sort,setSort] = useState()

    useEffect(
        () => {
            loadData()
        }
        , [])

    const loadData = () => {
        let patientData = localStorage.getItem('patient')

        let localPatientData;
        if (patientData == null) {
            localStorage.setItem('patient', JSON.stringify(oldData))
            localPatientData = oldData
        } else {
            localPatientData = JSON.parse(patientData)
        }
        // console.log(localPatientData)
        setData(localPatientData)
    }
    // console.log(data)

    const handleReRender = () => {
        SetreRender({})
        loadData()
    }

    const handleDelete = (id) => {
        let afterDelete = data.filter((p) => p.id !== id)
        localStorage.removeItem('patient')
        localStorage.setItem('patient', JSON.stringify(afterDelete))

        alert('deleta data successfully')
        handleReRender({})

    }
    const handleEdit = (id) => {

        let afterEdit = data.filter((p) => p.id === id)

        SetEditData(afterEdit[0])

    }
    const handleSearch = (e) => {

        console.log(e.target.value)
        // console.log(data)

        if (e.target.value !== "") {
            let afterSearch = data.filter((d) => (
                d.name.toLowerCase().includes(e.target.value) ||
                d.age.toString().includes(e.target.value) ||
                d.phone.toString().includes(e.target.value) ||
                d.disease.toLowerCase().includes(e.target.value)
            ))
            setSearchData(afterSearch)
        } else {
            loadData()
            setSearchData()
            setSortData()
            handleSort('',"yes")
        }
    }

    const handleSort = (e='', status='') => {
        let val = e ==='' ? sort : e.target.value
        // console.log(e.target.value)
        setSort(val)

     let finalSortData = searchData && status ==="" ? searchData  : data

        let afterSort = finalSortData.sort((a,b)=>{
            if(val === "name"){
                return a.name.localeCompare(b.name)
            }else if(val === "age"){
                return a.age > b.age? 1 : -1
            }else if(val === "phone"){
                return a.phone > b.phone? 1 : -1 
            }else if (val === "disease") {
                return a.disease.localeCompare(b.disease)
            }
        })
        setSortData(afterSort)
        SetreRender({})
    }

    let afterSearchData = searchData ? searchData : sortData ? sortData: data

    return (
        <div>
            <section id="doctors" className="doctors">
                <div className="container">
                    <div className="section-title">
                        <h2>Patient</h2>
                    </div>
                    <div className="row">

                        <Addpatient editProps={editData} rerenderprops={() => handleReRender()} />
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                            <Input type="search" name="name" className="form-control" id="name" placeholder="Serch here" onChange={(e) => handleSearch(e)} />
                        </div>
                        
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                            <Input type="select" name="select" id="exampleSelect" placeholder="sort here" onChange={(e) => handleSort(e)}>
                            <option value="">---Sort---</option>
                            <option value="name">name</option>
                            <option value="age">age</option>
                            <option value="phone">phone</option>
                            <option value="disease">disease</option>
                            
                        </Input>
                        </div>
                        
                    </div>
                    <div className="row">

                        { 
                            
                            afterSearchData.map((p) => <List onDelete={() => handleDelete(p.id)} onEdit={() => handleEdit(p.id)} name={p.name} age={p.age} phone={p.phone} disease={p.disease} />)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Patient;