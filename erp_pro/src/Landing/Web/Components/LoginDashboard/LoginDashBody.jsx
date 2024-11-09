
import P2sm from '../../../../assets/Landing/img/Landing/p2sm.png'
import Realtor from '../../../../assets/Landing/img/Landing/realtor.png'
import Cal from '../../../../assets/Landing/img/Landing/cal.png'
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../../../assets/Landing/css/LoginDashboard/LoginDashboard.css'
function LoginDashBody() {
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

                                <div className='mt-0 pt-0'>
                                    <button className='btn  w-25 mt-0 cardbtn border-success fw-bold'>Active</button>
                                </div>


                                <div className='mt-4'>


                                    <div className=" row">
                                        <div className='col-3'>


                                            <div className="clock-icon ">
                                                <div className="clock-face">
                                                    <div className="clock-hour"></div>
                                                    <div className="clock-minute"></div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className='col-9 my-auto '>
                                            <p className='my-auto'><span className='text-secondary fw-bold'>Expire :</span> 26th Nov 2024</p>
                                            <p className='my-auto'><span className=' cardcomcolor'>14 Days Left</span> </p>
                                        </div>
                                    </div>
    
                                   <div className='row mt-4'>
                                    <div className='col-12 text-center'>
                                      <a href='p2sm.mita.in.local'> <button className='btn btn-outline-secondary cardcomcolorbg border w-100 fw-bold p-2'><i class="bi bi-pc-display-horizontal px-2 text-white"></i><span className='text-white'> Go to Dashboard</span></button></a> 
                                    </div>
                                   </div>


                                </div>


                            </div>
                        </div>

                        {/*row 1 card 2 */}


                    </div>






                </div>
            </div>
        </>
    );
}

export default LoginDashBody;
