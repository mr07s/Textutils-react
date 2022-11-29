import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'
import {Link} from "react-router-dom"
export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
      
      </ul>
    {/* <div className="d-flex">
<div className="bg-primary rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.togglemode('primary')}}></div>
<div className="bg-danger rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.togglemode('danger')}}></div>
<div className="bg-success rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.togglemode('success')}}></div>
<div className="bg-warning rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.togglemode('warning')}}></div>


    </div> */}
     <Link className="nav-link mx-3" to="/lOGIN">LOGIN</Link>
     <Link className="nav-link mx-3" to="/LOGIN">SIGNUP</Link>
   
      <div className={`form-check text-${props.mode==='light'?'dark':'light'}`} >
  <input className="form-check-input" type="checkbox" value="" onClick={()=>{props.togglemode('null')}} style={{cursor:'pointer'}}   id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault" style={props.mystyle}>
   {props.text}
  </label>
</div>
    </div>
  </div>
</nav>
    
    {/* style ={props.mystyle} ia a way and  text-${props.mode==='light'?'dark':'light'} is another way */}
    
    
    </>
  )
}
Navbar.propTypes={title:PropTypes.string,
                  aboutText:PropTypes.string}
Navbar.defaultProps={
title:"Set title here",
aboutText:"Set text here"

}