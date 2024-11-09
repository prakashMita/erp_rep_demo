import { Link } from 'react-router-dom';
import Logo from '../../../../assets/Landing/img/Landing/logo.png';

function SignupHeader() {
  return (
    <>
       <div className='container-fluid p-0'>
        <div className='row bg-white border m-0 align-items-center py-2'>
          
          {/* Logo Section */}
          <div className='col-6 col-md-2 '>
            <Link to='/'>
              <img src={Logo} alt='logo' className='img-fluid lw_lh' />
            </Link>
          </div>

          {/* Navigation Links Section */}
          <div className='d-none d-md-flex col-md-3'>
            <div className='row w-100'>
              <div className='col text-start'>
                {/* <p className='fs-6 fw-bold'>Products</p> */}
              </div>
              <div className='col text-start'>
                {/* <p className='fs-6 fw-bold'>Customers</p> */}
              </div>
              <div className='col text-start'>
                {/* <p className='fs-6 fw-bold'>Company</p> */}
              </div>
              <div className='col text-start'>
                {/* <p className='fs-6 fw-bold'>...</p> */}
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className='col-0 col-md-3'></div>

          {/* Icons and Buttons Section */}
          <div className='col-6 col-md-4 d-flex justify-content-end align-items-center'>
            <i className='bi bi-search fs-5 mx-2'></i>
            <i className='bi bi-megaphone fs-5 mx-2'></i>
            <i className='bi bi-globe fs-5 mx-2'></i>
            <i className='bi bi-person-circle fs-5 text-secondary mx-2'></i>
            
            <Link to='/login' className='ms-3'>
              <button type="button" className="btn btn-outline-success fw-bold">Log In</button>
            </Link>
            
            <Link to='/signup' className='ms-2'>
              <button type="button" className="btn btn-outline-danger fw-bold">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupHeader;
