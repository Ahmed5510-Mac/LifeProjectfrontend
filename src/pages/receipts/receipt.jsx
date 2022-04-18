import React from 'react'
import { Container } from "@mui/material";
import Orderes from '../../components/rceipts/orderes'
import "./recepts.css"
import PriceDetails from '../../components/rceipts/price-details'

import { useNavigate } from 'react-router-dom';
function Receipt() {
    const navigate=useNavigate()
    return (
        <Container sx={{ marginY: "10%" }}>
            <div className="container-md mob-cart-Container   ">
                <div className="row">
                    <div className="jumbotron border  col-md-8 shadow p-3 mb-5 bg-white rounde text-capitalize col-sm-12" >
                        <h5> ADDRESS DETAILS</h5>
                        <hr />
                        {/* --------cart details-------- */}
                        <div classNameName="product-details   mb-1 pb-2">

                            <div className="container">
                                <form>
                                    {/* ------------nameinput-------------- */}
                                    <div className="name d-flex form-recipts justify-content-between">
                                        <div className="mb-3 divinput col-sm-12 col-md-5  ">
                                            <label for="exampleInputEmail1" className="form-label"> First Name</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="mb-3 divinput col-sm-12 col-md-5 ">
                                            <label for="exampleInputPassword1" className="form-label">Last Name</label>
                                            <input type="taxt" className="form-control " id="exampleInputPassword1" />
                                        </div>
                                    </div>
                                        {/* mobil input */}
                                    <div className="mb-3 col-sm-12 col-md-12 ">
                                        <label for="exampleInputPassword1" className="form-label">mobile number</label>
                                        <input type="number" className="form-control " id="exampleInputPassword1" />
                                    </div>
                                    {/* -----------------addredss--------------------- */}
                                    <div className="form-group mb-3">
                                        <label for="exampleFormControlTextarea1">street-name/ building number/ flat number</label>
                                        <textarea className="form-control" placeholder='address' id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    {/* -----------------Governorate--------------------- */}
                                    <div className="form-group my-2">
                                        <label for="exampleFormControlSelect1"> choose Governorate </label>
                                        <select className="form-control" id="exampleFormControlSelect1">
                                        <option>kaf elshikh</option>
                                        <option>cairo</option>
                                        <option>alex</option>
                                        <option>banha</option>
                                        <option>dakhlia</option>
                                        </select>
                                    </div>
                                    {/* -----------------city--------------------- */}
                                    <div className="form-group mb-3">
                                        <label for="exampleFormControlSelect1"> choose city </label>
                                        <select className="form-control" id="exampleFormControlSelect1">
                                        <option>kaf elshikh</option>
                                        <option>cairo</option>
                                        <option>alex</option>
                                        <option>banha</option>
                                        <option>dakhlia</option>
                                        </select>
                                    </div>
                                    
                                    <button type="submit" className="btn font-weight-bold-1 w-100 mb-3">Save and continue</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* ---------cart summry----------- */}
                    <div className="cart-order  ms-2 border col-md-3 mt-2 mt-md-0 shadow p-3 mb-5 bg-white  rounde text-capitalize h-50 ">
                        <h5 className="d-md-block d-none"> YOUR ORDER(4 items)</h5>
                        <hr className="d-md-block d-none" />
                        <div className="orders">
                                <Orderes/>
                                <Orderes/>
                                <Orderes/>
                                <Orderes/>
                                <Orderes/>
                                <Orderes/>
                        </div>
                       <PriceDetails/>
                        <button  className="btn  w-100 font-weight-bold" onClick={()=>navigate("/cart")}>MODIFY CART</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Receipt