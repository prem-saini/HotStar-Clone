import React from "react"
import Sidebar from "../admin/Sidebar"
import Like from "../hostar/Like"
import Card from "./Card"
import Discover from "./Discover"
import Header from "./Header"
import Middle from "./Middle"
// import Next from "./Next"
import Section from "./Section"
import Uop from "./Uop"

function Home() {
    return (
        <>
            <div className="conyainer">

                {/* <Header />
                <Section />
                <Card />

                <Discover />
                <Middle /> */}

            </div>
            <div className="" style={{ height: '465vh' }}>
                <Like />

            </div>
            {/* <div className="" style={{ height: '100vh' }}>
                <Sidebar />
            </div> */}

        </>
    )
}

export default Home