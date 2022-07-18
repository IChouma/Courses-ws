import React from 'react';
import "./request.css"

function Request() {
  return (
   <section id="request">
<div className="section-w">
    <div className="form">
        <h2>Request a list of headings</h2>
        <p>Please enter your email address to receive course titles, the topics will be emailed to you.</p>
        <input type="email" defaultValue={"iiicii@outlook.com"}/>
        <span>Your email has been successfully registered, headlines will be sent to you soon.</span>
    </div>
    <div className="img">
        <img src="" alt="" />
    </div>
</div>
   </section>
  )
}

export default Request