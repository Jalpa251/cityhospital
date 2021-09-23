import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 0
        }
    }
    increasechangevalue = () => {
        console.log("ok")
        this.setState({
            data: this.state.data + 1
        })
    }
    decreasevalue = () => {
        console.log("hjk")
        this.setState({
            data: this.state.data - 1
        })
    }


    render() {
        return (
            <div>
                <h1>counter {this.state.data}</h1>
                <button onClick={() => this.increasechangevalue()}>+</button><br />
                <button onClick={() => this.decreasevalue()}>-</button>
            </div>
        );
    }
}

export default Counter;