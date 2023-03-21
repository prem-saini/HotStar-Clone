import React from "react"
import "./Card.css"
import img5 from "../Images/img5.png"

function Card() {
    return (
        <>
            <div className="container">

                <div class="row mt-3 opppp">
                    <div class="d-flex justify-content-between ll ">
                        <div class="lo op mx-2 ">
                            <h5 class="card-title" style={{ color: "#FCC954" }}>Next day Market Forecast</h5>
                            <p class="card-text text-white car mb-0">Forecating Date: 30/Jan/2023 02:42</p>
                            <p className="card-text text-white car mb-0">Generated On: 29/Jan/2023 </p>
                            <p className="card-text text-white car mb-0">Index Name: Nifty50</p>

                            <a href="/" class="btn btnm mt-2">Bullish</a>
                            <p className="model text-white"> Model Version: MLV01.11</p>
                            <p className="text-white">Get access to all machine learning based forecasting for major indices.<br /><i className="text_color"> Get Free Access Now</i></p>
                        </div>






                        <div class="lo op mx-2">
                            <h5 class="card-title" style={{ color: "#FCC954" }}>Past 7-Days Forecasting</h5>
                            <img src={img5} alt="..." className="img_size" />
                            <p className="text-white">The chat can be studied as bullish(+1), bearish(-1) and Neutral(0) sentiment.</p>
                        </div>




                    </div>
                </div>

            </div>

        </>
    )
}

export default Card