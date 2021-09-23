import React, { Component } from 'react';


class EmployeeTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
             data : [
                {
                    name: "amit",
                    age: 35,
                    salary: 40000,
                    bonus: 1000,
                    status: true
                },
                {
                    name: "ajay",
                    age: 25,
                    salary: 38000,
                    bonus: 2000,
                    status: false
                },
                {
                    name: "mayur",
                    age: 23,
                    salary: 50000,
                    bonus: 500,
                    status: true
                },
                {
                    name: "jay",
                    age: 29,
                    salary: 35000,
                    bonus: 600,
                    status: true
                },
                {
                    name: "raj",
                    age: 33,
                    salary: 22000,
                    bonus: 2000,
                    status: true
                },
            ]

        }
    }

    render() {
        let total = this.state.data.reduce((acc,d)=>acc + d.salary + d.bonus,0)
        
        return (
            <div>
                <table border ="1">
                   
                    <tr>
                        <th>Sr No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Salary</th>
                        <th>Bonus</th>
                        <th>Total Expences</th>
                    </tr>
                    
                        {
                           this.state.data.map((d,index)=>{
                               return(
                                <tr>
                                    <td>{index +1}</td>
                                    <td>{d.name}</td>
                                    <td>{d.age}</td>
                                    <td>{d.salary}</td>
                                    <td>{d.bonus}</td>
                                   { (index == 0)?  <td rowspan="6">{total}</td>: null}
                                </tr>  
                               )
                                
                           })
                        }
                    
                </table>
            </div>
        );
    }
}

export default EmployeeTable;