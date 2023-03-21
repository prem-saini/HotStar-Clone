import React from "react"
import Header from "./Header"
import "./Tread.css"

function TreadDaily() {
    return (
        <>
            <Header />
            <div className="container d-flex flex-column ">
                <div className="">
                    <p className="text-start fw-bold fs-4 w-50 p-3">How to trade Nifty and Bank Nifty on Wednesday 3rd Feb 2023(Friday sleep)</p>
                    <div className="d-flex ">
                        <span className="Daily_text">OPTION TRADING ANALYSIS</span>
                        <span className="Daily mx-4">Posted by: Invostock.com</span>
                        <span>February 03, 2023</span>
                    </div>
                    <div className="d-flex mt-3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc2K0RaKj6IA1G0YjKxIQesSLFr5VFwx3Zf4uLXLcrQLMXijVqRFjsDKnSynt1JDjjRk0&usqp=CAU" alt="..." className="tread_img" />

                        <div className=" p-2 bg-white mx-4 w-25">
                            <img src="https://media.istockphoto.com/id/1265501626/photo/young-finance-expert-analyzing-financial-charts-on-smart-phone.jpg?s=1024x1024&w=is&k=20&c=bQeJ8NY4pRVV-U-QKN9l-1eKu7b5muGdR9cL4U6iwZw=" alt="..." className="w-100 bg-white" />
                            <p className="fs-5 fw-semibold"><i className="fs-4 fw-semibold">FREE</i> Courses</p>
                            <p className="mt-4 text-dark">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                            <button className=" mt-3 btn_freeSign">Free-Sign-Up</button>
                        </div>
                    </div>
                </div>
                <div className="mt-5 d-flex">

                    <div className="col-lg-6 text-start">
                        <p className="tread_para">Friday sessions are fresh start of option chain building. The FIIs and DII build positions for next week expiry day.
                            The trade setup for friday are typically neutral as option premiums are at higher end. The market tends to gap-up as per global markets indications.
                            Hence a limited room for more upside exists. Create a bearish trade till gap filling in Nifty at 17625 and wait for any reversal signal to cross daily high. <br /> <br />
                            For Nifty Bank 40700 will be support for intraday bearish trade post a gap-up.
                            In-case, market does not test the lower level then wait for reversal confirmation.
                            However, a short trade setup can be found if the price moves below day's low. <br /> <br /> Happy Trading!</p>
                        <hr className="w-100 mt-5" style={{ border: '2px solid gray' }} />
                    </div>

                    <div className="col-lg-6 mx-5 ">
                        <p className="fw-bold fs-4 w-50 mx-5 text_tread side_cat p-2 text-start">Categories</p>
                        <div className="d-flex flex-column text-start mx-5 w-50 side">
                            <span className="text_tread p-2 bg-white">Cryptocurrency</span>
                            <span className="text_tread  p-2 bg-white">Economy</span>
                            <span className="text_tread  p-2 bg-white">Commodity Markets</span>
                            <span className="text_tread  p-2 bg-white">Company & Finance</span>
                            <span className="text_tread  p-2 bg-white">Investment & Portfolio</span>
                            <span className="text_tread  p-2 bg-white">Stock Market Daily Updates</span>
                            <span className="text_tread  p-2 bg-white">Stock Market News</span>
                            <span className="text_tread  p-2 bg-white">Chart Pattern Analysis</span>
                            <span className="text_tread  p-2 bg-white">Stock Trading</span>
                        </div>
                    </div>

                </div>

                <div className="mt-1">
                    <div className="text-start fs-4 fw-semibold">
                        <p>Popular Articles</p>
                    </div>
                    <div className="d-flex text-start p-2">
                        <div className="bg-light w-25 p-2 fw-semibold">
                            <p>January 24, 2023</p>
                            <p>Q3: Jhunjhunwala Increases Small-Cap Stake to 8.35%; Valuation, Upside?</p>
                        </div>
                        <div className=" bg-light w-25 mx-2 p-2 fw-semibold">
                            <p>January 24, 2023</p>
                            <p>Q3: Jhunjhunwala Increases Small-Cap Stake to 8.35%; Valuation, Upside?</p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="text-start fs-4 fw-semibold ">
                        <p>All Topics</p>
                    </div>
                    <div className="text-start">
                        <span className="all_topic p-2 mx-2">Affiliates</span>
                        <span className="all_topic p-2 mx-2">Builder</span>
                        <span className="all_topic p-2 mx-2">Crosses</span>
                        <span className="all_topic p-2 mx-2">Expiry</span>
                        <span className="all_topic p-2 mx-2">Fresh</span>
                        <span className="all_topic p-2 mx-2">Fresh Start</span>
                        <span className="all_topic p-2 mx-2">Friday</span>
                        <span className="all_topic p-2 mx-2">Gap</span> <br /> <br />
                        <span className="all_topic p-2 mx-2 ">Affiliates</span>
                        <span className="all_topic p-2 mx-2">Builder</span>
                        <span className="all_topic p-2 mx-2">Crosses</span>
                        <span className="all_topic p-2 mx-2">Expiry</span>
                        <span className="all_topic p-2 mx-2">Fresh</span>
                        <span className="all_topic p-2 mx-2">Fresh Start</span>
                        <span className="all_topic p-2 mx-2">Friday</span>
                        <span className="all_topic p-2 mx-2">Gap</span>
                    </div>
                </div>




            </div>

        </>
    )
}

export default TreadDaily 