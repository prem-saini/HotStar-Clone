import React from "react"
import Info from "../Info"
import "./HowTread.css"
function CardType() {
    return (
        <>
            <div className="container card_title1 mt-4">

                {Info.map((item) => {
                    return (
                        <>
                            <div className="text-start p-2">

                                <div class="card" style={{ width: "24rem" }}>
                                    <img src={item.imgdata} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title12">{item.content}</h5>
                                        <p class="card-text fw-bold">{item.text}</p>
                                        <p className="card-text12">{item.text}</p>
                                    </div>
                                </div>


                            </div>

                        </>
                    )
                })}


            </div>

        </>
    )
}

export default CardType


