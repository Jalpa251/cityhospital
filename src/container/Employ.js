import React, { Component } from 'react';
import Result from './Result';

class Employ extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data : 25,
            name :"amit",
            age : 35
        }

    }
    changeage = () =>{
        console.log("ok")
        this.setState({
            data : 27
        })
    }
    render() {
        return (
            <div>
                <h1>Employ age{this.state.data}</h1>
                <button onClick = {()=> this.changeage()}>change</button>
                <Result name = {this.state.name} age = {this.state.age}/>
            </div>
        );
    }
}

export default Employ;