import React ,{useState}from 'react'
// import App from './App';
export default function TextFrom(props) {
const[text,setText]=useState('');
const handelupclick=()=>{
    console.log("Btn clicked");
    let newtext=text.toUpperCase();
    setText(newtext);
    // showalert('Text converted to upper case','success')

}
const handellowclick=()=>{
    console.log("Btn clicked");
    let newtext=text.toLowerCase();
    setText(newtext);
}

const handelcopy=()=>
{
    console.log("Btn clicked");
   var text=document.getElementById("mybox");
   text.select();
   text.setSelectionRange(0,9999);
   document.getSelection().removeAllRanges();
   navigator.clipboard.writeText(text.value);
    // setText(newtext);
}

const removeExtraspaces=()=>{

let newtext=text.split(/[ ]+/);
setText(newtext.join(" "));


}


const clearText=()=>
{
    console.log("Btn clicked");
    let newtext='';
    setText(newtext);
}

const handelOnchange=(event)=>
{
    
    console.log("Onchange");
    setText(event.target.value);


}
// setText("Next");

  return (
   <>

   <div className="container">
<h1 className="mb-3"style={{color:props.mode==='dark'?'white':'black'}}  >{props.heading} </h1>
<div className="mb-3">
  <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?' #d0cece':'white',color:props.mode==='dark'?'#1c2491':'black'}} onChange={handelOnchange} id="mybox" rows="8"></textarea>
</div>
   <button className="btn btn-primary mx-1 "     disabled={text.length===0} onClick={handelupclick}>Convert to upper case</button>
   <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handellowclick}>Convert to lower case</button>
   <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={clearText}>Clear Text</button>
   <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handelcopy}>Copy Text</button>
   <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={removeExtraspaces}>Remove Extra Spaces</button>
</div>
   
   <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}} >{props.heading} 
<h1>Your text sumurry</h1>
<p> {text.split(" ").filter(element=>{return element.length!==0}).length} words and {text.length} charecters</p>
<p>{0.008*text.split(" ").length} minutes read</p>
<h2>Privew</h2>
<p>{text.length>0?text:"Enter your text to privew it here"}</p>
   </div>
   
   </>
  )
}
