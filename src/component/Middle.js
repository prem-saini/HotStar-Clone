import React from "react"
import "./Middle.css"
import paytam from "../Images/paytam.png"
import upstox from "../Images/upstox.png"
import zerodha from "../Images/zerodha.png"
import block from "../Images/block.png"
// import Card from "./Card"

function Middle() {
    return (
        <>
            <div className="container">
                <div className="section">
                    <div className="section_left">
                        <div className="section_top">
                            <h2>FREE Trading Account</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley.</p>
                        </div>
                        <div className="section_bottom">
                            <div className="card do z-index-3">
                                <div className="card-body mt-3">
                                    <img src={paytam} alt="..." /><br />
                                    <p className="mt-4">*Brokerage: Rs 15 per executed trade (Intraday & F&O)</p>
                                </div>
                            </div>
                            <div className="card do">
                                <div className="card-body mt-3">
                                    <img src={upstox} alt="..." />
                                    <p className="mt-4">*Brokerage: Rs 20 per executed trade (Intraday & F&O)</p>
                                </div>
                            </div>
                            <div className="card do">
                                <div className="card-body mt-3">
                                    <img src={zerodha} alt="..." />
                                    <p className="mt-4">*Brokerage: Upto 0.05% per order (Intraday & F&O)</p>
                                </div>
                            </div>





                        </div>

                        <img src={block} alt="..." className="mt-4 section_img" />
                        <div className="section_text">
                            <span className="section_heading">CRYPTOCURRENCY</span>
                            <h6>What is blockchain and how to design a blockchain envionment?</h6>
                            <p>A blockchain is a decentralized technology system for digital ledger used for recording transactions across a network of computers/nodes.
                                It is used to record and track digital assets, such as cryptoc...</p>
                            <p>January 24, 2023</p>
                        </div>
                        {/* <div className="d-flex flex-wrap">
                            <Card />
                        </div> */}

                        <p className="text-center mt-5 fs-4 fw-bold">Learn More...</p>

                    </div>


                    <div className="section_left mx-5">
                        <div className="">
                            <div className="d-flex mx-5">
                                <p className="mx-3 fs-5 text-success fw-bolder">Indian Indices</p>
                                <p className="mx-3 fs-5 text-black fw-bolder">Global Indices</p>
                            </div>
                            <div className="mx-5">
                                <table class="table">
                                    <thead>
                                        <tr className="Color_info">
                                            <th scope="col">Symbol</th>
                                            <th scope="col">High</th>
                                            <th scope="col">Low</th>
                                            <th scope="col">Open</th>
                                            <th scope="col" >#</th>
                                        </tr>
                                    </thead>
                                    <tbody className="p-4">
                                        <tr className="w-25">
                                            <th scope="row" className="w-25">SGX (Singapore Exchange LTD)</th>
                                            <td>9.35</td>
                                            <td>9.27</td>
                                            <td>9.35</td>
                                            <td>9.35</td>
                                        </tr>

                                        <tr className="w-25">
                                            <th scope="row" className="w-25">NIFTY BANK</th>
                                            <td>9.35</td>
                                            <td>9.27</td>
                                            <td>9.35</td>
                                            <td>9.35</td>
                                        </tr>
                                        <tr className="w-25">
                                            <th scope="row" className="w-25">NIFTY IT</th>
                                            <td>9.35</td>
                                            <td>9.27</td>
                                            <td>9.35</td>
                                            <td>9.35</td>
                                        </tr>
                                        <tr className="w-25">
                                            <th scope="row" className="w-25">NIFTY METAL</th>
                                            <td>9.35</td>
                                            <td>9.27</td>
                                            <td>9.35</td>
                                            <td>9.35</td>
                                        </tr>
                                        <tr className="w-25">
                                            <th scope="row" className="w-25">NIFTY BANK</th>
                                            <td>9.35</td>
                                            <td>9.27</td>
                                            <td>9.35</td>
                                            <td>9.35</td>
                                        </tr>
                                        <tr className="w-25">
                                            <th scope="row" className="w-25">NIFTY BANK</th>
                                            <td>9.35</td>
                                            <td>9.27</td>
                                            <td>9.35</td>
                                            <td>9.35</td>
                                        </tr>
                                        <tr className="w-25">
                                            <th scope="row" className="w-25">NIFTY BANK</th>
                                            <td>9.35</td>
                                            <td>9.27</td>
                                            <td>9.35</td>
                                            <td>9.35</td>
                                        </tr>
                                        <tr className="w-25">
                                            <th scope="row" className="w-25">NIFTY BANK</th>
                                            <td>9.35</td>
                                            <td>9.27</td>
                                            <td>9.35</td>
                                            <td>9.35</td>
                                        </tr>
                                        <tr className="w-25">
                                            <th scope="row" className="w-25">NIFTY BANK</th>
                                            <td>9.35</td>
                                            <td>9.27</td>
                                            <td>9.35</td>
                                            <td>9.35</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Middle