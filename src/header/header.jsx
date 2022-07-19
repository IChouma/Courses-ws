import React, { Fragment } from 'react'
import logo from './logo.png';
import "./header.css";
import office from "../media/office.jpg";

function Header() {
  return (
<Fragment>
    <section id="header">
    <header >
        <nav>
        <a href="" className='logo'><img  alt="" />Prodyuct <br/> Factory</a>
        <ul id='nav'>
            <li><a href="">Projects</a></li>
            <li><a href="">Partners</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Masters</a></li>
            <li><a href="">Classes</a></li>
            <li><a href="">Course Experience</a></li>
            <li><a href="">About us</a></li>
        </ul>
        <div className="register"> register </div>
        </nav>
    </header>
    <div className="intro">
        <div className="left">
            <h1>product design course</h1>
            <h2>product factory</h2>
            <p>Learn how design thinking, user research,
business vision and marketing, and finally designing
and creating real digital products for real users.</p>
            <a href="">start Register</a>
        </div>
        <div className="right">
            <img src={office} alt="" />
        </div>
    </div>
    </section>
</Fragment>
  )
}

export default Header
