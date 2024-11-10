import React from 'react'

function Leftnavi() {
  return (
    <div>
    
                    <div id="sidebar-menu">
                        <a href="#">
                            <i className="bi bi-globe"></i>
                            <label for="mob-recharge">Website</label>
                        </a>

                        <a href="#" className="mainmenuactive">
                            <i className="bi bi-person"></i>
                            <label for="mob-recharge">Emp</label>
                        </a>

                        <a href="#">
                            <i className="bi bi-briefcase"></i>
                            <label for="mob-recharge">Management</label>
                        </a>

                        <a href="#">
                            <i className="bi bi-box-arrow-right"></i>
                            <label for="mob-recharge">Logout</label>
                        </a>

                    </div>
                
    </div>
  )
}

export default Leftnavi
