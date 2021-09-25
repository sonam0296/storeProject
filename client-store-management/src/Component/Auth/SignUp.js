import React from 'react';
import './Login.css'

const SignUp = () => {
    return (
        <>
            <section>
                <div className="colour" />
                <div className="colour" />
                <div className="colour" />
                <div className="box">
                    <div className="square" style={{ '- i': 0 }} />
                    <div className="square" style={{ '- i': 1 }} />
                    <div className="square" style={{ '- i': 2 }} />
                    <div className="square" style={{ '- i': 3 }} />
                    <div className="square" style={{ '- i': 4 }} />
                    <div className="container">
                        <div className="form">
                            <h2>SignUp Form</h2>
                            <form>
                                
                                <div className="input__box">
                                    <input type="text" placeholder="Name" />
                                </div>
                                <div className="input__box">
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div className="input__box">
                                    <input type="password" placeholder="Password" />
                                </div>
                                <div className="input__box">
                                    <input type="tel" placeholder="Phone" />
                                </div>
                                <div className="input__box">
                                    <input type="text" placeholder="Store Name" />
                                </div>
                                <div className="input__box">
                                    <input type="text" placeholder="Store Address" />
                                </div>
                                <div className="input__box">
                                    <input type="submit" defaultValue="SignUp" />
                                </div>
                                <p className="forget">Already have an account? <a href="#">Login</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default SignUp