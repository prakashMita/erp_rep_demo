import React from 'react';

import '../../../../assets/Landing/css/Landing/LandingBody.css';
import LoginDashHeader from './LoginDashHaeder';
import LoginDashBody from './LoginDashBody';

function LoginDashboard() {
  return (
   <div className="">
     <div className="row p-0 m-0">
       <div className="col-12 p-0">
        <LoginDashHeader />
       </div>
     </div>

     <div className="row p-0 m-0">
       <div className="col-12 p-0 ">
         <LoginDashBody />
       </div>
     </div>
   </div>
  );
}

export default LoginDashboard;
