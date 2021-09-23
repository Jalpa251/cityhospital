import React, { useEffect, useState } from 'react';

function Appointment(props) {
    const [values, setvalues] = useState({})
    const [Error, setError] = useState({})
    let nameErr = true;
    let emailErr = true;
    let mobileErr = true;
    let dateErr = true;
    let departmentErr = true;
    let messageErr = true;


    const handlechanges = (e) => {
        setvalues(values => ({ ...values, [e.target.name]: e.target.value }))
        console.log(e.target.name + e.target.value)
    }
    const validation = () => {
        if (values.name != undefined) {

            if (values.name == " ") {
                setError(Error => ({ ...Error, name: "please enter your name." }))
            } else {
                let exp = /^[a-zA-Z ]{2,30}$/;
                if (exp.test(values.name)) {
                    setError(Error => ({ ...Error, name: "" }))
                    nameErr = false
                } else {
                    setError(Error => ({ ...Error, name: "please enter your valid name." }))
                }
            }
        }
        if (values.email != undefined) {
            if (values.email == "") {
                setError(Error => ({ ...Error, email: "please enter your email." }))
            } else {
                let exp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
                if (exp.test(values.email)) {
                    setError(Error => ({ ...Error, email: "" }))
                    emailErr = false
                } else {
                    setError(Error => ({ ...Error, email: "please enter your valid email." }))
                }
            }

        }
        if (values.mobile != undefined) {
            if (values.mobile == '') {
                setError(Error => ({ ...Error, mobile: "please enter your mobile number." }))
            } else {
                let exp = /^[6-9]{1}[0-9]{9}$/;
                if (exp.test(values.mobile)) {
                    setError(Error => ({ ...Error, mobile: "" }))
                    mobileErr = false
                } else {
                    setError(Error => ({ ...Error, mobile: "please enter your valid mobile number." }))
                }
            }
        }
        if (values.date != undefined) {
            if (values.date == '') {
                setError(Error => ({ ...Error, date: "please enter your appointment date." }))
            } else {
                setError(Error => ({ ...Error, date: "" }))
                dateErr = false
            }
        }
        if (values.department != undefined) {
            if (values.department == "0") {
                setError(Error => ({ ...Error, department: "please select your department." }))
            } else {
                setError(Error => ({ ...Error, department: "" }))
                departmentErr = false
            }
        }
        if (values.message != undefined) {
            if (values.department == "") {
                setError(Error => ({ ...Error, message: "please enter your message." }))
            } else {
                setError(Error => ({ ...Error, message: "" }))
                messageErr = false
            }
        }


    }


    const submitData = (e) => {
        e.preventDefault()

        let isValid = validation()
        if (values.name == undefined) {
            setError(Error => ({ ...Error, name: "please enter your name." }))
            isValid = true
        }
        if (values.email == undefined) {
            setError(Error => ({ ...Error, email: "please enter your email." }))
            isValid = true
        }
        if (values.mobile == undefined) {
            setError(Error => ({ ...Error, mobile: "please enter your mobile number." }))
            isValid = true

        }
        if (values.date == undefined) {
            setError(Error => ({ ...Error, date: "please enter your appointment date." }))
            isValid = true
        }
        if (values.department == undefined) {
            setError(Error => ({ ...Error, department: "please enter select your department." }))
            isValid = true
        }
        if (values.message == undefined) {
            setError(Error => ({ ...Error, message: "please enter your message." }))
            isValid = true
        }

        if (isValid) {
            return true
        }

        if ((nameErr || emailErr || mobileErr || dateErr || departmentErr || messageErr) == true) {
            return false
        } else {
           return true
        }


    }
    useEffect(
        () => {
            validation()
        }
        , [values])



    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Make an Appointment</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>
                    <form action method="post" role="form" className="php-email-form" onSubmit={(e) => submitData(e)}>
                        <div className="row">
                            <div className="col-md-4 form-group">
                                <input type="text"
                                    name="name"
                                    className="form-control"
                                    id="name" placeholder="Your Name"
                                    onChange={(e) => handlechanges(e)} />
                                <p className="errmsg">{Error.name != undefined ? Error.name : ''}</p>
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input type="text"
                                    className="form-control"
                                    name="email"
                                    id="email" placeholder="Your Email"
                                    onChange={(e) => handlechanges(e)} />
                                <p className="errmsg">{Error.email != undefined ? Error.email : ''}</p>
                                {/* <div className="validate" /> */}
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input type="tel"
                                    className="form-control"
                                    name="mobile" id="phone"
                                    placeholder="Your Phone"
                                    onChange={(e) => handlechanges(e)} />
                                <p className="errmsg">{Error.mobile != undefined ? Error.mobile : ''}</p>
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 form-group mt-3">
                                <input type="datetime"
                                    name="date" c
                                    lassName="form-control datepicker"
                                    id="date" placeholder="Appointment Date"
                                    onChange={(e) => handlechanges(e)} />
                                <p className="errmsg">{Error.date != undefined ? Error.date : ''}</p>
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3">
                                <select name="department" id="department" className="form-select" onChange={(e) => handlechanges(e)}>
                                    <option value="0">Select Department</option>
                                    <option value="Department 1">Department 1</option>
                                    <option value="Department 2">Department 2</option>
                                    <option value="Department 3">Department 3</option>
                                </select>
                                <p className="errmsg">{Error.date != undefined ? Error.department : ''}</p>
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control" name="message" rows={5} placeholder="Message (Optional)" defaultValue={""} onChange={(e) => handlechanges(e)} />
                            <p className="errmsg">{Error.message != undefined ? Error.message : ''}</p>
                            <div className="validate" />
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Make an Appointment</button></div>
                    </form>
                </div>
            </section>

        </div>
    );
}

export default Appointment;



