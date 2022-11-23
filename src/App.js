import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import Alert from './components/Alert';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './components/About';
import React ,{useState} from 'react';
// import Color from './Color';
function App() {
  const [mode, setmode] = useState('light');
  const [text, settext] = useState('Enable dark mode');
  const [alert, setalert] = useState(null);
  
  const showalert=(massage,type)=>{
setalert({
msg:massage,
type:type
})

  }



  




  const[mystyle,setstyle]=useState({
color:'black',
  })
  const toggelmode=()=>{
    
if(mode==='light'){

setmode('dark');
document.body.style.backgroundColor='rgb(19 41 63)';
settext("Enable light mode")
setstyle({
  color:'white',
})
showalert("dark mode has ben enabled","success");

document.title='TextUtils-darkmode';

}
else{

setmode('light');
document.body.style.backgroundColor='white';
showalert("light mode has ben enabled","success");

settext("Enable dark mode")
setstyle({
  color:'black',
})

document.title='TextUtils-darkmode';

}

  }


  return (


    <>
    {/* <BrowserRouter> */}
  
    
   <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode}  togglemode={toggelmode} text={text}  mystyle={mystyle}/>
 

     <Alert    alert={alert}/>
     <div className="container">


{/* <Routes> */}
{/* <Route  exact path='/' element={<TextFrom  heading="Enter the text to analyze" my-3  mode={mode}  />}/> */}

{/* my-3 means margin y three */}
{/* <Route exact path='/about' element={<About/> }/> */}

<TextFrom  heading="Enter the text to analyze" my-3  mode={mode}  />

{/* </Routes> */}

   

     </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;

