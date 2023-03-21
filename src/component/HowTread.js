import React from "react";
import CardType from "./CardType";
import Header from "./Header";
import "./HowTread.css"


function HowTread() {
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="">
                    <img src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/fantasy-vector-background_zkJwsdS__SB_PM.jpg" alt="..." className="Tread_img" />
                    <div><h1 className="fw-bold howTread_text">How to Trade</h1></div>

                    <div className="">
                        <CardType />
                    </div>
                </div>


            </div>


        </>
    )
}

export default HowTread