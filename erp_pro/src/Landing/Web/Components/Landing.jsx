import React from 'react';
import LandingBody from "./LandingBody";
import LandingHeader from "./LandingHeader";
import '../../../assets/Landing/css/Landing/LandingBody.css';

function Landing() {
  return (
   <div className="">
     <div className="row p-0 m-0">
       <div className="col-12 p-0">
         <LandingHeader />
       </div>
     </div>

     <div className="row p-0 m-0">
       <div className="col-12 p-0 ">
         <LandingBody />
       </div>
     </div>
   </div>
  );
}

export default Landing;
