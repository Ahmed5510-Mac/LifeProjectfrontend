import React from 'react'

function PriceDetails() {
  return (
    <div className="price-details">
    <div className="subtotal d-flex justify-content-between my-2">
        <span className=" lable-price">Subtotal</span>
        <span className=" peice">EGP 298.00</span>
    </div>
    <div className="subtotal d-flex justify-content-between my-2">
        <span className=" lable-price">Shipping amount</span>
        <span className=" peice">EGP 79.80</span>
    </div>
    <div className="subtotal d-flex justify-content-between my-2">
        <span className=" lable-price">Delivery Fees</span>
        <span className=" peice"> EGP 68.75</span>
    </div>
    <div className="subtotal d-flex justify-content-between my-2">
        <span className=" lable-price">Subtotal</span>
        <span className=" peice">EGP 298.00</span>
    </div>
    <div className="subtotal d-flex justify-content-between my-2">
        <span className=" lable-price">Shipping Discount</span>
        <span className='text-success peice'> - EGP 39.90</span>
    </div>
    <div className="subtota border-top border-bottom py-2 d-flex justify-content-between my-2">
        <span className=" lable-price">Total</span>
        <span className='font-weight-bold '> EGP 406.65</span>
    </div>
</div>
  )
}

export default PriceDetails