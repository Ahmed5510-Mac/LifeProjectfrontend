import product from "../../assets/2.png";
import "./cart.css"
import { useDispatch, useSelector } from 'react-redux';
import { increment ,decrement} from "../../store/cart/cartSlice";
import { Container } from "@mui/material";
import { NavLink } from 'react-router-dom';
import DeliveryMethod from '../../components/rceipts/DeliveryMethod'

const Cart = () => {
    const counter =  useSelector((data)=>data.cart.counterValue);
   const myCart = useSelector((state) => state.auth.myCart);

   console.log(myCart);


    const dispatch = useDispatch()

    return (
        <Container sx={{marginY:"5%"}}>
            <div className="alert alert-danger w-100 d-none " role="alert">
                Invalid added   
            </div>

            <div className="container-md mob-cart-Container mt-5  ">
                <div className="row">
                    <div className="jumbotron border  col-md-8 shadow p-3 mb-5 bg-white rounde text-capitalize col-sm-12" >
                        <h5>cart({counter})</h5>
                        <hr />
                        {/* --------cart details-------- */}
                        <div className="product-details   mb-1 pb-2">
                        <div className="cart-body d-flex  justify-content-between">
                        <div className="content d-flex">
                            <img  className="cart-ontent-img" src={product} alt="" />
                                    <p className="lead w-100 fw-bold"> This is a simple hero unit, a simple  or information.
                                        <br />
                                        <span className="fw-bold fs-4">size:</span> EU 48
                                    </p>
                         </div>
                            <div className="cart-salary ">
                                <h3 className="">EGP 198.00</h3>
                                <del className="">EGP 400.00</del>
                                <span className="decount bg-warning p-1 rounded ms-2"> -35%</span>
                                </div>
                        </div>
                                {/* cart Footer */}
                        <div className="cartfooter d-flex justify-content-between align-items-center mt-2">
                            <span className="text-danger mt-2 ms-2" role="button">
                                <i className="fa-solid fa-trash-can  ps-2"> </i> remove
                            </span>
                            <span className="d-flex align-items-center">
                                <i  className="fa-solid fa-circle-minus fs-2" role="button" onClick={()=> counter == 0 ? "" :  dispatch(decrement(counter))}></i> 
                                    <span className="p-3">{counter}</span>
                                <i  className="fa-solid fa-circle-plus fs-2" role="button" onClick={()=>dispatch(increment(counter))}></i> 
                               
                            </span>
                        </div>
                        </div>
                    </div>
                    {/* ---------cart summry----------- */}
                    <div className="cart-samary ms-2 border col-md-3 mt-2 mt-md-0 shadow p-3 mb-5 bg-white rounde text-capitalize h-50 ">
                        <h5 className="d-md-block d-none"> CART Summary</h5>
                        <hr className="d-md-block d-none"/>
                        <div className="tootal d-flex justify-content-between h-50 flex-sm-column">
                            <p className="d-none d-md-block"> subtootal</p>
                            <h4 className="d-md-block d-none "> EGP 198.00</h4>
                        </div>
                        <NavLink to="/receipts" className="btn btn-primary w-100 "> Checkout EGP 198.00 </NavLink>
                    </div>
                </div>
            </div>
              <DeliveryMethod/>
        </Container>
    );
}

export default Cart;