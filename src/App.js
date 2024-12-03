import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './images/quickStyleLogo.png';

import Description from './components/description';
import Pricing from './components/pricing';
import AboutDeveloper from './components/AboutDeveloper';


import image1 from './images/slide1.png';
import image2 from './images/slide2.png';
import image3 from './images/slide3.png';
import image4 from './images/slide4.png';
import image5 from './images/slide5.png';
import TypingEffect from './components/TypingEffect';
import AOS from 'aos';
import 'aos/dist/aos.css';



const App = () => {
  const [isLogoVisible, setLogoVisible] = useState(true);
  const toggleContent = () => setLogoVisible((prevState) => !prevState);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    AOS.init();
  }, []);
  
  const contentItems = [
    <div className="contentItem" key="item1">
      <h1 id="slogan">
        <strong>Appearance</strong> Means Everything
      </h1>
      <p id="paragraph">Style your websites faster with QuickStyle.</p>
      <ul>
        <li data-aos="fade-right" data-aos-delay="300">🌐 Style directly in the browser</li>
        <li data-aos="fade-right" data-aos-delay="350">🖌️ Completely customize website layouts</li>
        <li data-aos="fade-right" data-aos-delay="400">🤖 Get AI-generated styles</li>
        <li data-aos="fade-right" data-aos-delay="450">✍️ Don't write a single line of CSS</li>
        <li data-aos="fade-right" data-aos-delay="500">⚡ Merge styles and update your website in seconds</li>
      </ul>
    </div>,
    <div className="contentItem" key="item2" data-aos="fade-right" data-aos-delay="500">
      <img src={image1} alt="slide 1" />
    </div>,
    <div className="contentItem" key="item3">
      <img src={image2} alt="slide 2" />
    </div>,
    <div className="contentItem" key="item4">
      <img src={image3} alt="slide 3" />
    </div>,
    <div className="contentItem" key="item5">
      <img src={image4} alt="slide 4" />
    </div>,
    <div className="contentItem" key="item6">
      <img src={image5} alt="slide 5" />
    </div>,
  ];

  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? contentItems.length - 1 : prevIndex - 1));
    } else if (direction === 'right') {
      setCurrentIndex((prevIndex) => (prevIndex === contentItems.length - 1 ? 0 : prevIndex + 1));
    }
  };

  return (
    <div className="container">
      <div id="header">
        <p id="versionText">Version 1.40</p>
        <a
          id="addExtLink"
          href="https://chromewebstore.google.com/detail/quickstyle/ligohbicjljofdplecggjoeancoonlhc?hl=en&authuser=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button id="add-extension-btn">Add Extension</button>
        </a>
      </div>

      <div id="panels">
        <div className="left-panel">
          <div className="content">
            <div className={`top-content ${isLogoVisible ? 'visible' : 'hidden'}`}>
              <img src={logo} alt="QuickStyle Logo" id="logo" />
              <h1 className="business-name" data-aos="fade-in" data-aos-delay="1500" data-aos-duration="1500">QuickStyle</h1>
            </div>

            <div className={`bottom-content ${!isLogoVisible ? 'visible' : 'hidden'}`}>
              <Description />
            </div>
          </div>

          <div className={`arrow ${!isLogoVisible ? 'rotate' : ''}`} onClick={toggleContent}>
            ↓
          </div>
        </div>

        <div id="rightPanel">
          <div id="rightPanelContent">
            <div className="arrow arrow-left" onClick={() => handleArrowClick('left')}>
              ←
            </div>
            <div id="contentWrapper">
              <div id="contentContainer" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {contentItems}
              </div>
            </div>
            <div className="arrow arrow-right" onClick={() => handleArrowClick('right')}>
              →
            </div>
          </div>
        </div>
      </div>

      <TypingEffect />
      <h1 id="pricingTitle" className="pricing">
        Pricing
      </h1>
      <Pricing />
      <AboutDeveloper />
    </div>
  );
};

export default App;
