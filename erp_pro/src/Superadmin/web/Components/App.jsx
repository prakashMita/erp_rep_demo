import 'bootstrap/dist/css/bootstrap.min.css'
import Landing from './Landing/Web/Components/Landing';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingSignup from './Landing/Web/Components/LandingSignup/LandingSignup';
import LandingLogin from './Landing/Web/Components/LandingLogin/LandingLogin';
import '../src/assets/Landing/css/Common.css'

import Superadmin from './Superadmin/web/Components/Superadmin';
import Addform from './Superadmin/web/Components/Addform';
import Viewform from './Superadmin/web/Components/Viewform';
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


{/* SuperAdmin - Pages */}
    {/* Superadmin */}
    <Route path='/Superadmin' element={<Superadmin />} />
    <Route path='/Superadmin/web/addform' element={<Addform />} />
    <Route path='/Superadmin/web/viewlist' element={<Viewform />} />

   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
