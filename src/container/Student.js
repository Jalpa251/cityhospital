import React, { Component } from 'react'

export default class Student extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: "Hello"
        }
    }

    changeContent = () => {
        console.log("kvhvk")
        this.setState({
            data: "Amit"
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.data}Student Component</h1>
                <button onClick={() => this.changeContent()}>Change</button>
            </div>
        )
    }
}
