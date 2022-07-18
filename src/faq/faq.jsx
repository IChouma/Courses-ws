import React from 'react';
import "./faq.css"

function Faq() {
  return (
   <section id="faq">
    <div className="section-w">
        <h1>Frequently Asked Questions</h1>
        <div className="questions">
            <div className="question">
                <p>Does this course need any special requirements?</p>
                <span>+</span>
            </div>
            <div className="question">
                <p>Who are the audiences of the product design period of the product factory?</p>
                <span>+</span>
            </div>
            <div className="question">
                <p>Is it possible to pay by installments?</p>
                <span>+</span>
            </div>
            <div className="question">
                <p>Can I start an internship after I finish the course?</p>
                <span>+</span>
            </div>
            <div className="question">
                <p>What should I do after I finish the course?</p>
                <span>+</span>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Faq