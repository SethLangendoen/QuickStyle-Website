// src/App.js
import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css'; // Custom CSS for styles
import logo from './images/quickStyleLogo.png';
import style0 from './images/style0.jpeg';
import style1 from './images/style1.jpeg';
import style2 from './images/style2.jpeg';
import Description from './components/description';
import Pricing from './components/pricing';






const images = [style0, style1, style2]; // Your images array

const App = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  // Slider settings




//   <Slider {...sliderSettings}>

//   <div className="content-section">
//     <img src={logo} alt="QuickStyle Logo" id="logo" />
//     <h1 className="business-name">QuickStyle</h1>
//   </div>

//   <div className="content-section">
//     <h2>Features</h2>
//     <p>1. grid mode: </p>
//     <p style={{ border: '3px dashed green' }} >visualize containers and multi-select elements by their id, classname or parent container for faster styling.</p>
//     {/* <img src = {gridMode} alt = 'Grid Mode'></img>   */}
//     <p>2. Hover effects: </p>
//     <p id = 'pHover'>Apply hovering effects to enhance user experience. Choose from scale, translate, scew and rotate animations, with customizable timing. </p>
//     {/* <img src = {hoverEffects} alt = 'Hover Effects'></img>   */}
//     <p>3. Merge Stylesheets: </p>
//     <p>Paste your previous stylesheet into our extension and we generate an updated stylesheet that incorporates the changes made.</p>
//     {/* <img src = {mergeStyles} alt = 'Merge stylesheets'></img>   */}
//   </div>


//   <div className="content-section">
//     <h2>About</h2>
//     <p>Designed specifically for styling with CSS for websites, QuickStyle allows you to visualize your layouts in real time without slow tools.</p>
//   </div>
//   <div className="content-section">
//     <h2>Benefits</h2>
//     <p>Quickstyle tailors to many demographics. This tool is great for new programmers learning css, freelancers , entreprenuers and   </p>
//     <p>Many people write CSS for years and still can't center a div. This tool directly shows how style inputs affect element positioning and reinforces it by pasting the code in the overlay.</p>
//   </div>
// </Slider>

  return (
    <div className="container">

      <div id = 'panels'>

        <div className="left-panel">
          <img src={logo} alt="QuickStyle Logo" id="logo" />
          <h1 className="business-name">QuickStyle</h1>
          <div id='context'></div>
        </div>

        <div id='rightPanel'>
          <div id = 'header'>
            <p id = 'versionText'>Version 1.1 Beta</p>
            <a id = 'addExtLink' href="https://chromewebstore.google.com/detail/quickstyle/ligohbicjljofdplecggjoeancoonlhc?hl=en&authuser=0" target="_blank" rel="noopener noreferrer">
                <button id="add-extension-btn">Add Extension</button>
            </a>
          </div>
          <h1 id='slogan'>
            Your Site <strong>Appearance</strong> Means Everything
          </h1>
          <p id='paragraph'>Style your website in minutes with QuickStyle.</p>
          <ul>
            <li>Style directly in the browser</li>
            <li>Completely customize your layouts</li>
            <li>Don't write a single line of CSS</li>
            <li>Merge styles and upate your website in seconds.</li>
          </ul>
          {/* <p id = 'price'>
            Beta <strong> lifetime-access </strong> sale:
            <span className="full-cost">$79.95</span> 
            <span className="beta-cost">${49.99}</span> 
          </p> */}

          <div className="image-stack">
            <TransitionGroup>
              {images.map((src, idx) => (
                <CSSTransition
                  key={idx}
                  classNames="fade"
                  timeout={0}
                >
                  <img
                    src={src}
                    alt={`Style ${idx + 1}`}
                    className={`fade-image ${index === idx ? 'show' : 'hide'}`}
                  />
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
        </div>

      </div>
      
      <Description />
      <Pricing />

    </div>
  );
};

export default App;
