import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

function Navbar() {
    return (
        <div>
            <header>

                <div className="logosec">
                    <div className="logo">Mita</div>
                    <i className="bi bi-list menuicn"></i>                       
                        
                </div>

                <div className="searchbar">
                <i className="bi bi-search"></i>

                    <input type="text"
                        placeholder="Search"/>
                        {/* <div className="searchbtn">
                        </div> */}
                </div>

                <div className="message">
                    <div className="circle"></div>
                    <img src=
                        "https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/8.png"
                        className="icn"
                        alt=""/>
                        <div className="dp">
                            <img src=
                                "https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"
                                className="dpicn"
                                alt="dp"/>
                        </div>
                </div>

            </header>
        </div>
    )
}

export default Navbar
