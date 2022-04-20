import React, { useEffect } from 'react'
import { Container } from "@mui/material";
import Orderes from '../../components/rceipts/orderes'
import "./recepts.css"
import PriceDetails from '../../components/rceipts/price-details'
import DeliveryMethod from '../../components/rceipts/DeliveryMethod'
import { useNavigate } from 'react-router-dom';
 import { useDispatch, useSelector } from 'react-redux';
import {toggle} from "../../store/receipts/receiptSlice";
import { getTotals } from '../../store/cart/cartSlice';
 function Receipt() {
      const receiptState = useSelector((state) => state.reciptSlice.value)
      const cart = useSelector((state) => state.cart);
      console.log(cart);

      const dispatch =useDispatch() 
      useEffect(() => {
        dispatch(getTotals());
      }, [cart]);



      const orderCard=cart.cartItems.map((item,index)=>{
          return(<>
           <Orderes

        product={item}
        />
          </>)
   });

    const navigate=useNavigate()
    return (
        <Container sx={{ marginY: "5%" }}>
            
            <div className="container-md mob-cart-Container ">
                <div className="row">
                    <div className="parent col-md-8">
                         {
                            receiptState? <DeliveryMethod/>:<div className="jumbotron border  w-100 shadow p-3 mb-5 bg-white rounde text-capitalize col-sm-12" >
                                <h5> ADDRESS DETAILS</h5>
                                <hr />
                                {/* --------cart details-------- */}
                                <div className="product-details   mb-1 pb-2">

                                    <div className="container">  
                                        
                                        <form onSubmit={(e) => e.preventDefault()}>
                                            {/* ------------nameinput-------------- */}
                                            <div className="name d-flex form-recipts justify-content-between">
                                                <div className="mb-3 divinput col-sm-12 col-md-5  ">
                                                    <label htmlFor="exampleInputfname" className="form-label"> First Name</label>
                                                    <input type="text" className="form-control" id="exampleInputfname" aria-describedby="emailHelp" />
                                                </div>
                                                <div className="mb-3 divinput col-sm-12 col-md-5 ">
                                                    <label htmlFor="exampleInputlname" className="form-label">Last Name</label>
                                                    <input type="taxt" className="form-control " id="exampleInputlname" />
                                                </div>
                                            </div>
                                            {/* mobil input */}
                                            <div className="mb-3 col-sm-12 col-md-12 ">
                                                <label htmlFor="exampleInputmphone" className="form-label">mobile number</label>
                                                <input type="number" className="form-control " id="exampleInputmphone" />
                                            </div>
                                            {/* -----------------addredss--------------------- */}
                                            <div className="form-group mb-3">
                                                <label htmlFor="exampleFormControlTextarea1">street-name/ building number/ flat number</label>
                                                <textarea className="form-control" placeholder='address' id="exampleFormControlTextarea1" rows="3"></textarea>
                                            </div>
                                            {/* -----------------Governorate--------------------- */}
                                            <div className="form-group my-2">
                                                <label htmlFor="exampleFormControlGovernorate"> choose Governorate </label>
                                                <select className="form-control" id="exampleFormControlGovernorate">
                                                    <option>kaf elshikh</option>
                                                    <option>cairo</option>
                                                    <option>alex</option>
                                                    <option>banha</option>
                                                    <option>dakhlia</option>
                                                </select>
                                            </div>
                                            {/* -----------------city--------------------- */}
                                            <div className="form-group mb-3">
                                                <label htmlFor="exampleFormControlcity"> choose city </label>
                                                <select className="form-control" id="exampleFormControlcity">
                                                    <option>kaf elshikh</option>
                                                    <option>cairo</option>
                                                    <option>alex</option>
                                                    <option>banha</option>
                                                    <option>dakhlia</option>
                                                </select>
                                            </div>
                                        
                                            <button type="submit" className="btn font-weight-bold-1 w-100 mb-3" onClick={() => dispatch(toggle())}>Save and continue</button>
                                        </form>
                                
                                    </div>
                            </div>


                            
                            </div>
                         }
                    </div>
                    {/* ---------cart summry----------- */}
                     <div className="cart-order  ms-2 border col-md-3 mt-2 mt-md-0 shadow p-3 mb-5 bg-white  rounde text-capitalize h-50 ">
                        <h5 className="d-md-block d-none"> {`YOUR ORDER(${cart.cartTotalQuantity} items)`}</h5>
                        <hr className="d-md-block d-none" />
                        <div className="orders">
                               
                                {orderCard}
                        </div>  
                        
                       <PriceDetails
                       
                       />
                        <button  className="btn  w-100 font-weight-bold" onClick={()=>navigate("/cart")}>MODIFY CART</button>
                    </div> 

                </div>
            </div>
        </Container>
    )
}

export default Receipt