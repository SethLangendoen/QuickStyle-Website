import React from "react";
import './description.css';


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
                            <li>bold</li>
                            <li>italic</li>
                            <li>underine</li>
                            <li>text-align</li>

                                <li>Font Family</li>
                                <li>Size</li>
                                <li>Shadow</li>
                            </ul>
                        </td>
                        <th>Position</th>
                        <td>
                            <ul className="descriptionUl">
                                <li>position</li>
                                <li>top</li>
                                <li>left</li>
                                <li>right</li>
                                <li>bottom</li>
                                <li>z-index</li>
                            </ul>
                        </td>
                        <th>Sizing</th>
                        <td>
                            <ul className="descriptionUl">
                                <li>Width</li>
                                <li>Height</li>
                                <li>Margin</li>
                                <li>Padding</li>
                            </ul>
                        </td>
                        <th>Flexbox</th>
                        <td>
                            <ul className="descriptionUl">
                                <li>Flex Direction</li>
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
            {/* <div id='imagesDiv' className='imageGrid'>
                <img src={slide1} alt="Slide 1" className="featureImage" id = 'sl1' />
                <img src={slide2} alt="Slide 2" className="featureImage"id = 'sl2'/>
                <img src={slide3} alt="Slide 3" className="featureImage" id = 'sl3'/>
                <img src={slide4} alt="Slide 4" className="featureImage" id = 'sl4'/>
            </div> */}
        </div>
    );
}
