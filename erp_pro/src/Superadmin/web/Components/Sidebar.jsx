import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div>
            <div className="navcontainer">
                <nav className="nav">
                    <div className="nav-upper-options">
                        <div className="nav-option option1">
                            <Link to ="/Superadmin" style={{ textDecoration: 'none' }}>
                        <i className="bi bi-bar-chart"></i>
                            <span className="menu-text"> DASHBOARD</span>
                            </Link>
                        </div>

                        <div className="option2 nav-option">
                            <i className="bi bi-file-text"></i>

                            <span className="menu-text">FORMS</span>
                            <div className="dropdown-content">
                                <Link to="/Superadmin/web/addform">ADD</Link>
                                <Link to="/Superadmin/web/viewlist">LIST</Link>
                                <a href="#">Form 3</a>
                            </div>
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
        </div>
    )
}

export default Sidebar
