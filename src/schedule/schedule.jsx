import React from 'react';
import "./schedule.css";
import facebook from "../media/stwitter.png";
import instagram from "../media/facebook.png";
import twitter from "../media/instagram.png";

function Schedule() {
  return (
  <section id="shedule">
    <div className="section-w">
        <h1>Schedule</h1>
        <div className="courseTime">
            <div className="s-e-course">
                <h3>Start course</h3>
                <div>

                <span></span>
                <p>------------------------</p>
                <span></span>
                </div>
                <h3>End course</h3>
            </div>
                <div className="date">
                    <h1>2019      /      11      /    11</h1>
                    <h1>2019      /      08      /    11</h1>
                </div>
                <div className="leftTime">
                    <span>11</span>
                    <p>Days left to sign up</p>
                    <button>Register</button>
                </div>
            </div>
            <footer>
                <div className="s-media">
                <a href={"#"}><img src={facebook} alt="" /></a>
                <a href={"#"}><img src={twitter} alt="" /></a>
                <a href={"#"}><img src={instagram} alt="" /></a>
                </div>
                <div className="f-logo">Product <br /> Factory</div>
                <span>Contact Number : 0212-661771140</span>
            </footer>
    </div>
  </section>
  )
}

export default Schedule
