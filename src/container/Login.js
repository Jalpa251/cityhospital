import React, { useState } from 'react';

function Login(props) {
    const [type, setType] = useState('login')
    const [reset, setreset] = useState('')
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const handlesignup = () => {
        console.log("handlesignup " + name)
        console.log("handlesignup " + email)
        console.log("handlesignup " + password)
    }
    return (
        <div>
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">

                        {
                            reset == true ?
                                <h2>Reset Password</h2>
                                :
                                type === 'login' ?
                                    <h2>Login</h2>
                                    :
                                    <h2>Signup</h2>
                        }

                        <div action method="post" role="form" className="php-email-form align-item-center">
                            <div className="row ">
                                {
                                    type === 'login' ?
                                        null
                                        :
                                        <div className="col-md-7 form-group  ">
                                            <input type="text" name="name" className="form-control  " id="name" placeholder="Your Name" onChange={(e) => setname(e.target.value)} required />
                                        </div>
                                }
                                {
                                    reset == true ?
                                        <div className="col-md-7 form-group mt-3 mt-md-0">
                                            <input type="password" className="form-control" name="password" id="password" placeholder="Your password" required onChange={(e) => setpassword(e.target.value)} />
                                        </div>
                                        :
                                        <div>
                                            <div className="col-md-7 form-group">
                                                <input type="text" name="email" className="form-control" id="email" placeholder="Your email" required onChange={(e) => setemail(e.target.value)} />
                                            </div>
                                            <div className="col-md-7 form-group mt-3 mt-md-0">
                                                <input type="password" className="form-control" name="password" id="password" placeholder="Your password" required onChange={(e) => setpassword(e.target.value)} />
                                            </div>
                                        </div>
                                }
                                {
                                    type === 'login' && reset == false ?
                                        < div >
                                            <button to=" " onClick={() => setreset(true)} className="btn btn-link">Forgot password </button>
                                        </div>
                                        :
                                        null
                                }
                                {
                                    reset == true ?
                                        <div className="text-center"><button type="submit">Submit</button>
                                            <div className="text-center"></div>
                                            <p>Already have an account<button to="" onClick={() => { setType('login'); setreset(false) }} className="btn btn-link"> Login </button></p></div>
                                        :
                                        type === 'login' ?
                                            <div>
                                                <div className="text-center"><button type="submit">Login</button></div>
                                                <p>create a new account<button onClick={() => setType('')} className="btn btn-link">Signup </button></p>
                                            </div>
                                            :
                                            <div>
                                                <div>
                                                    <div className="text-center"><button type="submit" onClick={() => handlesignup()}>Signup</button></div>
                                                    <p>Already have an account<button to="" onClick={() => setType('login')} className="btn btn-link"> Login </button></p>
                                                </div>
                                            </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;