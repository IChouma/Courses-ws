import React from 'react';
import "./schedule.css";

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
                <div className="s-media"></div>
                <div className="f-logo"></div>
                <div></div>
            </footer>
    </div>
  </section>
  )
}

export default Schedule
