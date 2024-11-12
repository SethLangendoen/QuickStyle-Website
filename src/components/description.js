import React from "react";
import './description.css';

export default function Description(){
	
	
	
	return(
		<div id = 'descriptionComponent'>
<table id = 'featuresTable'>
  {/* <tr>
    <th>Color</th>
    <th>Flexbox</th>
    <th>Hover</th>
    <th>Border</th>
  </tr> */}
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
	)
}