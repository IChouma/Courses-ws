import React from 'react'
import { Fragment } from 'react';
import './about.css'
import logo from "./logo.png"
function About() {
  return (
   <Fragment>
<section id="about">
    <div className='section-w'>
    <img src={logo} alt="" />
    <div className='about'>
        <div>
            <span>about</span>
            <img src={logo} alt="" />
        </div>
        <p>Today, given the economic and labor market conditions, the best and least risky way to invest is to invest in personal assets and skills.
UI / UX Product Design Course covers all aspects of product design from product thinking and design to user-centric research and product research and business vision and digital marketing to product designers and creators, designing the end-user experience and interface of the product and how to deliver it. Includes.
In this course, we have tried to use the presence of successful and experienced experts in each of the above mentioned areas to engage in more specialized interaction as a mentor. This course is project-oriented and participants in several product teams are working to improve their product quality. And then start competing with other teams in a healthy, learning-filled competition.
Finally, after the final exam and competition, participants will be awarded a Certificate of Product Factory certification.</p>
    </div>
    </div>
</section>
   </Fragment>
  )
}

export default About