import React from "react"
import "./Ajmer.css"

function Ajmer() {
    return (
        <>
            <div className="container-fluid">
                <div className="bg-dark ">
                    <div className="d-flex justify-content-between"><p className="note_text text-start mt-3 px-2 mx-2 text-white">Note : Updation work in progress!</p>
                        <div className="d-flex mt-3">
                            <select className="mx-5 hlo">
                                <option>----Select Name---</option>
                            </select>

                            <span className="mx-3 bt mb-2">English</span>
                            <span className="mx-3 bt mb-2">Hindi</span>
                            <p className="text-white mx-1">A+</p>
                            <p className="text-white mx-1">A-</p>
                            <p className="text-white mx-1">A</p>


                        </div>

                    </div>



                </div>

                <div className="bg-white d-flex justify-content-between algin-items-center">
                    <div className="">
                        <img src="http://energy.rajasthan.gov.in/assets/images/logo.png" alt="..." className="img_logo" />
                    </div>

                    <div><p className="mt-4 fs-3 fw-bold">Energy Sectoral Portal</p></div>

                    <p className="fs-4 mt-4 me-5">Menu</p>

                </div>

                <div className="d-flex">
                    <div className="mt-3 col-lg-6">
                        <img src="https://jankalyanfile.rajasthan.gov.in//Content/UploadFolder/Advertisement/Achievements/2022/Jun/13449_ACH_af5ebac0-2c6f-4e59-9eb9-11d5c0345eec.jpeg" alt="..." className="raj_img" />
                    </div>

                    <div className=" col-lg-3 d-flex flex-column">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <img src="https://jankalyanfile.rajasthan.gov.in//Content/UploadFolder/CMProfile/2022/Sep/1_CM_bfe411e1-e9ce-4074-b390-f1acfcdc907f.jpeg" alt="..." className="ashok_img" />
                            <span className="fw-semibold fs-4 text-success">Shri Ashok Gehlot</span>
                            <p>Hon'ble Chief Minister</p>
                        </div>
                        <hr />
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <img src="https://jankalyanfile.rajasthan.gov.in//Content/UploadFolder/MLAConstituency/_MLA_Kolayat_Photo_251802e2-f63b-49ac-8792-357a12f13a88.jpeg" alt="..." className="ashok_img" />
                            <span className="">Shri Bhanwar Singh Bhati</span>
                            <p className="bg-light">State Minister</p>
                        </div>

                    </div>
                    <div className="col-lg-3 mt-3">
                        <div className=" d-flex flex-column p-2">
                            <img src="https://rajadvt.rajasthan.gov.in/rajadvtapi//Content/UploadFolder/Advertisement/Achievements/2023/Feb/9134_ACH_2254e723-8d9c-4955-a0ed-ebac75bafc8c.jpeg" alt="..." className="menu_img mt-2" />
                            <img src="https://rajadvt.rajasthan.gov.in/rajadvtapi//Content/UploadFolder/Advertisement/Achievements/2023/Feb/9132_ACH_1e15ee06-4062-44c9-928a-77586246b657.jpeg" alt="..." className="menu_img mt-2" />
                            <img src="https://rajadvt.rajasthan.gov.in/rajadvtapi//Content/UploadFolder/Advertisement/Achievements/2023/Feb/9135_ACH_f35db144-a948-41f6-9906-ab1b151d169e.jpeg" alt="..." className="menu_img mt-2" />
                        </div>
                    </div>
                </div>
                <div className="back_red">
                    <div className="d-flex mx-3">
                        <p className="text-white mx-2"> Technical Helper-III Counselling Programme</p>
                        <p className="text-white mx-2"> Technical Helper-III Counselling Programme</p>
                        <p className="text-white mx-2"> Technical Helper-III Counselling Programme</p>
                        <p className="text-white mx-2"> Technical Helper-III Counselling Programme</p>

                    </div>
                </div>
                <div className="">
                    <div className="">
                        <img src="" alt="..." />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Ajmer