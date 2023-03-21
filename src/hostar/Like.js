import React, { useState } from "react"
import "./Like.css"
import Show from "../Show"
import search from "../Images/search.png"
import { Link } from "react-router-dom"

function Like() {


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
                <div className="">

                    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-03-02/GulmoharDatedCouple_desk-940de96c-89d7-4c3d-8319-25d58c606e86.jpg" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-02-25/TNMVSRH_NS_DESK-51af4f69-a8e2-4a0b-a9bb-1b2ef3e24603.jpg" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-03-01/gwgDtk_desk-04d75423-0af6-476c-9453-5730c1d81993.jpg" class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
                <div className="">
                    <h4 className="fw-bold text-start text-white mt-4 mx-2">Top Picks For You</h4>
                    <div className=" d-flex  align-items-start ">

                        {Show.map((item) => {
                            return (
                                <>
                                    <div className="mx-2 hotstar-item">
                                        <img src={item.imgdata} alt="..." className="" style={{ width: '200px', height: '200px', borderRadius: '10px' }} />
                                        <div className="text-white text-start uo p-2 d-flex flex-column" style={{ marginTop: '-70px' }}>
                                            <span className="text-white fw-semibold hotstar-type">{item.type}</span>
                                            <span className="text-white fw-semibold hotstar-type1">{item.d}</span>
                                            <span className="text-white fw-semibold hotstar-type2">{item.dec}</span>
                                            <span className="fw-semibold hotstar-type3"><Link to="/next" className="text-decoration-none text-warning">{item.s}</Link></span>
                                        </div>
                                    </div>

                                </>
                            )
                        })}
                    </div>
                </div>



                <div className="">
                    <h4 className="fw-bold text-start text-white mt-4 mx-2">Popular Shows</h4>
                    <div className=" d-flex  align-items-start">

                        {Show.map((item) => {
                            return (
                                <>
                                    <div className="mx-2 hotstar-item">
                                        <img src={item.imgdata} alt="..." className="" style={{ width: '200px', height: '200px', borderRadius: '10px' }} />
                                        <div className="text-white text-start uo p-2 d-flex flex-column" style={{ marginTop: '-70px' }}>
                                            <span className="text-white fw-semibold hotstar-type">{item.type}</span>
                                            <span className="text-white fw-semibold hotstar-type1">{item.d}</span>
                                            <span className="text-white fw-semibold hotstar-type2">{item.dec}</span>
                                            <span className="fw-semibold hotstar-type3">{item.s}</span>
                                        </div>
                                    </div>


                                </>
                            )
                        })}
                    </div>
                </div>
                <div className="">
                    <h4 className="fw-bold text-start text-white mt-4 mx-2">Popular Channels</h4>
                    <div className=" d-flex  align-items-start">

                        {Show.map((item) => {
                            return (
                                <>
                                    <div className="mx-2 hotstar-item">
                                        <img src={item.imgdata} alt="..." className="" style={{ width: '200px', height: '200px', borderRadius: '10px' }} />
                                        <div className="text-white text-start uo p-2 d-flex flex-column" style={{ marginTop: '-70px' }}>
                                            <span className="text-white fw-semibold hotstar-type">{item.type}</span>
                                            <span className="text-white fw-semibold hotstar-type1">{item.d}</span>
                                            <span className="text-white fw-semibold hotstar-type2">{item.dec}</span>
                                            <span className="fw-semibold hotstar-type3">{item.s}</span>
                                        </div>

                                    </div>

                                </>
                            )
                        })}
                    </div>
                </div>
                <div className="">
                    <h4 className="fw-bold text-start text-white mt-4 mx-2">New on Disney+ Hotstar</h4>
                    <div className=" d-flex  align-items-start">

                        {Show.map((item) => {
                            return (
                                <>
                                    <div className="mx-2 hotstar-item">
                                        <img src={item.imgdata} alt="..." className="" style={{ width: '200px', height: '200px', borderRadius: '10px' }} />
                                        <div className="text-white text-start uo p-2 d-flex flex-column" style={{ marginTop: '-70px' }}>
                                            <span className="text-white fw-semibold hotstar-type">{item.type}</span>
                                            <span className="text-white fw-semibold hotstar-type1">{item.d}</span>
                                            <span className="text-white fw-semibold hotstar-type2">{item.dec}</span>
                                            <span className="fw-semibold hotstar-type3">{item.s}</span>
                                        </div>
                                    </div>

                                </>
                            )
                        })}
                    </div>
                </div>
                <div className="">
                    <h4 className="fw-bold text-start text-white mt-4 mx-2">Best of Kids</h4>
                    <div className=" d-flex  align-items-start">

                        {Show.map((item) => {
                            return (
                                <>
                                    <div className="mx-2 hotstar-item">
                                        <img src={item.imgdata} alt="..." className="" style={{ width: '200px', height: '200px', borderRadius: '10px' }} />
                                        <div className="text-white text-start uo p-2 d-flex flex-column" style={{ marginTop: '-70px' }}>
                                            <span className="text-white fw-semibold hotstar-type">{item.type}</span>
                                            <span className="text-white fw-semibold hotstar-type1">{item.d}</span>
                                            <span className="text-white fw-semibold hotstar-type2">{item.dec}</span>
                                            <span className="fw-semibold hotstar-type3">{item.s}</span>
                                        </div>
                                    </div>

                                </>
                            )
                        })}
                    </div>
                </div>
                <div className="">
                    <h4 className="fw-bold text-start text-white mt-4 mx-2">Best of Star Utsav</h4>
                    <div className=" d-flex  align-items-start">

                        {Show.map((item) => {
                            return (
                                <>
                                    <div className="mx-2 hotstar-item">
                                        <img src={item.imgdata} alt="..." className="" style={{ width: '200px', height: '200px', borderRadius: '10px' }} />
                                        <div className="text-white text-start uo p-2 d-flex flex-column" style={{ marginTop: '-70px' }}>
                                            <span className="text-white fw-semibold hotstar-type">{item.type}</span>
                                            <span className="text-white fw-semibold hotstar-type1">{item.d}</span>
                                            <span className="text-white fw-semibold hotstar-type2">{item.dec}</span>
                                            <span className="fw-semibold hotstar-type3">{item.s}</span>
                                        </div>
                                    </div>

                                </>
                            )
                        })}
                    </div>
                </div>
                <div className="">
                    <h4 className="fw-bold text-start text-white mt-4 mx-2">See Equal and #ShareTheLoad</h4>
                    <div className=" d-flex  align-items-start">

                        {Show.map((item) => {
                            return (
                                <>
                                    <div className="mx-2 hotstar-item">
                                        <img src={item.imgdata} alt="..." className="" style={{ width: '200px', height: '200px', borderRadius: '10px' }} />
                                        <div className="text-white text-start uo p-2 d-flex flex-column" style={{ marginTop: '-70px' }}>
                                            <span className="text-white fw-semibold hotstar-type">{item.type}</span>
                                            <span className="text-white fw-semibold hotstar-type1">{item.d}</span>
                                            <span className="text-white fw-semibold hotstar-type2">{item.dec}</span>
                                            <span className="fw-semibold hotstar-type3">{item.s}</span>
                                        </div>
                                    </div>

                                </>
                            )
                        })}
                    </div>
                </div>
                <div className="">
                    <h4 className="fw-bold text-start text-white mt-4 mx-2">Popular in Reality</h4>
                    <div className=" d-flex  align-items-start">

                        {Show.map((item) => {
                            return (
                                <>
                                    <div className="mx-2 hotstar-item">
                                        <img src={item.imgdata} alt="..." className="" style={{ width: '200px', height: '200px', borderRadius: '10px' }} />
                                        <div className="text-white text-start uo p-2 d-flex flex-column" style={{ marginTop: '-70px' }}>
                                            <span className="text-white fw-semibold hotstar-type">{item.type}</span>
                                            <span className="text-white fw-semibold hotstar-type1">{item.d}</span>
                                            <span className="text-white fw-semibold hotstar-type2">{item.dec}</span>
                                            <span className="fw-semibold hotstar-type3">{item.s}</span>
                                        </div>
                                    </div>

                                </>
                            )
                        })}
                    </div>
                </div>
                <div className="">
                    <h4 className="fw-bold text-start text-white mt-4 mx-2">Popular in Drama</h4>
                    <div className=" d-flex  align-items-start">

                        {Show.map((item) => {
                            return (
                                <>
                                    <div className="mx-2 hotstar-item">
                                        <img src={item.imgdata} alt="..." className="" style={{ width: '200px', height: '200px', borderRadius: '10px' }} />
                                        <div className="text-white text-start uo p-2 d-flex flex-column" style={{ marginTop: '-70px' }}>
                                            <span className="text-white fw-semibold hotstar-type">{item.type}</span>
                                            <span className="text-white fw-semibold hotstar-type1">{item.d}</span>
                                            <span className="text-white fw-semibold hotstar-type2">{item.dec}</span>
                                            <span className="fw-semibold hotstar-type3">{item.s}</span>
                                        </div>
                                    </div>

                                </>
                            )
                        })}
                    </div>
                </div>
                <div className="">
                    <h4 className="fw-bold text-start text-white mt-4 mx-2">Popular in Crime</h4>
                    <div className=" d-flex  align-items-start">

                        {Show.map((item) => {
                            return (
                                <>
                                    <div className="mx-2 hotstar-item">
                                        <img src={item.imgdata} alt="..." className="" style={{ width: '200px', height: '200px', borderRadius: '10px' }} />
                                        <div className="text-white text-start uo p-2 d-flex flex-column" style={{ marginTop: '-70px' }}>
                                            <span className="text-white fw-semibold hotstar-type">{item.type}</span>
                                            <span className="text-white fw-semibold hotstar-type1">{item.d}</span>
                                            <span className="text-white fw-semibold hotstar-type2">{item.dec}</span>
                                            <span className="fw-semibold hotstar-type3">{item.s}</span>
                                        </div>
                                    </div>

                                </>
                            )
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Like