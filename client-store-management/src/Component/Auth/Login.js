import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <>
            <section>
                <div className="colour" />
                <div className="colour" />
                <div className="colour" />
                <div className="box">
                    <div className="square" style={{'- i': 0}} />
                    <div className="square" style={{'- i': 1}} />
                    <div className="square" style={{'- i': 2}} />
                    <div className="square" style={{'- i': 3}} />
                    <div className="square" style={{'- i': 4}} />
                    <div className="container">
                        <div className="form">
                            <h2>Login Form</h2>
                            <form>
                                <div className="input__box">
                                    <input type="text" placeholder="Email" />
                                </div>
                                <div className="input__box">
                                    <input type="password" placeholder="Password" />
                                </div>
                                <div className="input__box">
                                    <input type="submit" defaultValue="Login" />
                                </div>
                                <p className="forget">Forgot Password? <a href="#">Click Here</a></p>
                                <p className="forget">Don't have an account? <a href="#">Sign Up</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Login