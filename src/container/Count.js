// import React from 'react';
import React from 'react';
import { Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import  { useEffect, useState } from 'react';
import{ increament, decrement} from '../redux/actions/Counter.action'

function Count(props) {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.Counter);

    // console.log(count.counter)

    const handleIncrement = () => {
        dispatch(increament())
    }

    const handleDecrement = () => {
        dispatch(decrement())
    }
    return (
        <section id="doctors" className="doctors">
            <div className="container">
                <div className="section-title">
                    <h2>Counter</h2>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <Button onClick={() => handleIncrement()}>+</Button>
                        <p>{counter.counter}</p>
                        <Button onClick={() => handleDecrement()}>-</Button>
                    </div>
                </div>
            </div>
        </section>
    
    );
}

export default Count;