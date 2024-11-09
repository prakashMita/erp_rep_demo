
import P2sm from '../../../assets/Landing/img/Landing/p2sm.png'
import Realtor from '../../../assets/Landing/img/Landing/realtor.png'
import Cal from '../../../assets/Landing/img/Landing/cal.png'
import 'bootstrap-icons/font/bootstrap-icons.css';

function LandingBody() {
    return (
        <>
            <div className="m-0">


                <div className="row p-0 intro m-0 bg-primary" >
                    <div className="col-12 p-0 m-0 text-center mt-3 pt-4">
                        <h2 className="mb-2">Empower Your Business with Seamless Solutions</h2>
                        <p className='fs_30'>Simplify, automate, and grow with our SaaS platform, tailored to drive efficiency<br></br>
                            and success across your entire business.</p>
                    </div>



                    {/* <div className="row m-0 mx-auto text-center">
                        <div className="col-12 mx-auto">
                            <img src={Logo2} alt="logo2" className='w-25 mx-auto'></img>
                        </div>
                    </div> */}
                </div>





                <div className="row p-0 m-0 bg-light">
                    {/* space */}
                    {/* <div className='my-5'></div> */}

                    {/* <div className='text-center'>
    <p style={{ fontSize: '50px' }}>
    Or, choose from over 55+ different <br></br> business applications

    </p>
</div> */}


                    {/* form */}
                    <div className='col-12 m-0 p-0'>
                        <div className='row m-0 p-0'>
                            <div className='col-3'>

                            </div>
                            <div className='col-7'>

                                <form className='' >
                                    <div class="form-row align-items-center">

                                        <div class="col-sm-3 my-1">

                                            {/* <div class="input-group " style={{width:'1000px'}}>
        <div class="input-group-prepend">
          <div class="input-group-text py-2 bg-white"><i class="bi bi-search fw-bold fs-3"></i></div>
        </div>
        <input type="text" class="form-control py-2 fs-4" id="inlineFormInputGroupUsername" placeholder="I`m looking for ..."/>
      </div> */}
                                        </div>

                                    </div>
                                </form>

                            </div>
                            <div className='col-2'>

                            </div>
                        </div>
                    </div>





                    {/* space */}
                    <div className='my-3'></div>

                    <div className="col-12 ">
                        <div className='ms-4 '>
                            <p className='mb-0 fs_40 fw-bold text-primary ' >Comprehensive Solutions for Every Business Need</p>
                            <p className='fs_25' >Help your sales team be more productive with tools they’d love.</p>
                        </div>
                    </div>

                    {/* space */}
                    <div className='my-3'></div>


                    <div className="row mx-auto">
                        {/*row 1 card 1 */}
                        <div className='col-3'>
                            <div className='p-3 bg-white rounded-4 card'>

                                <div className='row cardhead'>
                                    <div className='col-6 cardcomcolor'>
                                        <h3 className='fw-bold '>P2SM</h3>
                                        <p className='fs_20 fw-bold'>
                                            PURCHASE TO SERVICE<br></br>
                                            MANAGEMENT
                                        </p>
                                    </div>
                                    <div className='col-6 text-end'>
                                        <img src={P2sm} alt='P2sm' className='w-75'></img>
                                    </div>
                                </div>


                                <span className=''><span className='fs-3 fw-bold'>$ 2,999</span> <span className='text-start fs-6 text-secondary'>/month</span></span>

                                <div className='mt-2'>

                                    <div className='row pb-0 mb-0'>
                                        <div className='col-1'>
                                            <i class="bi bi-check-circle-fill cardcomcolor"></i>
                                        </div>
                                        <div className='col-11'>
                                            <p className='mb-1 fs_15'>Online Orders for Customers <br></br>(E-commerce)</p>
                                        </div>
                                    </div>
                                    <div className='row mb-0 pb-0' >
                                        <div className='col-1'>
                                            <i class="bi bi-check-circle-fill cardcomcolor"></i>
                                        </div>
                                        <div className='col-11'>
                                            <p className='mb-1 fs_15'>Technician Reports & Installations</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-1'>
                                            <i class="bi bi-check-circle-fill cardcomcolor"></i>
                                        </div>
                                        <div className='col-11'>
                                            <p className='mb-1 fs_15'>Inventory Tracking & Management</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-1'>
                                            <i class="bi bi-check-circle-fill cardcomcolor"></i>
                                        </div>
                                        <div className='col-11'>
                                            <p className='mb-1 fs_15'>Email support during business hours.</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-1'>
                                            <i class="bi bi-check-circle-fill cardcomcolor"></i>
                                        </div>
                                        <div className='col-11'>
                                            <p className='mb-1 fs_15'>Point of Sale (POS) System</p>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>

                        {/*row 1 card 2 */}

                        <div className='col-3'>
                            <div className='  p-3 bg-white rounded-4 card'>

                                <div className='row cardhead'>
                                    <div className='col-6 cardcomcolor'>
                                        <h3 className='fw-bold '>REALTOR</h3>
                                        <p className='fs_20 fw-bold'>
                                        REAL ESTATE
                                        </p>
                                    </div>
                                    <div className='col-6 text-end'>
                                        <img src={Realtor} alt='P2sm' className='w-75'></img>
                                    </div>
                                </div>


                                <span className=''><span className='fs-3 fw-bold'>$ 2,999</span> <span className='text-start fs-6 text-secondary'>/month</span></span>

                                <div className='mt-2'>

                                    <div className='row '>
                                        <div className='col-1'>
                                            <i class="bi bi-check-circle-fill cardcomcolor"></i>
                                        </div>
                                        <div className='col-11'>
                                            <p className='mb-1 fs_15'>Property Listings Management
                                            </p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-1'>
                                            <i class="bi bi-check-circle-fill cardcomcolor"></i>
                                        </div>
                                        <div className='col-11'>
                                            <p className='mb-1 fs_15'>Client & Lead Management

                                            </p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-1'>
                                            <i class="bi bi-check-circle-fill cardcomcolor"></i>
                                        </div>
                                        <div className='col-11'>
                                            <p className='mb-1 fs_15'>Document Management & <br></br>E-signatures</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-1'>
                                            <i class="bi bi-check-circle-fill cardcomcolor"></i>
                                        </div>
                                        <div className='col-11'>
                                            <p className='mb-1 fs_15'>Sales & Rental Analytics</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-1'>
                                            <i class="bi bi-check-circle-fill cardcomcolor"></i>
                                        </div>
                                        <div className='col-11'>
                                            <p className='mb-1 fs_15'>Appointment Scheduling & Reminders</p>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>
                        {/*row 1 card 3 */}
                        <div className='col-3'>
                            <div className='  p-3 bg-white rounded-4 card'>

                                <div className='row cardhead'>
                                    <div className='col-6 cardcomcolor'>
                                        <h3 className='fw-bold '>RESTRO</h3>
                                        <p className='fs_20 fw-bold'>
                                        RESTAURANT MANAGEMENT
                                        </p>
                                    </div>
                                    <div className='col-6 text-end'>
                                        <img src={P2sm} alt='P2sm' className='w-75'></img>
                                    </div>
                                </div>


                                <span className=''><span className='fs-3 fw-bold'>$ 2,999</span> <span className='text-start fs-6 text-secondary'>/month</span></span>

                                <div className='mt-2'>

                                    <div className='row '>
                                        <div className='col-1'>
                                            <i class="bi bi-check-circle-fill cardcomcolor"></i>
                                        </div>
                                        <div className='col-11'>
                                            <p className='mb-1 fs_15'>Online Orders for Customers <br></br>(Dine-In & Takeaway)</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-1'>
                                            <i class="bi bi-check-circle-fill cardcomcolor"></i>
                                        </div>
                                        <div className='col-11'>
                                            <p className='mb-1 fs_15'>Kitchen Display System</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-1'>
                                            <i class="bi bi-check-circle-fill cardcomcolor"></i>
                                        </div>
                                        <div className='col-11'>
                                            <p className='mb-1 fs_15'>Cashier & Captain Management</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-1'>
                                            <i class="bi bi-check-circle-fill cardcomcolor"></i>
                                        </div>
                                        <div className='col-11'>
                                            <p className='mb-1 fs_15'>Point of Sale (POS) System</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-1'>
                                            <i class="bi bi-check-circle-fill cardcomcolor"></i>
                                        </div>
                                        <div className='col-11'>
                                            <p className='mb-1 fs_15'>Delivery Tracking</p>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>
                        {/*row 1 card 4 */}
                        <div className='col-3'>
                            <div className='  p-3 bg-white rounded-4 card'>

                                <div className='row cardhead'>
                                    <div className='col-6 cardcomcolor'>
                                        <h3 className='fw-bold '>ERETAILER</h3>
                                        <p className='fs_20 fw-bold'>
                                        ECOMMERCE MANAGEMENT
                                        </p>
                                    </div>
                                    <div className='col-6 text-end'>
                                    <img src={Realtor} alt='P2sm' className='w-75'></img>
                                    </div>
                                </div>


                                <span className=''><span className='fs-3 fw-bold'>$ 2,999</span> <span className='text-start fs-6 text-secondary'>/month</span></span>

                                <div className='mt-2'>

                                    <div className='row '>
                                        <div className='col-1'>
                                            <i class="bi bi-check-circle-fill cardcomcolor"></i>
                                        </div>
                                        <div className='col-11'>
                                            <p className='mb-1 fs_15'>Product Catalog Management</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-1'>
                                            <i class="bi bi-check-circle-fill cardcomcolor"></i>
                                        </div>
                                        <div className='col-11'>
                                            <p className='mb-1 fs_15'>Secure Payment Gateway</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-1'>
                                            <i class="bi bi-check-circle-fill cardcomcolor"></i>
                                        </div>
                                        <div className='col-11'>
                                            <p className='mb-1 fs_15'>Order Management System</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-1'>
                                            <i class="bi bi-check-circle-fill cardcomcolor"></i>
                                        </div>
                                        <div className='col-11'>
                                            <p className='mb-1 fs_15'>Customer Account Management</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-1'>
                                            <i class="bi bi-check-circle-fill cardcomcolor"></i>
                                        </div>
                                        <div className='col-11'>
                                            <p className='mb-1 fs_15'>Inventory Management</p>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>




                    {/* space */}
                    <div className='my-4'></div>


                    <div className="row mx-auto">
                        {/*row 2 card 1 */}
                        <div className='col-3'>
                            <div className='  p-3 bg-white rounded-4 card'>

                                <div className='row cardhead'>
                                    <div className='col-6 cardcomcolor'>
                                        <h3 className='fw-bold '>CALC</h3>
                                        <p className='fs_20 fw-bold'>
                                        JEWELL LOAN CALCUULATOR
                                        </p>
                                        {/* <h3 className=''>FREE</h3> */}
                                    </div>
                                    <div className='col-6 text-end'>
                                        <img src={Cal} alt='P2sm' className='w-75 p-2'></img>
                                    </div>
                                </div>


                                <span className=''><span className='fs-3 fw-bold'>FREE</span> <span className='text-start fs-6 text-secondary'></span></span>

                                <div className='mt-2'>

                                    <div className='row '>
                                        <div className='col-1'>
                                            <i class="bi bi-check-circle-fill cardcomcolor"></i>
                                        </div>
                                        <div className='col-11'>
                                            <p className='mb-1 fs_15'>Gold Interest Calculator</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-1'>
                                            <i class="bi bi-check-circle-fill cardcomcolor"></i>
                                        </div>
                                        <div className='col-11'>
                                            <p className='mb-1 fs_15'>Silver Interest Calculator</p>
                                        </div>
                                    </div>
                                    



                                </div>


                            </div>
                        </div>
                        {/* row2 card 2 */}
                        <div className='col-3'>

                        </div>
                        {/* row 2 card 3 */}
                        <div className='col-3'>

                        </div>
                        {/*row 2 card 4 */}
                        <div className='col-3'>

                        </div>
                    </div>


                    {/* space */}
                    <div className='my-2'></div>


                </div>
            </div>
        </>
    );
}

export default LandingBody;
