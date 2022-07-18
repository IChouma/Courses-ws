import './App.css';
import Header from './header/header';
import React,{Fragment} from "react"
import About from './about/about';
import Exper from './experience/exper';
import Session from './sessions/session';
import Master from './master/master';
import Faq from './faq/faq';
import Course from './course/course';
import Request from './request/request';
import Project from './projects/projects';
import Schedule from './schedule/schedule';

function App(){ 
  return (
 <Fragment>
  <Header/>
  <About/>
  <Exper/>
  <Session/>
  <Master/>
  <Faq/>
  <Course/>
  <Request/>
  <Project/>
  <Schedule/>
 </Fragment>
  );
}

export default App;
