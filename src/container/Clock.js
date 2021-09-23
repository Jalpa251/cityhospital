import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        console.log("1 constructor")
        this.state = {
            date: new Date()
        }
    }
    componentDidMount =()=>{
        console.log("3 component Did Mount");
        setInterval(this.tick,1000);
    }
    componentDidUpdate =(prevprops,prestate)=>{
        if(prestate.date != this.state.date){
            console.log("componentDidUpdate");
        }
    }
    // componentWillUnmount=()=>{
    //     console.log("componentWillUnmount");
    // }
    tick = ()=>{
        console.log("4 tick");
        this.setState({
            date :new Date()
        })
    }
    render() {
        console.log("2 render")
        return (
            <div>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        );
    }
}

export default Clock;