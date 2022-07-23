import React, { Fragment } from 'react'
import "./header.css";
import office from "../media/office.jpg";

function Header() {
  return (
<Fragment>
    <section id="header">
    <header >
        <nav>
        <a href={"#"} className='logo'><img  alt="" />Prodyuct <br/> Factory</a>
        <ul id='nav'>
            <li><a href={"#header"}>Projects</a></li>
            <li><a href={"#header"}>Partners</a></li>
            <li><a href={"#header"}>FAQ</a></li>
            <li><a href={"#header"}>Masters</a></li>
            <li><a href={"#header"}>Classes</a></li>
            <li><a href={"#header"}>Course Experience</a></li>
            <li><a href={"#header"}>About us</a></li>
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
            <a href={"#header"}>start Register</a>
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
