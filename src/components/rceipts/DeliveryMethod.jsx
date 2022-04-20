import React from "react";
import { Container } from "@mui/material";
import ShipmentDetails from "../../components/rceipts/ShipmentDetails"
import PriceDetails from "../../components/rceipts/price-details"
import { useDispatch, useSelector } from 'react-redux';
import {useEffect}from "react"
import { toggle } from "../../store/receipts/receiptSlice";
import { getUserInfo} from "../../store/receipts/receiptSlice"
function DeliveryMethod() {

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);
  
  console.log(dispatch)

     
    
  return (
    <Container>
      <div className="container-md mob-cart-Container   ">
        <div className="row">
          <div className="jumbotron border w-100 shadow p-3 mb-5 bg-white rounde text-capitalize col-sm-12">
            <div className="title d-flex justify-content-between">
              <h5> DELIVERY METHOD</h5>
              <button className="btn text-warning" onClick={()=>dispatch(toggle())}>modify</button>

            </div>
            <hr />
            <div className="container">
              <h6>Door Delivery</h6>
              <p>
                Delivered between Wednesday 20 Apr and Monday 25 Apr. for EGP
                68.40
              </p>
              <div className="border border-bottom-0 rounded-2 p-2">
                <p className=" border-bottom">SHIPMENT DETAILS</p>
                <ShipmentDetails />
                <ShipmentDetails />
                <PriceDetails />
              </div>

              <button
                type="submit"
                className="btn font-weight-bold-1 w-100 mb-3"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default DeliveryMethod;
