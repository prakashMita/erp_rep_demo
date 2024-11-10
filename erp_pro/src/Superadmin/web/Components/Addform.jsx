import React from 'react'
import Navbar from './Navbar'
import '../../../assets/Superadmin/css/font.css';
import '../../../assets/Superadmin/css/Superadmin.css';
import Leftnavi from './Leftnavi';
import Sidebar from './Sidebar';

function Addform() {
    return (
        <div>
            <Navbar />
            <div className="row g-0">

                <div className="col-1">
                    <Leftnavi />
                </div>
                <div className="col-11">
                    <div className="main-container">

                        <Sidebar />

                        <div className="formelement">

                            <div id="formControls" className="mb-5">

                                <div className="card">

                                    <div className="card-body pb-2">
                                        <form encType="multipart/form-data">
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <div className="form-group mb-3">
                                                        <label className="form-label" for="exampleFormControlInput1">Property Title</label>
                                                        <input type="text" name="prop_title" className="form-control" id="exampleFormControlInput1" placeholder="" />
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <label className="form-label" for="exampleFormControlInput1">Location</label>
                                                        <input type="text" name="prop_location" className="form-control" id="exampleFormControlInput1" placeholder="" />
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <label className="form-label" for="exampleFormControlInput1">Estimated Amount</label>
                                                        <input type="text" name="prop_value" className="form-control" id="exampleFormControlInput1" placeholder="" />
                                                    </div>

                                                    <div className="form-group mb-3">
                                                        <label className="form-label" for="exampleFormControlFile1">File input</label>
                                                        <input type="file" name="prop_image" className="form-control" id="exampleFormControlFile1" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="form-group mb-3">
                                                        <label className="form-label" for="exampleFormControlSelect1">BHK</label>
                                                        <select name="prop_type" className="form-select" id="exampleFormControlSelect1" >
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <label className="form-label" for="exampleFormControlInput1">Property Description</label>
                                                        <input type="text" name="prop_description" className="form-control" id="exampleFormControlInput1" placeholder="" />
                                                    </div>
                                                </div>

                                            </div>
                                         
                                        </form>
                                  
                                    </div>

                                </div>

                                <div className="form-group row">
                                                <div className="col-sm-10 mb-3 text-end">
                                                    <button type="submit" className="btn btn-success">Add</button>
                                                </div>
                                            </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addform
