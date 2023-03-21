import React, { useState } from "react"
import "./Like.css"
import search from "../Images/search.png"
import Episode from "../Episode"
// import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"

function Next() {
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    return (
        <>
            <div className="vop">
                <div className="container-fluid bg-dark p-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-around align-items-center">
                            <Link to="/like"> <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="..." className="mx-3" /></Link>
                            <span className="text-white mx-5 nav-text" onMouseOver={() => setShow(!show)}>TV</span>
                            <span className="text-white mx-5  nav-text" onMouseOver={() => setShow1(!show1)}>Movies</span>
                            <span className="text-white mx-5  nav-text" onMouseOver={() => setShow2(!show2)}>Sports</span>
                            <span className="text-white mx-5  nav-text">Disney+</span>
                            <span className="mx-5 text-warning fw-bold  nav-text">KIDS</span>
                        </div>


                        <div className="" >
                            {/* <input type="text" placeholder="Search" className="mx-2" /> */}
                            <span className="me-2" style={{ borderBottom: '2px solid gray', marginTop: "15px" }} >
                                <span className="text-white " style={{ marginRight: '150px' }}>Search</span>
                                <img src={search} alt="..." className="bg-white mb-1" style={{ width: '15px', height: '15px', borderRadius: '5px' }} />
                            </span>
                            <span className="bg-primary mx-2 p-2 mt-4 text-white rounded">Subscribe</span>
                            <span className=" mx-2 text-light fw-bolder fs-6">LOGIN</span>

                        </div>
                    </div>
                </div>
                {show &&
                    <div className="d-flex flex-column rember">
                        <span className="text-white p-2 fw-semibold">VDay Special</span>
                        <span className="text-white p-2 fw-semibold">Star Plus</span>
                        <span className="text-white p-2 fw-semibold">Hostar Special</span>
                        <span className="text-white p-2 fw-semibold">Star Vijay</span>
                        <span className="text-white p-2 fw-semibold">Star Bhart</span>
                        <span className="text-white p-2 fw-semibold">Star Maa</span>
                        <span className="text-white p-2 fw-semibold">Star Max</span>
                        <span className="text-white p-2 fw-semibold">More...</span>
                    </div>}

                {show1 && <div className="d-flex flex-column rembers">
                    <span className="text-white p-2 fw-semibold">Hindi</span>
                    <span className="text-white p-2 fw-semibold">English</span>
                    <span className="text-white p-2 fw-semibold">Telugu</span>
                    <span className="text-white p-2 fw-semibold">Thamil</span>
                    <span className="text-white p-2 fw-semibold">Bengali</span>
                    <span className="text-white p-2 fw-semibold">Marathi</span>
                    <span className="text-white p-2 fw-semibold">Korean</span>
                    <span className="text-white p-2 fw-semibold">Odia</span>
                </div>}
                {show2 &&
                    <div className="d-flex flex-column rembers1">
                        <span className="text-white p-2 fw-semibold">Cricket</span>
                        <span className="text-white p-2 fw-semibold">Football</span>
                        <span className="text-white p-2 fw-semibold">Hockey</span>
                        <span className="text-white p-2 fw-semibold">Khelo India</span>
                        <span className="text-white p-2 fw-semibold">Formua E</span>
                        <span className="text-white p-2 fw-semibold">Khabdhi</span>
                        <span className="text-white p-2 fw-semibold">Tenis</span>
                        <span className="text-white p-2 fw-semibold">more...</span>
                    </div>}
                <div className="d-flex">
                    <div className="left bg-dark w-50 mt-1 text-start" style={{ height: 'auto', boxShadow: '2px 2px 2px 2px' }}>
                        <p className="text-white px-2 mt-5 mx-3 fs-4 fw-bold">Yeh Hai Chahatein</p>
                        <span className="text-secondary mx-3 px-2 fs-6 fw-bold">3 Seasons.922 Episodes.Drema.U/A 13+.Hindi.StarPlus</span>
                        <p className="text-secondary mx-3 px-2 fs-5 fw-bold mt-3">TODAY'S EP IS DELAYED. All that remains constant is love!
                            When a renowned rockstar Samrat crosses paths with an introverted Nayantara,
                            an unconventional love story comes to life.</p>

                        <p className="text-white fw-bolder mx-5 fs-3 mt-5">Watch Now</p>
                        <p className="text-info mx-5 fs-6" style={{ marginTop: '-20px' }}>S3 E73 . 2 Mar 2023</p>

                    </div>
                    <div className="right w-50 mt-1">
                        <div className="blur-img">
                            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5571/1435571-h-3a3923b92771" alt="..." className="blur-img" />
                        </div>

                    </div>

                </div>
                <div className="">
                    <p className="fw-bold fs-4 text-start text-white mt-5 p-4">Episodes</p>
                    <div className="text-start p-2 d-flex">
                        {
                            Episode.map((items) => {
                                return (
                                    <>
                                        <div className="mx-3 hotstar-item">
                                            <img src={items.imgdata} alt="..." style={{ width: '200px', height: '200px', borderRadius: '10px' }} />
                                            <div className="uo" style={{ marginTop: '-90px' }} >
                                                <p className="text-white fw-semibold hotstar-type">{items.title}</p>
                                                <p className="text-white fw-semibold hotstar-type1">{items.Dec}</p>
                                                <p className="text-warning fw-semibold hotstar-type3"><a href={items.url} className="text-decoration-none text-warning">{items.bt}</a></p>
                                                <p className="text-black"></p>
                                            </div>

                                        </div>

                                    </>
                                )
                            })
                        }
                    </div>

                    <div className="">
                        <p className="fw-bold fs-4 text-start text-white p-4">Seasons</p>
                        <div className="d-flex justify-content-start mx-3">
                            <img src="https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/7685/1467685-h-0a81944cf463" alt="..." style={{ width: '250px', height: '200px', borderRadius: '10px' }} className="mx-3" />
                            <img src="https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/7737/1467737-h-9377ca2ae424" alt="..." style={{ width: '250px', height: '200px', borderRadius: '10px' }} className="mx-3" />
                            <img src="https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/7738/1467738-h-8e2a62c91350" alt="..." style={{ width: '250px', height: '200px', borderRadius: '10px' }} className="mx-3" />

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Next