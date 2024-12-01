import React from "react";
import './pricing.css';



export default function Description() {
    return (
		<div class="pricing-container">
			<div class="pricing-card">
				<h2>Free Version</h2>
				<p>Test our limited version</p>
				<div class="price">
					2000 Tokens
				</div>
				<ul>
					<li>&#10003; Basic Styling Tools</li>
					<li>&#10003; Color Customization</li>
					<li>&#10003; Text Styling</li>
					<li>&#10003; Sizing Options</li>
					<li>&#10003; Flexbox Layout</li>
					<li>&#10003; Hover Effects Customization</li>
					<li>&#10003; Border Styling Options</li>
					<li class="unavailable">&#10060; AI Style Generator</li>
					<li class="unavailable">&#10060; Limited Tokens</li>
					<li class="unavailable">&#10060; Merge Multiple Styles</li>
					<li class="unavailable">&#10060; Priority Support</li>
					<li class="unavailable">&#10060; Early Access to New Features</li>
				</ul>
				<div class="cta" id="continueFree">
					<i class="fas fa-bolt"></i> Continue Free
				</div>
				<div class="footer">
					Perfect for basic styling needs!
				</div>
			</div>
	
			<div class="pricing-card popular">
				<div class="popular-badge">Style With AI</div>
				<h2>Premium Version</h2>
				<p>Unlimited Features + Free Version Updates</p>
				<div class="price">
					<del>$19.99</del> $7.99 <span>/ month</span>
				</div>
				<ul>
					<li>&#10003; Basic Styling Tools</li>
					<li>&#10003; Color Customization</li>
					<li>&#10003; Text Styling</li>
					<li>&#10003; Sizing Options</li>
					<li>&#10003; Flexbox Layout</li>
					<li>&#10003; Hover Effects Customization</li>
					<li>&#10003; Border Styling Options</li>
					<li><span class="special-check">&#10003;</span> AI Style Generator </li>
					<li><span class="special-check">&#10003;</span> Unlimited tokens </li>
					<li><span class="special-check">&#10003;</span> Merge Multiple Styles</li>
					<li><span class="special-check">&#10003;</span> Priority Support</li>
					<li><span class="special-check">&#10003;</span> Early Access to New Features</li>
				</ul>
				<div class="cta" id="getPremium">
					<i class="fas fa-bolt"></i> Get Premium
				</div>
				<div class="footer">
					Build with unlimited features!
				</div>
			</div>
		</div>
    );
}
