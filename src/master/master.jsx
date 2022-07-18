import React, { useState } from 'react';
import "./master.css"

function Master() {
   const state={
        masters:[
        {img:null,h3:"Kianoosh Keyghobadi",h4:"Kianoosh Keyghobadi"},
        {img:null,h3:"Kianoosh Keyghobadi",h4:"Kianoosh Keyghobadi"},
        {img:null,h3:"Kianoosh Keyghobadi",h4:"Kianoosh Keyghobadi"},
        {img:null,h3:"Kianoosh Keyghobadi",h4:"Kianoosh Keyghobadi"},
        {img:null,h3:"Kianoosh Keyghobadi",h4:"Kianoosh Keyghobadi"},
        {img:null,h3:"Kianoosh Keyghobadi",h4:"Kianoosh Keyghobadi"},
        {img:null,h3:"Kianoosh Keyghobadi",h4:"Kianoosh Keyghobadi"},
        {img:null,h3:"Kianoosh Keyghobadi",h4:"Kianoosh Keyghobadi"},
        {img:null,h3:"Kianoosh Keyghobadi",h4:"Kianoosh Keyghobadi"},
        {img:null,h3:"Kianoosh Keyghobadi",h4:"Kianoosh Keyghobadi"},
       ]
   };
    console.log(state);
    const master=state.masters.map((master)=>{
        return(
          <div key={Math.random()} className="master">
                <img src="" alt="" />
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