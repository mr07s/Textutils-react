import React from 'react'
import './Login.css'
function Login(props) {
  return (
    <>
<div className="Container" style={{backgroundColor:props.mode==='dark'?'white':'rgb(19,41,63)'}}>
<div className="innerContainer" style={{backgroundColor:props.mode==='dark'?'white':'white' ,color:props.mode==='dark'?'black':'black'}}>
<div className="Main">

<div className='headline'>SINGUP-TEXTUTILS</div>
</div>


<strong >Name</strong>
<input className='Name' style={{backgroundColor:props.mode==='dark'?'rgb(19,41,63)':'white',color:props.mode==='dark'?'white':'white'}}/>
<strong>Email</strong>
<input className='Email'/>
<strong>Password</strong>
<input className='Password'/>
<strong>Conform-Password</strong>
<input className='CPassword'/>


<button type="submit" className= "b">Submit</button>

</div>




</div>







    </>
  )
}

export default Login