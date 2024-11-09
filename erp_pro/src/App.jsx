import 'bootstrap/dist/css/bootstrap.min.css'
import Landing from './Landing/Web/Components/Landing';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingSignup from './Landing/Web/Components/LandingSignup/LandingSignup';
import LandingLogin from './Landing/Web/Components/LandingLogin/LandingLogin';
import '../src/assets/Landing/css/Common.css'

import Superadmin from './Superadmin/web/Components/Superadmin';
import LoginDashboard from './Landing/Web/Components/LoginDashboard/LoginDashboard';
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>

    {/* Landing signup */}
    <Route path='/' element={<Landing />}></Route>
    <Route path='/signup' element={<LandingSignup />}></Route>
    {/* Landing login */}
    <Route path='/login' element={<LandingLogin />}></Route>
     
    {/* LoginDashboard */}
    <Route path='/logindashboard' element={<LoginDashboard />}></Route>










{/* SuperAdmin - Pages */}
    {/* Superadmin */}

    <Route path='/Superadmin' element={<Superadmin />} />

   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
