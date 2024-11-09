

import SignupHeader from "../LandingSignup/SignupHeader";
import LoginForm from "./LoginForm";
// import LoginHeader from "./InLandingLogin/LoginHeader";


function LandingLogin() {
  return (
   <>
 <div className="m-0 p-0  bg-white">
     <div className="row p-0 m-0">
       <div className="col-12 p-0">
         <SignupHeader />
       </div>
     </div>

     <div className="row p-0 m-0 ">
       <div className="col-12 p-0 ">
         <LoginForm />
       </div>
     </div>
   </div>
   </>
  );
}

export default LandingLogin;
