import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Leftnavi from './Leftnavi'
import Sidebar from './Sidebar'

function Viewform() {
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

                        <div className="viewlist">
                            <div className="pb-3">
                                <div className="d-lg-flex mb-lg-3 mb-2">
                                    <h1 className="page-header mb-0 flex-1">Data Management</h1>
                                    <span className="d-none d-lg-flex align-items-center ms-auto">
                                        <a href="#" className="btn btn-secondary btn-sm d-flex me-2 pe-3">
                                            <span className="iconify fs-18px me-2 ms-n1" data-icon="solar:printer-bold-duotone"></span>
                                            Print Result
                                        </a>
                                        <a href="#" className="btn btn-secondary btn-sm d-flex me-2 pe-3">
                                            <span className="iconify fs-18px me-2 ms-n1" data-icon="solar:archive-down-minimlistic-bold-duotone"></span>
                                            Export Excel
                                        </a>
                                        <a href="#" className="btn btn-theme btn-sm d-flex pe-3 ddd">
                                            <span className="iconify fs-18px me-2 ms-n1" data-icon="solar:refresh-bold-duotone"></span>
                                            Reload Data
                                        </a>
                                    </span>
                                </div>
                                <div className="row gx-2 pb-lg-3 pb-2">
                                    <div className="col-lg-4">
                                        <div className="position-relative">
                                            <input type="text" className="form-control ps-50px" placeholder="Search" />
                                            <button className="btn position-absolute start-0 top-0 shadow-none"><i className="bi bi-search fa-lg"></i></button>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 d-lg-block d-none">
                                        <a href="#" className="btn btn-secondary d-flex align-items-center" data-bs-toggle="dropdown">
                                            <span className="iconify fs-20px my-n1 me-2 ms-n1 text-theme" data-icon="solar:calendar-search-linear"></span>
                                            Date Range
                                            <i className="fa ms-auto fa-chevron-down"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item d-flex align-items-center" href="#"><span className="iconify fs-20px my-n1 me-2 ms-n1 text-body text-opacity-50" data-icon="solar:calendar-line-duotone"></span> Last 7 Days</a></li>
                                            <li><a className="dropdown-item d-flex align-items-center" href="#"><span className="iconify fs-20px my-n1 me-2 ms-n1 text-body text-opacity-50" data-icon="solar:calendar-line-duotone"></span> Last 30 Days</a></li>
                                            <li><a className="dropdown-item d-flex align-items-center" href="#"><span className="iconify fs-20px my-n1 me-2 ms-n1 text-body text-opacity-50" data-icon="solar:calendar-line-duotone"></span> This Month</a></li>
                                            <li><a className="dropdown-item d-flex align-items-center" href="#"><span className="iconify fs-20px my-n1 me-2 ms-n1 text-body text-opacity-50" data-icon="solar:calendar-line-duotone"></span> Last Month</a></li>
                                            <li><a className="dropdown-item d-flex align-items-center" href="#"><span className="iconify fs-20px my-n1 me-2 ms-n1 text-body text-opacity-50" data-icon="solar:calendar-line-duotone"></span> Custom Range</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-2 d-lg-block d-none">
                                        <a href="#" className="btn btn-secondary d-flex align-items-center" data-bs-toggle="dropdown">
                                            <span className="iconify fs-20px my-n1 me-2 ms-n1 text-theme" data-icon="solar:tag-linear"></span>
                                            Status
                                            <i className="fa ms-auto fa-chevron-down"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item d-flex align-items-center" href="#"><i className="fa fa-circle fs-7px me-2 ms-n1 text-success"></i> Active</a></li>
                                            <li><a className="dropdown-item d-flex align-items-center" href="#"><i className="fa fa-circle fs-7px me-2 ms-n1 text-body text-opacity-25"></i> Inactive</a></li>
                                            <li><a className="dropdown-item d-flex align-items-center" href="#"><i className="fa fa-circle fs-7px me-2 ms-n1 text-danger"></i> Removed</a></li>
                                            <li><a className="dropdown-item d-flex align-items-center" href="#"><i className="fa fa-circle fs-7px me-2 ms-n1 text-warning"></i> Pending</a></li>
                                            <li><a className="dropdown-item d-flex align-items-center" href="#"><i className="fa fa-circle fs-7px me-2 ms-n1 text-primary"></i> Archived</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-2 d-lg-block d-none">
                                        <a href="#" className="btn btn-secondary d-flex align-items-center" data-bs-toggle="dropdown">
                                            <span className="iconify fs-20px my-n1 me-2 ms-n1 text-theme" data-icon="solar:map-point-linear"></span>
                                            Location
                                            <i className="fa ms-auto fa-chevron-down"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item d-flex align-items-center" href="#"><span className="iconify fs-20px my-n1 me-2 ms-n1 text-body text-opacity-50" data-icon="solar:map-point-linear"></span> New York City, New York, USA</a></li>
                                            <li><a className="dropdown-item d-flex align-items-center" href="#"><span className="iconify fs-20px my-n1 me-2 ms-n1 text-body text-opacity-50" data-icon="solar:map-point-linear"></span> London, United Kingdom</a></li>

                                        </ul>
                                    </div>
                                    <div className="col-lg-2 d-lg-block d-none">
                                        <a href="#" className="btn btn-secondary d-flex align-items-center" data-bs-toggle="dropdown">
                                            <span className="iconify fs-20px my-n1 me-2 ms-n1 text-theme" data-icon="solar:tuning-linear"></span>
                                            More filters
                                            <i className="fa ms-auto fa-chevron-down"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">High Priority</a></li>
                                            <li><a className="dropdown-item" href="#">Low Priority</a></li>
                                            <li><a className="dropdown-item" href="#">Overdue</a></li>
                                            <li><a className="dropdown-item" href="#">Completed</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#">Custom Filter 1</a></li>
                                            <li><a className="dropdown-item" href="#">Custom Filter 2</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="d-lg-flex align-items-center mb-n2">
                                    <div className="d-lg-flex d-none align-items-center text-nowrap">
                                        Results per page:
                                        <select className="form-select form-select-sm ms-2 h-25px py-0 ps-2 pe-30px">
                                            <option>100</option>
                                            <option>50</option>
                                            <option selected>30</option>
                                        </select>
                                    </div>
                                    <div className="d-lg-block d-none ms-2 text-body text-opacity-50">
                                        1,495 results found
                                    </div>
                                    <ul className="pagination pagination-sm mb-0 ms-auto justify-content-center">
                                        <li className="page-item disabled"><a className="page-link">Previous</a></li>
                                        <li className="page-item d-lg-block d-none2"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item d-lg-block d-none2"><a className="page-link bg-theme text-theme-color border border-theme" href="#">2</a></li>
                                        <li className="page-item d-lg-block d-none2"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item d-lg-block d-none2"><a className="page-link" href="#">4</a></li>
                                        <li className="page-item d-lg-block d-none2"><a className="page-link" href="#">5</a></li>
                                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="table-responsive" id="table" style={{height: '208.016px'}}>
                                <table className="table table-thead-sticky table-tfoot-sticky table-tbody-bordered table-px-10px table-py-4px table-sm table-striped text-nowrap mb-0 fs-11px">
                                    <thead className="text-uppercase">
                                        <tr>
                                            <th>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </th>
                                            <th className="text-black">No.</th>
                                            <th className="text-black">Category</th>
                                            <th className="text-black">Item Name</th>
                                            <th className="text-black">Status</th>
                                            <th className="text-black">Stock</th>
                                            <th className="text-black">Price</th>
                                            <th className="text-black">Cost /unit</th>
                                            <th className="text-black">07/2024</th>
                                            <th className="text-black">08/2024</th>
                                            <th className="text-black">09/2024</th>
                                            <th className="text-black">10/2024</th>
                                            <th className="text-black">11/2024</th>
                                            <th className="text-black">12/2024</th>
                                            <th className="text-black">Total Sales</th>
                                            <th className="text-black">Total Cost</th>
                                            <th className="text-black">Total Profit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>1.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 Pro Max - 256gb - Deep Purple</td>
                                            <td>Active</td>
                                            <td>25</td>
                                            <td>$999</td>
                                            <td>$899</td>
                                            <td>5 sold</td>
                                            <td>6 sold</td>
                                            <td>10 sold</td>
                                            <td>4 sold</td>
                                            <td>5 sold</td>
                                            <td>25 sold</td>
                                            <td>$49,950</td>
                                            <td>$44,950</td>
                                            <td>$5,000</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>2.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 Pro Max - 256gb - Space Black</td>
                                            <td>Active</td>
                                            <td>50</td>
                                            <td>$999</td>
                                            <td>$899</td>
                                            <td>10 sold</td>
                                            <td>16 sold</td>
                                            <td>20 sold</td>
                                            <td>14 sold</td>
                                            <td>10 sold</td>
                                            <td>55 sold</td>
                                            <td>$124,875</td>
                                            <td>$112,375</td>
                                            <td>$12,500</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>3.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 - 256gb - Space Black</td>
                                            <td>Inactive</td>
                                            <td>0</td>
                                            <td>$599</td>
                                            <td>$499</td>
                                            <td>5 sold</td>
                                            <td>2 sold</td>
                                            <td>1 sold</td>
                                            <td>7 sold</td>
                                            <td>15 sold</td>
                                            <td>25 sold</td>
                                            <td>$32,945</td>
                                            <td>$27,445</td>
                                            <td>$5,500</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>3.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 - 256gb - Space Black</td>
                                            <td>Inactive</td>
                                            <td>0</td>
                                            <td>$599</td>
                                            <td>$499</td>
                                            <td>5 sold</td>
                                            <td>2 sold</td>
                                            <td>1 sold</td>
                                            <td>7 sold</td>
                                            <td>15 sold</td>
                                            <td>25 sold</td>
                                            <td>$32,945</td>
                                            <td>$27,445</td>
                                            <td>$5,500</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>3.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 - 256gb - Space Black</td>
                                            <td>Inactive</td>
                                            <td>0</td>
                                            <td>$599</td>
                                            <td>$499</td>
                                            <td>5 sold</td>
                                            <td>2 sold</td>
                                            <td>1 sold</td>
                                            <td>7 sold</td>
                                            <td>15 sold</td>
                                            <td>25 sold</td>
                                            <td>$32,945</td>
                                            <td>$27,445</td>
                                            <td>$5,500</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>3.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 - 256gb - Space Black</td>
                                            <td>Inactive</td>
                                            <td>0</td>
                                            <td>$599</td>
                                            <td>$499</td>
                                            <td>5 sold</td>
                                            <td>2 sold</td>
                                            <td>1 sold</td>
                                            <td>7 sold</td>
                                            <td>15 sold</td>
                                            <td>25 sold</td>
                                            <td>$32,945</td>
                                            <td>$27,445</td>
                                            <td>$5,500</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>3.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 - 256gb - Space Black</td>
                                            <td>Inactive</td>
                                            <td>0</td>
                                            <td>$599</td>
                                            <td>$499</td>
                                            <td>5 sold</td>
                                            <td>2 sold</td>
                                            <td>1 sold</td>
                                            <td>7 sold</td>
                                            <td>15 sold</td>
                                            <td>25 sold</td>
                                            <td>$32,945</td>
                                            <td>$27,445</td>
                                            <td>$5,500</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>3.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 - 256gb - Space Black</td>
                                            <td>Inactive</td>
                                            <td>0</td>
                                            <td>$599</td>
                                            <td>$499</td>
                                            <td>5 sold</td>
                                            <td>2 sold</td>
                                            <td>1 sold</td>
                                            <td>7 sold</td>
                                            <td>15 sold</td>
                                            <td>25 sold</td>
                                            <td>$32,945</td>
                                            <td>$27,445</td>
                                            <td>$5,500</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>3.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 - 256gb - Space Black</td>
                                            <td>Inactive</td>
                                            <td>0</td>
                                            <td>$599</td>
                                            <td>$499</td>
                                            <td>5 sold</td>
                                            <td>2 sold</td>
                                            <td>1 sold</td>
                                            <td>7 sold</td>
                                            <td>15 sold</td>
                                            <td>25 sold</td>
                                            <td>$32,945</td>
                                            <td>$27,445</td>
                                            <td>$5,500</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>3.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 - 256gb - Space Black</td>
                                            <td>Inactive</td>
                                            <td>0</td>
                                            <td>$599</td>
                                            <td>$499</td>
                                            <td>5 sold</td>
                                            <td>2 sold</td>
                                            <td>1 sold</td>
                                            <td>7 sold</td>
                                            <td>15 sold</td>
                                            <td>25 sold</td>
                                            <td>$32,945</td>
                                            <td>$27,445</td>
                                            <td>$5,500</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>3.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 - 256gb - Space Black</td>
                                            <td>Inactive</td>
                                            <td>0</td>
                                            <td>$599</td>
                                            <td>$499</td>
                                            <td>5 sold</td>
                                            <td>2 sold</td>
                                            <td>1 sold</td>
                                            <td>7 sold</td>
                                            <td>15 sold</td>
                                            <td>25 sold</td>
                                            <td>$32,945</td>
                                            <td>$27,445</td>
                                            <td>$5,500</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>3.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 - 256gb - Space Black</td>
                                            <td>Inactive</td>
                                            <td>0</td>
                                            <td>$599</td>
                                            <td>$499</td>
                                            <td>5 sold</td>
                                            <td>2 sold</td>
                                            <td>1 sold</td>
                                            <td>7 sold</td>
                                            <td>15 sold</td>
                                            <td>25 sold</td>
                                            <td>$32,945</td>
                                            <td>$27,445</td>
                                            <td>$5,500</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>3.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 - 256gb - Space Black</td>
                                            <td>Inactive</td>
                                            <td>0</td>
                                            <td>$599</td>
                                            <td>$499</td>
                                            <td>5 sold</td>
                                            <td>2 sold</td>
                                            <td>1 sold</td>
                                            <td>7 sold</td>
                                            <td>15 sold</td>
                                            <td>25 sold</td>
                                            <td>$32,945</td>
                                            <td>$27,445</td>
                                            <td>$5,500</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>3.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 - 256gb - Space Black</td>
                                            <td>Inactive</td>
                                            <td>0</td>
                                            <td>$599</td>
                                            <td>$499</td>
                                            <td>5 sold</td>
                                            <td>2 sold</td>
                                            <td>1 sold</td>
                                            <td>7 sold</td>
                                            <td>15 sold</td>
                                            <td>25 sold</td>
                                            <td>$32,945</td>
                                            <td>$27,445</td>
                                            <td>$5,500</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>3.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 - 256gb - Space Black</td>
                                            <td>Inactive</td>
                                            <td>0</td>
                                            <td>$599</td>
                                            <td>$499</td>
                                            <td>5 sold</td>
                                            <td>2 sold</td>
                                            <td>1 sold</td>
                                            <td>7 sold</td>
                                            <td>15 sold</td>
                                            <td>25 sold</td>
                                            <td>$32,945</td>
                                            <td>$27,445</td>
                                            <td>$5,500</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>3.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 - 256gb - Space Black</td>
                                            <td>Inactive</td>
                                            <td>0</td>
                                            <td>$599</td>
                                            <td>$499</td>
                                            <td>5 sold</td>
                                            <td>2 sold</td>
                                            <td>1 sold</td>
                                            <td>7 sold</td>
                                            <td>15 sold</td>
                                            <td>25 sold</td>
                                            <td>$32,945</td>
                                            <td>$27,445</td>
                                            <td>$5,500</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>3.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 - 256gb - Space Black</td>
                                            <td>Inactive</td>
                                            <td>0</td>
                                            <td>$599</td>
                                            <td>$499</td>
                                            <td>5 sold</td>
                                            <td>2 sold</td>
                                            <td>1 sold</td>
                                            <td>7 sold</td>
                                            <td>15 sold</td>
                                            <td>25 sold</td>
                                            <td>$32,945</td>
                                            <td>$27,445</td>
                                            <td>$5,500</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>3.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 - 256gb - Space Black</td>
                                            <td>Inactive</td>
                                            <td>0</td>
                                            <td>$599</td>
                                            <td>$499</td>
                                            <td>5 sold</td>
                                            <td>2 sold</td>
                                            <td>1 sold</td>
                                            <td>7 sold</td>
                                            <td>15 sold</td>
                                            <td>25 sold</td>
                                            <td>$32,945</td>
                                            <td>$27,445</td>
                                            <td>$5,500</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>3.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 - 256gb - Space Black</td>
                                            <td>Inactive</td>
                                            <td>0</td>
                                            <td>$599</td>
                                            <td>$499</td>
                                            <td>5 sold</td>
                                            <td>2 sold</td>
                                            <td>1 sold</td>
                                            <td>7 sold</td>
                                            <td>15 sold</td>
                                            <td>25 sold</td>
                                            <td>$32,945</td>
                                            <td>$27,445</td>
                                            <td>$5,500</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>3.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 - 256gb - Space Black</td>
                                            <td>Inactive</td>
                                            <td>0</td>
                                            <td>$599</td>
                                            <td>$499</td>
                                            <td>5 sold</td>
                                            <td>2 sold</td>
                                            <td>1 sold</td>
                                            <td>7 sold</td>
                                            <td>15 sold</td>
                                            <td>25 sold</td>
                                            <td>$32,945</td>
                                            <td>$27,445</td>
                                            <td>$5,500</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>3.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 - 256gb - Space Black</td>
                                            <td>Inactive</td>
                                            <td>0</td>
                                            <td>$599</td>
                                            <td>$499</td>
                                            <td>5 sold</td>
                                            <td>2 sold</td>
                                            <td>1 sold</td>
                                            <td>7 sold</td>
                                            <td>15 sold</td>
                                            <td>25 sold</td>
                                            <td>$32,945</td>
                                            <td>$27,445</td>
                                            <td>$5,500</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>3.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 - 256gb - Space Black</td>
                                            <td>Inactive</td>
                                            <td>0</td>
                                            <td>$599</td>
                                            <td>$499</td>
                                            <td>5 sold</td>
                                            <td>2 sold</td>
                                            <td>1 sold</td>
                                            <td>7 sold</td>
                                            <td>15 sold</td>
                                            <td>25 sold</td>
                                            <td>$32,945</td>
                                            <td>$27,445</td>
                                            <td>$5,500</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>3.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 - 256gb - Space Black</td>
                                            <td>Inactive</td>
                                            <td>0</td>
                                            <td>$599</td>
                                            <td>$499</td>
                                            <td>5 sold</td>
                                            <td>2 sold</td>
                                            <td>1 sold</td>
                                            <td>7 sold</td>
                                            <td>15 sold</td>
                                            <td>25 sold</td>
                                            <td>$32,945</td>
                                            <td>$27,445</td>
                                            <td>$5,500</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>3.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 - 256gb - Space Black</td>
                                            <td>Inactive</td>
                                            <td>0</td>
                                            <td>$599</td>
                                            <td>$499</td>
                                            <td>5 sold</td>
                                            <td>2 sold</td>
                                            <td>1 sold</td>
                                            <td>7 sold</td>
                                            <td>15 sold</td>
                                            <td>25 sold</td>
                                            <td>$32,945</td>
                                            <td>$27,445</td>
                                            <td>$5,500</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>3.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 - 256gb - Space Black</td>
                                            <td>Inactive</td>
                                            <td>0</td>
                                            <td>$599</td>
                                            <td>$499</td>
                                            <td>5 sold</td>
                                            <td>2 sold</td>
                                            <td>1 sold</td>
                                            <td>7 sold</td>
                                            <td>15 sold</td>
                                            <td>25 sold</td>
                                            <td>$32,945</td>
                                            <td>$27,445</td>
                                            <td>$5,500</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>3.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 - 256gb - Space Black</td>
                                            <td>Inactive</td>
                                            <td>0</td>
                                            <td>$599</td>
                                            <td>$499</td>
                                            <td>5 sold</td>
                                            <td>2 sold</td>
                                            <td>1 sold</td>
                                            <td>7 sold</td>
                                            <td>15 sold</td>
                                            <td>25 sold</td>
                                            <td>$32,945</td>
                                            <td>$27,445</td>
                                            <td>$5,500</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>3.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 - 256gb - Space Black</td>
                                            <td>Inactive</td>
                                            <td>0</td>
                                            <td>$599</td>
                                            <td>$499</td>
                                            <td>5 sold</td>
                                            <td>2 sold</td>
                                            <td>1 sold</td>
                                            <td>7 sold</td>
                                            <td>15 sold</td>
                                            <td>25 sold</td>
                                            <td>$32,945</td>
                                            <td>$27,445</td>
                                            <td>$5,500</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>3.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 - 256gb - Space Black</td>
                                            <td>Inactive</td>
                                            <td>0</td>
                                            <td>$599</td>
                                            <td>$499</td>
                                            <td>5 sold</td>
                                            <td>2 sold</td>
                                            <td>1 sold</td>
                                            <td>7 sold</td>
                                            <td>15 sold</td>
                                            <td>25 sold</td>
                                            <td>$32,945</td>
                                            <td>$27,445</td>
                                            <td>$5,500</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>3.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 - 256gb - Space Black</td>
                                            <td>Inactive</td>
                                            <td>0</td>
                                            <td>$599</td>
                                            <td>$499</td>
                                            <td>5 sold</td>
                                            <td>2 sold</td>
                                            <td>1 sold</td>
                                            <td>7 sold</td>
                                            <td>15 sold</td>
                                            <td>25 sold</td>
                                            <td>$32,945</td>
                                            <td>$27,445</td>
                                            <td>$5,500</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>3.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 - 256gb - Space Black</td>
                                            <td>Inactive</td>
                                            <td>0</td>
                                            <td>$599</td>
                                            <td>$499</td>
                                            <td>5 sold</td>
                                            <td>2 sold</td>
                                            <td>1 sold</td>
                                            <td>7 sold</td>
                                            <td>15 sold</td>
                                            <td>25 sold</td>
                                            <td>$32,945</td>
                                            <td>$27,445</td>
                                            <td>$5,500</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>3.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 - 256gb - Space Black</td>
                                            <td>Inactive</td>
                                            <td>0</td>
                                            <td>$599</td>
                                            <td>$499</td>
                                            <td>5 sold</td>
                                            <td>2 sold</td>
                                            <td>1 sold</td>
                                            <td>7 sold</td>
                                            <td>15 sold</td>
                                            <td>25 sold</td>
                                            <td>$32,945</td>
                                            <td>$27,445</td>
                                            <td>$5,500</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>3.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 - 256gb - Space Black</td>
                                            <td>Inactive</td>
                                            <td>0</td>
                                            <td>$599</td>
                                            <td>$499</td>
                                            <td>5 sold</td>
                                            <td>2 sold</td>
                                            <td>1 sold</td>
                                            <td>7 sold</td>
                                            <td>15 sold</td>
                                            <td>25 sold</td>
                                            <td>$32,945</td>
                                            <td>$27,445</td>
                                            <td>$5,500</td>
                                        </tr>


                                        <tr>
                                            <td>
                                                <div className="form-check d-flex justify-content-center my-0 mx-n1">
                                                    <input type="checkbox" className="form-check-input"/>
                                                </div>
                                            </td>
                                            <td>3.</td>
                                            <td>Mobile Phone</td>
                                            <td>iPhone 14 - 256gb - Space Black</td>
                                            <td>Inactive</td>
                                            <td>0</td>
                                            <td>$599</td>
                                            <td>$499</td>
                                            <td>5 sold</td>
                                            <td>2 sold</td>
                                            <td>1 sold</td>
                                            <td>7 sold</td>
                                            <td>15 sold</td>
                                            <td>25 sold</td>
                                            <td>$32,945</td>
                                            <td>$27,445</td>
                                            <td>$5,500</td>
                                        </tr>
                                    
                                                              
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th>309 sold</th>
                                            <th>241 sold</th>
                                            <th>271 sold</th>
                                            <th>304 sold</th>
                                            <th>241 sold</th>
                                            <th>457 sold</th>
                                            <th>$923,462</th>
                                            <th>$751,792</th>
                                            <th>$171,670</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewform
