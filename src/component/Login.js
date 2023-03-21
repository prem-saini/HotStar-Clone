import React from "react"
import Header from "./Header"
import "./Login.css"
import { Link } from "react-router-dom"
function Login() {
    return (
        <>
            <Header />
            <div className="container mt-5 responsive">
                <div className="col-lg-5">
                    <div className="bg-white p-5">
                        <div className="d-flex flex-column text-start">
                            <p className="Login_text">Login to Account!</p>
                            <p className="Login_Text ">New to invoStock.com?<Link to="/register" className="text-decoration-none"> <a className="login_account">Create an account</a></Link></p>

                        </div>
                        <div className="d-flex flex-column text-start">
                            <label className="fs-6 p-2">E-Mail</label>
                            <input type="text" className="p-2" placeholder="E-Mail" />
                            <label className="fs-6  p-2">Password</label>
                            <input type="text" className="p-2" placeholder="Password" />
                        </div>
                        <p className="text-end login_forgot">Forgot Password</p>
                        <button className=" btn_Sign w-100">Sign In</button>
                        <div className="d-flex fs-5 login_remeber">
                            <input type="checkbox" className="login_remeb mt-2" />
                            <p className="mt-1 mx-2">Remember me</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 ">
                    <div className="side_img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMNGhVnnntJiKKSYsccLuAPcsKwCx0E-XPKQ&usqp=CAU" alt="..." className="Login_img" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login