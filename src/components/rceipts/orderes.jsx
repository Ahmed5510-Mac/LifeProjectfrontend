import React from 'react'
import product from "../../assets/2.png";
function Orderes() {
  return (
    <div className="order d-flex justify-content-between  ">
    <div className="image-pro">
        <img src={product} alt="" style={{"width":"50px"}} />
    </div>
    <div className="details">
        <p className='title-pro'>Lorem ipsum dolor sit amet.</p>
         <p className='text-warning salary-pro'>EGP 84.25</p>
         <p className=' qty-pro'>Qty:1</p>
    </div>
</div>
      
  )
}

export default Orderes