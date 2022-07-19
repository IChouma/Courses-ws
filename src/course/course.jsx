import React from 'react';
import "./course.css";
import valaid from "../media/valaid.png";

function Course() {
  return (
   <section id="course">
    <div className="section-w">
        <h1>Course fee</h1>
        <div className="course">
            <div className='particip'>
              <h2>What will be our achievements by participating in this course?</h2>
              <div><img src={valaid} alt="" /><p>Learn the requirements of a product designer from experienced professionals in the field.</p></div>
              <div><img src={valaid} alt="" /><p>Learn the requirements of a product designer from experienced professionals in the field.</p></div>
              <div><img src={valaid} alt="" /><p>Learn the requirements of a product designer from experienced professionals in the field.</p></div>
              <div><img src={valaid} alt="" /><p>Learn the requirements of a product designer from experienced professionals in the field.</p></div>
            </div>
            <div className='toman'>
              <h2> 4,000,000 Toman</h2>
              <h1>2,300,000 Toman</h1>
              <p>Possibility to pay periodic installment fee.</p>
              <button>register</button>
            </div>
        </div>
        <span>Possibility of refund prior to the third session if the course quality is not satisfied.</span>
    </div>
   </section>
  )
}

export default Course