// import { Parallax, Background } from 'react-parallax';
// import App from './App';
import React from 'react';
import './LandingPage.css';
import HeroPic from './img/landingpage.jpeg';

//Need to put some widgets over the background image, lots of styling left here.
const LandingPage = React.createClass({
  render() {
      return (
        <img id="heropic" src={HeroPic} />
      )
    }
  });

export default LandingPage
