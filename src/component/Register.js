import React from "react"
import Header from "./Header"
import { Link } from "react-router-dom"
import "./Register.css"

function Register() {
    return (
        <>
            <Header />
            <div className="container">
                <div className="col-lg-6 p-5 mt-5">
                    <p className="text-black fw-bold fs-3 me-5">Enhance Your Investing Journey</p>
                    <div className="d-flex flex-column text-start mx-5">
                        <p className="register_text">Portfolio Goal Designer</p>
                        <p className="register_text">AI-Based Risk Assessment</p>
                        <p className="register_text">Personalized Recommender</p>
                        <p className="register_text">Live Market Converage + Monthly view</p>
                        <p className="register_text">Trading Strategy Builder for backtesting</p>
                        <p className="register_text">Instant Mobile & Email Notifications</p>
                        <p className="register_text">WhatsApp Connect</p>
                        <p className="register_text">WhatsApp Connect</p>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="bg-white p-5 mt-5">
                        <div className="d-flex flex-column text-start">
                            <p className="Login_text">Create a New Account</p>
                            <p className="Login_Text ">Already have an account?<Link to="/login" className="text-decoration-none"> <a className="login_account">Login</a></Link></p>

                        </div>
                        <div className="d-flex flex-column text-start">
                            <label className="fs-6 p-2">E-Mail</label>
                            <input type="text" className="p-2" placeholder="E-Mail" />
                            <label className="fs-6  p-2">Mobile (Free Pre-Market Notifications)</label>
                            <input type="text" className="p-2" placeholder="Password" />
                            <label className="fs-6  p-2">Create a password</label>
                            <input type="text" className="p-2" placeholder="Password" />
                        </div>
                        <div className="d-flex fs-5  p-2">
                            <input type="checkbox" className="login_remeb mt-2" />
                            <p className="mt-1 register_remeber mx-1">I have read and agreed to the Terms of Service</p>
                        </div>
                        <button className=" btn_Sign w-100">Sign In</button>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Register