import React from "react";
import './description.css';

import slide1 from '../images/slide1.png';
import slide2 from '../images/slide2.png';
import slide3 from '../images/slide3.png';
import slide4 from '../images/slide4.png';

export default function Description() {
    return (
        <div id='descriptionComponent'>
            
            <div id='tableDiv'>
              <h2>Styling Properties</h2>

                <table id='featuresTable'>
                    <tr>
                        <th>Color</th>
                        <td>
                            <ul className="descriptionUl">
                                <li>Text</li>
                                <li>Background</li>
                                <li>Gradient</li>
                            </ul>
                        </td>
                        <th>Text</th>
                        <td>
                            <ul className="descriptionUl">
                                <li>Font</li>
                                <li>Size</li>
                                <li>Weight</li>
                            </ul>
                        </td>
                        <th>Sizing</th>
                        <td>
                            <ul className="descriptionUl">
                                <li>Width</li>
                                <li>Height</li>
                                <li>Margin</li>
                                <li>Padding</li>
                                <li>Position</li>
                            </ul>
                        </td>
                        <th>Flexbox</th>
                        <td>
                            <ul className="descriptionUl">
                                <li>Direction</li>
                                <li>Justify Content</li>
                                <li>Align Items</li>
                            </ul>
                        </td>
                        <th>Hover</th>
                        <td>
                            <ul className="descriptionUl">
                                <li>Time</li>
                                <li>Timing Function</li>
                                <li>Transformation</li>
                            </ul>
                        </td>
                        <th>Border</th>
                        <td>
                            <ul className="descriptionUl">
                                <li>Side</li>
                                <li>Width</li>
                                <li>Style</li>
                                <li>Color</li>
                                <li>Radius</li>
                            </ul>
                        </td>
                    </tr>
                </table>
            </div>

            <div id='imagesDiv' className='imageGrid'>
                <img src={slide1} alt="Slide 1" className="featureImage" />
                <img src={slide2} alt="Slide 2" className="featureImage" />
                <img src={slide3} alt="Slide 3" className="featureImage" />
                <img src={slide4} alt="Slide 4" className="featureImage" />
            </div>
        </div>
    );
}
