import React from 'react'
import tools from "../../assets/tools1.png"
import imgmenue from "../../assets/mega1.png"
import logo from "../../assets/Logo1.png"
import units from "../../assets/units.png"
import draugs from "../../assets/2.png"
import News from "../../assets/4.png"
import other from "../../assets/denta1.png"
import mosh from "../../assets/6.png"
import {NavLink, useNavigate} from "react-router-dom"
import { useSelector,useDispatch } from 'react-redux'
import { reset,logout } from '../../store/auth/authSlice'
import "./Navbar.css"


export default function Navbar() {
  const counter = useSelector((state)=>state.cart.counterValue)
 const navigate= useNavigate()
 const dispatch= useDispatch()
 const {user} = useSelector((state)=>state.auth)

//  const [className, setclassName] = useState('nav-transparent');


 window.onscroll = function () {
   let myNav = document.getElementById('navBar');
   if (window.scrollY === 0) {
      myNav.classList.remove('nav-color')
      myNav.classList.remove('navbar-shrink')
    } else {
      myNav.classList.add('nav-color')
      myNav.classList.add('navbar-shrink')
    }
 };



 const onLogout=()=>{
    dispatch(logout())
    dispatch(reset())
    navigate('/')
 }

  return (
    <nav className="navbar container-col-md fixed-top navbar-expand-lg" id="navBar">
      <div className="container-fluid">
        <NavLink className="Cnavbar-brand" to="/">
          <img className='w-50 d-sm-w-25'  src={logo} alt=""/>
        </NavLink>
        {/* =====element will visable in mobile screen===== */}
        <input className='form-control  mobilesearch  w-50 d-lg-mx-auto ' placeholder='search' type="text" />
        <div className="iconmobile">
        <NavLink to="/register" className="btn  rounded-circle bg-white"> <span  className="fa-solid fa-user text-dark"></span> </NavLink>
          <NavLink to="/cart" className="btn mx-2  rounded-circle bg-white"> <span className="fa-solid fa-cart-shopping text-dark position-relative"><span className="position-absolute bg-danger text-light rounded-circle px-2 py-1">{counter}</span></span> </NavLink>
          </div>
          {/* ----navbar------ */}
        <button className="navbar-toggler btntoggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link p-lg-3 active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link p-lg-3"  to="/about">About Us</NavLink>
            </li>
            <li className="nav-item Categories position-relative">
              <NavLink className="nav-link  p-lg-3" to="/ptoducts">Categories</NavLink>
                {/*----------------------- megamenue ------------------- */}
              <div className="megMenue position-absolute">
                {/*----- megamenue image ------ */}
                <div className="megimag">
                  <img src={imgmenue} alt="" />
                </div>
                {/*----- megamenue links ------ */}
                <div className="megaLinks">
                <ul className="  mb-2 mb-lg-0">
                  <li className="nav-item d-flex   align-items-center">
                    <img  className="imageWidth" src={tools} alt="" />
                    <NavLink className="nav-link p-lg-3  active" aria-current="page" to="/tools">Tools</NavLink>
                  </li>
                  <li className="nav-item d-flex  align-items-center">
                  <img  className="imageWidth" src={units} alt="" />
                    <NavLink className="nav-link p-lg-3 active" aria-current="page" to="/units">Units</NavLink>
                  </li>
                  <li className="nav-item d-flex  align-items-center">
                  <img  className="imageWidth" src={draugs} alt="" />
                    <NavLink className="nav-link p-lg-3 active" aria-current="page" to="/drugs">Drugs</NavLink>
                  </li>
                </ul>
                <ul>
                <li className="nav-item d-flex  align-items-center">
                  <img  className="imageWidth" src={News} alt="" />
                    <NavLink className="nav-link p-lg-3 active" aria-current="page" to="/news">News</NavLink>
                  </li>
                  <li className="nav-item d-flex  align-items-center">
                  <img  className="imageWidth" src={other} alt="" />
                    <NavLink className="nav-link p-lg-3 active" aria-current="page" to="/others">other</NavLink>
                  </li>
                </ul>
                </div>
              </div>
             
            </li>
          </ul>
          <div className="search ps-3 pe-3 d-none d-lg-block" id="search"> 
            <div className="icon" id="icon" onClick={()=>{document.getElementById("search").classList.toggle('active')}} ></div>
            <div className="input">
              <input type="text" placeholder="search" id="input-search"/>
              <i className="fa-solid fa-delete-left" id="clear" onClick={()=>document.getElementById('input-search').value = ''}></i>
            </div>
          </div>
          <div className="iconLscreen">
           <NavLink to="/register" className="btn   rounded-circle bg-white"> <span  className="fa-solid fa-user text-dark"></span> </NavLink>
            <NavLink to="/cart" className="btn mx-2 rounded-circle bg-white"> <span className="fa-solid fa-cart-shopping text-dark position-relative"><span className="position-absolute bg-danger text-light rounded-circle px-2 py-1">{counter}</span></span> </NavLink>
            {user?(
              <button className='btn' onClick={onLogout}><i className="fa-solid fa-arrow-right-from-bracket"></i></button>
            ):(<>
            
            </>)}
          
          </div>
        </div>
      </div>
    </nav> 
   
  )
}
