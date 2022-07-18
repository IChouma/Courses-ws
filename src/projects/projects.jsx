import React from 'react';
import "./project.css";

function Project() {
  return (
   <section id="project">
<div className="section-w">
    <h1>Projects</h1>
    <div className="projects">
    <div className="project">
        <h2>Design To Do List app</h2>
        <p>The previous student design project was the To Do List application 
            product factory, The counter examples are the result of 
            the efforts of the students and their teamwork in the first course.</p>
        <span>- Experience teamwork in a real product team and a collaborative effort for a common goal.</span>
        <span>- Survey real users and needs assessment and find the most suitable solution to their problems.</span>
        <span>- Design experience from notebooks to user interface design software.</span>
        <strong>4/15</strong>
    </div>
    <div className='project-right' >
        <img src="" alt="" className="img"/>
        <div className="pagin">
            <span>&lt;</span>
            <span>&gt;</span>
        </div>
    </div>
</div>
</div>
   </section>
  )
}

export default Project