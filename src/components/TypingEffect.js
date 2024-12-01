import React, { useState, useEffect, useRef } from 'react';
import './TypingEffect.css'; // Import the CSS file
import aiVideo from '../images/AIDemo.mp4'; 
import animationDemo from '../images/animationDemo.mp4'; 
import presetVideo from '../images/presetDemo.mp4';
import metic from '../images/metic.mp4';
import codeGen from '../images/codeGen.mp4';
const options = ['Faster', 'Intuitively', 'Without Writing Code', 'With Precision']; // Phrases to iterate


const TypingEffect = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const charIndexRef = useRef(0); // Keep track of the character index
  const currentOptionRef = useRef(options[0]); // To keep track of the current word

  useEffect(() => {
    currentOptionRef.current = options[index]; // Update the current option

    const typingInterval = setInterval(() => {
      const currentOption = currentOptionRef.current;
      const charIndex = charIndexRef.current;

      if (charIndex < currentOption.length) {
        setText((prevText) => prevText + currentOption[charIndex]); // Add one character at a time
        charIndexRef.current++; // Increment the char index
      } else {
        clearInterval(typingInterval); // Stop typing when the full word is typed

        // After typing, wait and then move to the next word
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % options.length); // Loop through options
          setText(''); // Clear the text for the next word
          charIndexRef.current = 0; // Reset char index for the next word
        }, 700); // Wait before starting the next word
      }
    }, 85); // Speed of typing effect (100ms per character)

    // Cleanup interval on component unmount
    return () => clearInterval(typingInterval);
  }, [index]); // Re-run the effect when `index` changes

  return (
    <div className="typing-effect-container">
      <h1 className="headline">
        Style Websites <strong className="typed-text">{text}</strong> 
      </h1>
      <p className="description">A feature-rich Chrome extension designed to help developers style their websites</p>

      <div className="feature"
	    data-aos="fade-right"
		data-aos-anchor-placement="bottom-bottom"
		data-aos-easing="linear"
		data-aos-repeat="true">
	  
        <div>
          <h1>AI Styler</h1>
          <p className="feature-description">Simply describe your desired styles, click the element you want to style, and watch our AI generate and display the CSS on page.</p>
        </div>
        <div>
          <video id="video" src={aiVideo} autoPlay loop muted></video>
        </div>
      </div>

      <div className="feature"
	    data-aos="fade-left"
		data-aos-anchor-placement="bottom-bottom"
		data-aos-easing="linear"
		data-aos-repeat="true">
        <div>
          <video id="video" src={codeGen} autoPlay loop muted></video>
        </div>
        <div>
          <h1>CSS Generator</h1>
          <p className="feature-description">You handle the look, we handle the code. Our intelligent code generator ensures that you can quickly merge changes to your project.</p>
        </div>
      </div>

      <div className="feature"
	    data-aos="fade-right"
		data-aos-anchor-placement="bottom-bottom"
		data-aos-easing="linear"
		data-aos-repeat="true">

        <div>
          <h1>Animation</h1>
          <p className="feature-description">Static websites are boring. Create dynamic animation and hover effect styles.</p>
        </div>
        <div>
          <video id="video" src={animationDemo} autoPlay loop muted></video>
        </div>
      </div>

      <div className="feature"
	    data-aos="fade-left"
		data-aos-anchor-placement="bottom-bottom"
		data-aos-easing="linear"
		data-aos-repeat="true">        
		<div>
          <video id="video" src={presetVideo} autoPlay loop muted></video>
        </div>
        <div>
          <h1>Presets</h1>
          <p className="feature-description">Select from a variety of pre-made element styles for your website, including many keyframe effects.</p>
        </div>
      </div>

      <div className="feature"
	    data-aos="fade-right"
		data-aos-anchor-placement="bottom-bottom"
		data-aos-easing="linear"
		data-aos-repeat="true">

        <div>
          <h1>Style Meticulously</h1>
          <p className="feature-description">Fine-tune every aspect of your site's design with precision. Choose your desired element selector.</p>
        </div>
        <div>
          <video id="video" src={metic} autoPlay loop muted></video>
        </div>
      </div>

      <p id="quote">Web Developer - <strong>"A game-changing tool for web developers. This is a must-have. Style better and save time."</strong></p>
    </div>
  );
};

export default TypingEffect;
