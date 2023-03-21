import React, { useState, useEffect } from "react"
import "./Header.css"
import { Link } from "react-router-dom"

function Header() {
    const [active, setActive] = useState(false)

    const isActive = () => {
        window.scrollY > 110 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive)
        return () => {
            window.removeEventListener("scroll", isActive)
        }

    }, [])
    return (
        <>
            <div className={active ? "navbar active" : "navbar"}>
                <div className="container">



                    <div className="logo">
                        <span className="text"><Link to="/" className="text-decoration-none"> Fivree</Link></span>
                        <span className="dot">.</span>
                    </div>

                    <div className="link">
                        <span className="text_link"><Link to="/howtread" className="text-decoration-none text-white">How To Tread</Link></span>
                        <span className="text_link"><Link to="/tread" className="text-decoration-none text-white">Explore</Link></span>
                        <span className="text_link">English</span>
                        <span className="text_link"><Link to="/login" className="text-decoration-none text-white">Sign In</Link></span>
                        <span className="text_link">Become a seller</span>

                        <button className="btn">Join</button>

                    </div>
                </div>
                {active && (
                    <>
                        <hr />
                        <div className="menu">
                            <span>Intraday Trading</span>
                            <span className="AI_btn">AI-Portfolio</span>
                            <span>Suggestor</span>
                            <span>Trading Tools</span>
                            <span className="AI_btn">Watch</span>
                            <span>Learn Investing</span>
                            <span>News</span>

                        </div>
                    </>)}




            </div>



        </>
    )

}

export default Header