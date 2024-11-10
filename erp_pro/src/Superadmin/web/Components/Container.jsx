import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from './Sidebar';
import Leftnavi from './Leftnavi';


function Container() {
    return (
        <div>

            <div className="row g-0">

                <div className="col-1">
                    <Leftnavi />
                </div>
                <div className="col-11">
                    <div className="main-container">

                        <Sidebar />

                        <div className="main">


                            {/* <div className="box-container">

                                <div className="box box1">
                                <div className="card-header">PAGE VIEWS</div>
                                    <div className="text">
                                        <h2 className="topic-heading">60.5k</h2>
                                        <h2 className="topic">Article Views</h2>
                                    </div>

                                    <img src=
                                        "https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(31).png"
                                        alt="Views" />
                                </div>

                                <div className="box box2">
                                    <div className="text">
                                        <h2 className="topic-heading">150</h2>
                                        <h2 className="topic">Likes</h2>
                                    </div>

                                    <img src=
                                        "https://media.geeksforgeeks.org/wp-content/uploads/20221210185030/14.png"
                                        alt="likes" />
                                </div>

                                <div className="box box3">
                                    <div className="text">
                                        <h2 className="topic-heading">320</h2>
                                        <h2 className="topic">Comments</h2>
                                    </div>

                                    <img src=
                                        "https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(32).png"
                                        alt="comments" />
                                </div>

                                <div className="box box4">
                                    <div className="text">
                                        <h2 className="topic-heading">70</h2>
                                        <h2 className="topic">Published</h2>
                                    </div>

                                    <img src=
                                        "https://media.geeksforgeeks.org/wp-content/uploads/20221210185029/13.png" alt="published" />
                                </div>
                            </div> */}

                            <div className="col-xl-12">

                                <div className="row g-2">

                                    <div className="col-xl-2 col-lg-4 col-6">

                                        <div className="card hsz h-100">

                                            <div className="card-header">PAGE VIEWS</div>


                                            <div className="card-body">
                                                <div className="h4 fw-100 text-theme mb-1">12,543</div>
                                                <p className="text-white fs-10px mb-0">
                                                    +8.5% vs last month
                                                </p>
                                                <p className="fs-9px mb-0 text-white text-opacity-50">
                                                    updated 1 min ago
                                                </p>
                                            </div>

                                        </div>

                                    </div>


                                    <div className="col-xl-2 col-lg-4 col-6">

                                        <div className="card hsz h-100">

                                            <div className="card-header">AVG SESS. DURATION</div>


                                            <div className="card-body">
                                                <div className="h4 fw-100 text-theme mb-1">02:34</div>
                                                <p className="text-white fs-10px mb-0">
                                                    +12.3% vs last quarter
                                                </p>
                                                <p className="fs-9px mb-0 text-white text-opacity-50">
                                                    updated 1 min ago
                                                </p>
                                            </div>

                                        </div>

                                    </div>


                                    <div className="col-xl-2 col-lg-4 col-6">

                                        <div className="card h-100">

                                            <div className="card-header">NEW VISITORS</div>


                                            <div className="card-body">
                                                <div className="h4 fw-100 text-theme mb-1">45.2%</div>
                                                <p className="text-white fs-10px mb-0">
                                                    -3.2% vs last week
                                                </p>
                                                <p className="fs-9px mb-0 text-white text-opacity-50">
                                                    updated 1 min ago
                                                </p>
                                            </div>

                                        </div>

                                    </div>


                                    <div className="col-xl-2 col-lg-4 col-6">

                                        <div className="card h-100">

                                            <div className="card-header">BOUNCE RATE</div>


                                            <div className="card-body">
                                                <div className="h4 fw-100 text-theme mb-1">32.6%</div>
                                                <p className="text-white fs-10px mb-0">
                                                    -0.5% vs last month
                                                </p>
                                                <p className="fs-9px mb-0 text-white text-opacity-50">
                                                    updated 1 min ago
                                                </p>
                                            </div>

                                        </div>

                                    </div>


                                    <div className="col-xl-2 col-lg-4 col-6">

                                        <div className="card h-100">

                                            <div className="card-header">TOP REFERRING SITES</div>


                                            <div className="card-body">
                                                <div className="h4 fw-100 text-theme mb-1">Google</div>
                                                <p className="text-white fs-10px mb-0">
                                                    2 new referrals added
                                                </p>
                                                <p className="fs-9px mb-0 text-white text-opacity-50">
                                                    updated 1 min ago
                                                </p>
                                            </div>

                                        </div>

                                    </div>


                                    <div className="col-xl-2 col-lg-4 col-6">

                                        <div className="card h-100">

                                            <div className="card-header">COUNTRIES REACH</div>


                                            <div className="card-body">
                                                <div className="h4 fw-100 text-theme mb-1">87</div>
                                                <p className="text-white fs-10px mb-0">
                                                    +5 countries vs last year
                                                </p>
                                                <p className="fs-9px mb-0 text-white text-opacity-50">
                                                    updated 1 min ago
                                                </p>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>


                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container
