import React from "react";
import { Container } from "@mui/material";
import ShipmentDetails from "../../components/rceipts/ShipmentDetails"
import PriceDetails from "../../components/rceipts/price-details"
function DeliveryMethod() {
    
  return (
    <Container sx={{ marginY: "10%" }}>
      <div className="container-md mob-cart-Container   ">
        <div className="row">
          <div className="jumbotron border  col-md-8 shadow p-3 mb-5 bg-white rounde text-capitalize col-sm-12">
            <h5> DELIVERY METHOD</h5>
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
