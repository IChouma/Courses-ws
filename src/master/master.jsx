import React from 'react';
import "./master.css";
import  f1 from'../media/f1.png'
import  f2 from'../media/f2.png'
import  f3 from'../media/f3.jpg'
import  f4 from'../media/f4.jpg'
import  f5 from'../media/f5.jpg'
import  f6 from'../media/f6.jpg'
import  f7 from'../media/f7.jpg'
import  f8 from'../media/f8.jpg'
import  f9 from'../media/f9.jpg'
import  f10 from'../media/111.jpg'

function Master() {
   const state={
        masters:[
        {img:f1,h3:"Kianoosh Keyghobadi",h4:"Kianoosh Keyghobadi"},
        {img:f2,h3:"Kianoosh Keyghobadi",h4:"Kianoosh Keyghobadi"},
        {img:f3,h3:"Kianoosh Keyghobadi",h4:"Kianoosh Keyghobadi"},
        {img:f4,h3:"Kianoosh Keyghobadi",h4:"Kianoosh Keyghobadi"},
        {img:f5,h3:"Kianoosh Keyghobadi",h4:"Kianoosh Keyghobadi"},
        {img:f6,h3:"Kianoosh Keyghobadi",h4:"Kianoosh Keyghobadi"},
        {img:f7,h3:"Kianoosh Keyghobadi",h4:"Kianoosh Keyghobadi"},
        {img:f8,h3:"Kianoosh Keyghobadi",h4:"Kianoosh Keyghobadi"},
        {img:f9,h3:"Kianoosh Keyghobadi",h4:"Kianoosh Keyghobadi"},
        {img:f10,h3:"Kianoosh Keyghobadi",h4:"Kianoosh Keyghobadi"},
       ]
   };
    console.log(state);
    const master=state.masters.map((master)=>{
        return(
          <div key={Math.random()} className="master">
                <img src={master.img} alt="" />
                <h3>{master.h3}</h3>
                <h4>{master.h4}</h4>
            </div>  
        )
    })
  return (
    <section id="master">
        <div className='section-w'>
            <h1>Masters</h1>
            <div className="masters">

            {master}
            
        </div>
            </div>

    </section>
  )
}

export default Master