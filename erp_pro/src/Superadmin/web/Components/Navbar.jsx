import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

function Navbar() {
    return (
        <div>
            <header>

                <div class="logosec ">
                    <div class="logo">Mita</div>
                    <i class="bi bi-list menuicn"></i>                       
                        
                </div>

                <div class="searchbar">
                <i class="bi bi-search"></i>

                    <input type="text"
                        placeholder="Search"/>
                        {/* <div class="searchbtn">
                        </div> */}
                </div>

                <div class="message">
                    <div class="circle"></div>
                    <img src=
                        "https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/8.png"
                        class="icn"
                        alt=""/>
                        <div class="dp">
                            <img src=
                                "https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"
                                class="dpicn"
                                alt="dp"/>
                        </div>
                </div>

            </header>
        </div>
    )
}

export default Navbar
