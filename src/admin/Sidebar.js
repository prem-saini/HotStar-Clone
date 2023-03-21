import React from "react"
import { CircularProgressbar, } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import rows from "../Datatable";

function Sidebar() {

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <>
            <div className="d-flex">

                <div className=" bg-white col-lg-2" style={{ height: '100vh' }}>
                    <h3 className="mt-3 text-start text-info fw-bold">ADMIN PANEL</h3>
                    <ul className="d-flex flex-column ">
                        <p className="text-start text-secondary fw-lighter mt-2">MAIN</p>
                        <li className="d-flex text-decoration-none">
                            <img src="https://img.icons8.com/material-outlined/24/null/dashboard-layout.png" alt="..." />
                            <span className="mx-2 fw-lighter">Dashbord</span>
                        </li>
                        <p className="text-start text-secondary fw-lighter mt-2">LISTS</p>
                        <li className="d-flex text-decoration-none ">

                            <img src="https://img.icons8.com/ios-filled/50/null/group-foreground-selected.png" alt="..." style={{ width: '20px' }} />
                            <span className="mx-2 fw-lighter">Users</span>
                        </li>
                        <li className="d-flex text-decoration-none mt-2">
                            <img src="https://img.icons8.com/ios/50/null/package.png" alt="..." style={{ width: '20px' }} />
                            <span className="mx-2 fw-lighter">Products</span>
                        </li>
                        <li className="d-flex text-decoration-none mt-2">
                            <img src="https://img.icons8.com/ios-glyphs/30/null/mobile-order.png" alt="..." style={{ width: '20px' }} />
                            <span className="mx-2 fw-lighter">Orders</span>
                        </li>
                        <li className="d-flex text-decoration-none mt-2">
                            <img src="https://img.icons8.com/ios-filled/50/null/deliver-food.png" alt="..." style={{ width: '20px' }} />
                            <span className="mx-2 fw-lighter">Delivery</span>
                        </li>
                        <p className="text-start text-secondary fw-lighter mt-2">USEFUL</p>
                        <li className="d-flex text-decoration-none">

                            <img src="https://img.icons8.com/ios/50/null/us-capitol.png" alt="..." style={{ width: '20px' }} />
                            <span className="mx-2 fw-lighter">States</span>
                        </li>
                        <li className="d-flex text-decoration-none mt-2">
                            <img src="https://img.icons8.com/ios-filled/50/null/appointment-reminders--v1.png" alt="..." style={{ width: '20px' }} />
                            <span className="mx-2 fw-lighter">Notifications</span>
                        </li>
                        <p className="text-start text-secondary fw-lighter mt-2">SERVICE</p>
                        <li className="d-flex text-decoration-none">

                            <img src="https://img.icons8.com/ios/50/null/windows-tray.png" alt="..." style={{ width: '20px' }} />
                            <span className="mx-2 fw-lighter">System Health</span>
                        </li>
                        <li className="d-flex text-decoration-none mt-2">
                            <img src="https://img.icons8.com/fluency-systems-filled/48/null/campfire.png" alt="..." style={{ width: '20px' }} />
                            <span className="mx-2 fw-lighter">Logs</span>
                        </li>
                        <li className="d-flex text-decoration-none mt-2">
                            <img src="https://img.icons8.com/ios-filled/50/null/automatic.png" alt="..." style={{ width: '20px' }} />
                            <span className="mx-2 fw-lighter">Settings</span>
                        </li>
                        <p className="text-start text-secondary fw-lighter mt-2">USER</p>
                        <li className="d-flex text-decoration-none">

                            <img src="https://img.icons8.com/ios/1x/lifecycle.png" alt="..." style={{ width: '20px' }} />
                            <span className="mx-2 fw-lighter">Profile</span>
                        </li>
                        <li className="d-flex text-decoration-none mt-2">
                            <img src="https://img.icons8.com/ios-filled/50/null/logout-rounded.png" alt="..." style={{ width: '20px' }} />
                            <span className="mx-2 fw-lighter">Logout</span>
                        </li>
                    </ul>
                </div>

                <div className="col-lg-10 bg-light">
                    <div className="d-flex justify-content-between bg-white">
                        <input type="text" placeholder="Search" className="h-50 mt-3 w-25 mx-3" style={{ borderRadius: '5px', padding: '6px', }} />
                        <ul className=" d-flex ">
                            <li className="d-flex text-decoration-none mt-3 mx-3  fs-5 fw-lighter" ><img src="https://img.icons8.com/ios-filled/50/null/globe-earth.png" alt="..." style={{ width: '40px' }} />English</li>
                            <li className="d-flex mt-3 mx-3  fs-4 fw-semibold"><img src="https://img.icons8.com/ios-glyphs/30/null/moon-symbol.png" alt="..." style={{ width: '20px' }} /></li>
                            <li className="d-flex text-decoration-none mt-3 mx-3  fs-4 fw-semibold"><img src="https://img.icons8.com/ios/50/null/filled-chat.png" alt="..." style={{ width: '20px' }} /></li>
                            <li className="d-flex mt-3 mx-3  fs-4 "><img src="https://img.icons8.com/ios-filled/50/null/appointment-reminders--v1.png" alt="..." style={{ width: '20px' }} /></li>
                            <li className="d-flex mt-3 mx-3  fs-4 "><img src="https://img.icons8.com/material-sharp/24/null/small-icons--v1.png" alt="..." style={{ width: '20px' }} /></li>
                            <li className="d-flex mt-3 mx-3 fs-4 "><img src="https://tailwindcss.com/_next/static/media/adam.26d0119c.jpg" alt="..." style={{ borderRadius: '50%', width: '40px' }} /></li>
                        </ul>
                    </div>
                    <div className=" d-flex justify-content-between mt-4 mx-3">
                        <div className="card" style={{ width: '250px', boxShadow: '2px 2px 2px 2px gray' }}>
                            <div className="d-flex justify-content-between ">
                                <div className="d-flex justify-content-between flex-column "  >
                                    <span className="mt-3 mx-2 fs-6 fw-lighter text-secondary">USER</span>
                                    <h2 className="mt-3 mx-2 fs-3 fw-semibold">100</h2>
                                    <sapn className="mt-3 mx-2 mb-2 fw-lighter" style={{ borderBottom: '2px solid gray' }}>See All User</sapn>
                                </div>
                                <div className="mt-3 d-flex flex-column">
                                    <span className="me-2 text-success fw-bold">20%</span>
                                    <span className="mt-5 me-2 fw-lighter fs-3"><img src="https://img.icons8.com/ios-filled/50/null/user-male-circle.png" alt="..." className="bg-danger me-2" style={{ width: '30px', borderRadius: '5px' }} /></span>

                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ width: '250px', boxShadow: '2px 2px 2px 2px gray' }}>
                            <div className="d-flex justify-content-between ">
                                <div className="d-flex justify-content-between flex-column "  >
                                    <span className="mt-3 mx-2 fs-6 fw-lighter text-secondary">ORDER</span>
                                    <h2 className="mt-3 mx-2 fs-3 fw-semibold">100</h2>
                                    <sapn className="mt-3 mx-2 mb-2 fw-lighter" style={{ borderBottom: '2px solid gray' }}>View All Orders</sapn>
                                </div>
                                <div className="mt-3  d-flex flex-column">
                                    <span className="me-2 text-success fw-bold">20%</span>
                                    <span className="mt-5 me-2 fw-lighter fs-3"><img src="https://img.icons8.com/ios/50/null/shopping-cart--v1.png" alt="..." className="bg-warning me-2" style={{ width: '30px', borderRadius: '5px' }} /></span>

                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ width: '250px', boxShadow: '2px 2px 2px 2px gray' }}>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex justify-content-between flex-column "  >
                                    <span className="mt-3 mx-2 fs-6 fw-lighter text-secondary">ERARNINGS</span>
                                    <h2 className="mt-3 mx-2 fs-3 fw-semibold">$100</h2>
                                    <sapn className="mt-3 mx-2 mb-2 fw-lighter" style={{ borderBottom: '2px solid gray' }}>View net earnings</sapn>
                                </div>
                                <div className="mt-3  d-flex flex-column">
                                    <span className="me-2 text-success fw-bold">20%</span>
                                    <span className="mt-5 me-2 fw-lighter fs-3"><img src="https://img.icons8.com/ios-glyphs/60/000000/refund-2.png" alt="..." className=" bg-success me-2" style={{ width: '30px', borderRadius: '5px' }} /></span>

                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ width: '250px', boxShadow: '2px 2px 2px 2px gray' }}>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex justify-content-between flex-column "  >
                                    <span className="mt-3 mx-2 fs-6 fw-lighter text-secondary">BALANCE</span>
                                    <h2 className="mt-3 mx-2 fs-3 fw-semibold">$100</h2>
                                    <sapn className="mt-3 mx-2 mb-2 fw-lighter" style={{ borderBottom: '2px solid gray' }}>See deatils</sapn>
                                </div>
                                <div className="mt-3  d-flex flex-column">
                                    <span className="me-2 text-success fw-bold">20%</span>
                                    <span className="mt-5 me-2 fw-lighter fs-3"><img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-balance-investing-flaticons-lineal-color-flat-icons.png" alt="..." className=" bg-success me-2" style={{ width: '30px', borderRadius: '5px' }} /></span>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 d-flex">
                        <div className="col-lg-5">
                            <div className="d-flex justify-content-between  w-75 mx-3">
                                <div className="bg-white d-flex flex-column justify-content-center align-items-center" style={{ boxShadow: '2px 2px 2px 2px gray', borderRadius: '10px' }}>
                                    <p className=" d-flex justify-content-start fs-5 mt-1" style={{ marginLeft: '-300px' }}>Total Revenue</p>

                                    <div className="" style={{ width: '200px', height: '200px' }}>
                                        <CircularProgressbar
                                            className="mt-2 p-4"
                                            value={70}
                                            text={`${'70'}%`}
                                            strokeWidth={4} />


                                    </div>
                                    <p>Total Sales for Today</p>
                                    <p>$200</p>
                                    <p style={{ fontSize: '16px' }}>Previous transactions processing. <br />Last payments may not be included.</p>
                                    <div className="d-flex w-100">
                                        <div className="d-flex justify-content-between flex-column mx-5">
                                            <p className="text-secondary" style={{ fontSize: '12px' }}>Target</p>
                                            {/* <p className="text-primary">^</p> */}
                                            <p className="text-danger"><i className="text-danger">^</i>$12.3k</p>
                                        </div>
                                        <div className="d-flex justify-content-between flex-column mx-5">
                                            <p className="text-secondary" style={{ fontSize: '12px' }}>Last Week</p>

                                            <p className="text-success"><i className="text-success">^</i>$12.3k</p>
                                        </div>
                                        <div className="d-flex justify-content-between flex-column mx-5">
                                            <p className="text-secondary" style={{ fontSize: '12px' }}>LastMonth</p>
                                            {/* <p className="text-primary">^</p> */}
                                            <p className="text-success"><i className="text-success">^</i>$12.3k</p>
                                        </div>
                                    </div>

                                </div>
                                {/* <span className="col-lg-2">Chart</span> */}
                            </div>
                        </div>
                        <div className="col-lg-7 mt-1">
                            <div className="bg-white me-3 p-1 " style={{ boxShadow: '2px 2px 2px 2px gray', borderRadius: '10px' }}>
                                <div className="title mb-3 text-start text-lighter text-secondary">Last 6 months (Revenue)</div>
                                <AreaChart width={730} height={400} data={data}
                                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                                    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                                </AreaChart>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container-fluid bg-white mt-2" style={{ boxShadow: '2px 2px 2px 2px gray', borderRadius: '10px' }}>
                <div className="text-start">
                    <span className="text-secondary fs-5">Latest Transactions</span>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Tracking Id</th>
                                <th scope="col">Product</th>
                                <th scope="col">ProductImg</th>
                                <th scope="col">Customer</th>
                                <th scope="col">Date</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Payment Method</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        {
                            rows.map((item) => {
                                return (
                                    <>
                                        {
                                            <tbody>
                                                <tr className="p-2">
                                                    <th scope="row">{item.id}</th>

                                                    <td className="p-2">{item.product}</td>
                                                    <td><img src={item.img} alt="..." style={{ width: '30px' }} /></td>
                                                    <td className="p-2">{item.customer}</td>
                                                    <td className="p-2">{item.date}</td>

                                                    <td className="p-2">{item.amount}</td>
                                                    <td className="p-2">{item.method}</td>
                                                    <td className="p-2">{item.status}</td>
                                                </tr>


                                            </tbody>

                                        }
                                    </>
                                )
                            })
                        }

                    </table>

                </div>
            </div>



        </>
    )
}

export default Sidebar