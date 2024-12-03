import React from 'react';
import './AboutDeveloper.css';  // Make sure to create the CSS file
import selfie from '../images/selfie.png'

export default function AboutDeveloper() {
    return (
        <div className="about-developer-container">
            <div className="profile-container">
                <div className="circle-photo">
                    <img src={selfie} alt="Seth Langendoen" />
                </div>
            </div>
            <div className="content-container">
                <h2>About the Developer</h2>
				<p>
					Hi! I'm <strong>Seth Langendoen</strong>, a software engineering student at <strong>Western University</strong>. I love turning obstacles 
					into opportunities through my programming skills. I believe in the power of technology to simplify complex tasks and enhance 
					efficiency. <strong>QuickStyle</strong> was born from my own challenges and frustrations with styling web projects—spending too much 
					time wrestling with complex CSS rules and trying to quickly visualize new changes and ideas. I wanted to create a tool that not only simplifies the styling process but also helps developers quickly visualize and apply styles to websites, saving time and improving workflows.
				</p>

				<p>
					Feel free to reach out if you have any feedback or suggestions. I'm always eager to hear from fellow developers!
				</p>


				
                <div className="contact-link">
                    <a href="https://github.com/SethLangendoen" target="_blank" rel="noopener noreferrer">GitHub</a>
					<a href="mailto:sethlangendoen1@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
                    <a href="https://www.linkedin.com/in/seth-langendoen-756042269/?trk=opento_sprofile_topcard" target="_blank" rel="noopener noreferrer">LinkedIn</a>
					<a href="https://buymeacoffee.com/sethlangendoen" target="_blank" rel="noopener noreferrer">Donate ❤️</a>

                </div>
            </div>
        </div>
    );
}
