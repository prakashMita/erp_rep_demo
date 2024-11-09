import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';


function Container() {
    return (
        <div>

            <div className="row g-0">
                <div className="col-1">
                    <div id="sidebar-menu">
                        <a href="#">
                            <i class="bi bi-globe"></i>
                            <label for="mob-recharge">Website</label>
                        </a>

                        <a href="#" className="mainmenuactive">
                            <i class="bi bi-person"></i>
                            <label for="mob-recharge">Emp</label>
                        </a>

                        <a href="#">
                            <i class="bi bi-briefcase"></i>
                            <label for="mob-recharge">Management</label>
                        </a>

                        <a href="#">
                            <i class="bi bi-box-arrow-right"></i>
                            <label for="mob-recharge">Logout</label>
                        </a>

                    </div>
                </div>

                <div className="col-11">
                    <div className="main-container">
                        {/* <div className="col-1"></div> */}
                        {/* <div className="col-1"> */}
                        <div className="navcontainer">
                            <nav className="nav">
                                <div className="nav-upper-options">
                                    <div className="nav-option option1">
                                        <img src=
                                            "https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
                                            className="nav-img"
                                            alt="dashboard" />
                                        <span className="menu-text"> Dashboard</span>
                                    </div>

                                    <div className="option2 nav-option">
                                        <img src=
                                            "https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
                                            className="nav-img"
                                            alt="articles" />
                                        <span className="menu-text">Articles</span>
                                    </div>

                                    <div className="nav-option option3">
                                        <img src=
                                            "https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
                                            className="nav-img"
                                            alt="report" />
                                        <span className="menu-text">Report</span>
                                    </div>

                                    <div className="nav-option option4">
                                        <img src=
                                            "https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/6.png"
                                            className="nav-img"
                                            alt="institution" />
                                        <span className="menu-text"> Institution</span>
                                    </div>

                                    <div className="nav-option option5">
                                        <img src=
                                            "https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
                                            className="nav-img"
                                            alt="blog" />
                                        <span className="menu-text"> Profile</span>
                                    </div>

                                    <div className="nav-option option6">
                                        <img src=
                                            "https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/4.png"
                                            className="nav-img"
                                            alt="settings" />
                                        <span className="menu-text"> Settings</span>
                                    </div>

                                    <div className="nav-option logout">
                                        <img src=
                                            "https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
                                            className="nav-img"
                                            alt="logout" />
                                        <span className="menu-text">Logout</span>
                                    </div>

                                </div>
                            </nav>
                        </div>
                        {/* </div> */}
                        {/* <div className="col-10"> */}
                        <div className="main">


                            {/* <div className="box-container">

                                <div className="box box1">
                                <div class="card-header">PAGE VIEWS</div>
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

                            <div class="col-xl-12">

                                <div class="row g-2">

                                    <div class="col-xl-2 col-lg-4 col-6">

                                        <div class="card h-100">

                                            <div class="card-header">PAGE VIEWS</div>


                                            <div class="card-body">
                                                <div class="h4 fw-100 text-theme mb-1">12,543</div>
                                                <p class="text-white fs-10px mb-0">
                                                    +8.5% vs last month
                                                </p>
                                                <p class="fs-9px mb-0 text-white text-opacity-50">
                                                    updated 1 min ago
                                                </p>
                                            </div>

                                        </div>

                                    </div>


                                    <div class="col-xl-2 col-lg-4 col-6">

                                        <div class="card h-100">

                                            <div class="card-header">AVG SESS. DURATION</div>


                                            <div class="card-body">
                                                <div class="h4 fw-100 text-theme mb-1">02:34</div>
                                                <p class="text-white fs-10px mb-0">
                                                    +12.3% vs last quarter
                                                </p>
                                                <p class="fs-9px mb-0 text-white text-opacity-50">
                                                    updated 1 min ago
                                                </p>
                                            </div>

                                        </div>

                                    </div>


                                    <div class="col-xl-2 col-lg-4 col-6">

                                        <div class="card h-100">

                                            <div class="card-header">NEW VISITORS</div>


                                            <div class="card-body">
                                                <div class="h4 fw-100 text-theme mb-1">45.2%</div>
                                                <p class="text-white fs-10px mb-0">
                                                    -3.2% vs last week
                                                </p>
                                                <p class="fs-9px mb-0 text-white text-opacity-50">
                                                    updated 1 min ago
                                                </p>
                                            </div>

                                        </div>

                                    </div>


                                    <div class="col-xl-2 col-lg-4 col-6">

                                        <div class="card h-100">

                                            <div class="card-header">BOUNCE RATE</div>


                                            <div class="card-body">
                                                <div class="h4 fw-100 text-theme mb-1">32.6%</div>
                                                <p class="text-white fs-10px mb-0">
                                                    -0.5% vs last month
                                                </p>
                                                <p class="fs-9px mb-0 text-white text-opacity-50">
                                                    updated 1 min ago
                                                </p>
                                            </div>

                                        </div>

                                    </div>


                                    <div class="col-xl-2 col-lg-4 col-6">

                                        <div class="card h-100">

                                            <div class="card-header">TOP REFERRING SITES</div>


                                            <div class="card-body">
                                                <div class="h4 fw-100 text-theme mb-1">Google</div>
                                                <p class="text-white fs-10px mb-0">
                                                    2 new referrals added
                                                </p>
                                                <p class="fs-9px mb-0 text-white text-opacity-50">
                                                    updated 1 min ago
                                                </p>
                                            </div>

                                        </div>

                                    </div>


                                    <div class="col-xl-2 col-lg-4 col-6">

                                        <div class="card h-100">

                                            <div class="card-header">COUNTRIES REACH</div>


                                            <div class="card-body">
                                                <div class="h4 fw-100 text-theme mb-1">87</div>
                                                <p class="text-white fs-10px mb-0">
                                                    +5 countries vs last year
                                                </p>
                                                <p class="fs-9px mb-0 text-white text-opacity-50">
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
