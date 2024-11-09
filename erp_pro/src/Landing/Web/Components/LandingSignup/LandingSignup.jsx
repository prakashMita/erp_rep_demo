import SignupForm from "./SignupForm";
import SignupHeader from "./SignupHeader";


function LandingSignup() {
  return (
   <>
   <div className=" bg-white">
    <div className="row p-0 m-0">
        <div className="col-12 p-0">
           <SignupHeader />
        </div>
    </div>
    <div className="row p-0 m-0">
        <div className="col-12 p-0">
           <SignupForm />
        </div>
    </div>

   </div>
   </>
  );
}

export default LandingSignup;
