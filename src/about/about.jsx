import React from 'react'
import { Fragment } from 'react';
import './about.css'
import facebook from "../media/btwitter.png";
import instagram from "../media/facebook.png";
import twitter from "../media/instagram.png";
function About() {
  return (
   <Fragment>
<section id="about">
    <div className='section-w'>
    <p>Product Factory</p>
    <div className='about'>
        <div>
            <span>about</span>
            <div>
                <a href={"#"}><img src={facebook} alt="" /></a>
                <a href={"#"}><img src={twitter} alt="" /></a>
                <a href={"#"}><img src={instagram} alt="" /></a>
            </div>
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