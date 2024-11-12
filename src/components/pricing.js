import React from "react";
import './pricing.css';



export default function Description() {
    return (
		<div id = 'pricingContainer'>
			<h2>Pricing</h2>

			<div class="pricing-container">
				<div class="pricing-card">
					<h2>Free Version</h2>
					<p>Test our limited version during Beta</p>
					<div class="price">
						<del>$9.99</del> Free <span>CAD</span>
					</div>
					<ul>
						<li>&#10003; Basic Styling Tools</li>
						<li>&#10003; Color Customization</li>
						<li>&#10003; Text Styling</li>
						<li>&#10003; Sizing Options</li>
						<li>&#10003; Flexbox Layout (Basic)</li>
						<li class="unavailable">&#10060; Flexbox Layout (Advanced)</li>
						<li class="unavailable">&#10060; Hover Effects Customization</li>
						<li class="unavailable">&#10060; Border Styling Options</li>
						<li class="unavailable">&#10060; Merge Multiple Styles</li>
						<li class="unavailable">&#10060; Priority Support</li>
						<li class="unavailable">&#10060; Early Access to New Features</li>
					</ul>
					<a id = 'addExtLink' href="https://chromewebstore.google.com/detail/quickstyle/ligohbicjljofdplecggjoeancoonlhc?hl=en&authuser=0" target="_blank" rel="noopener noreferrer">
					<div class="cta" id="continueFree">
					<i class="fas fa-bolt"></i> Download
					</div>
					</a>

					<div class="footer">
						Perfect for basic styling needs!
					</div>
				</div>

				<div class="pricing-card popular">
					<div class="popular-badge">POPULAR</div>
					<h2>Premium Version</h2>
					<p>Lifetime Access + Free Version Updates</p>
					<div class="price">
						<del>$79.99</del> $49.99 <span>CAD</span>
					</div>
					<ul>
						<li>&#10003; Basic Styling Tools</li>
						<li>&#10003; Color Customization</li>
						<li>&#10003; Text Styling</li>
						<li>&#10003; Sizing Options</li>
						<li>&#10003; Flexbox Layout (Basic)</li>
						<li><span class="special-check">&#10003;</span> Flexbox Layout (Advanced)</li>
						<li><span class="special-check">&#10003;</span> Hover Effects Customization</li>
						<li><span class="special-check">&#10003;</span> Border Styling Options</li>
						<li><span class="special-check">&#10003;</span> Merge Multiple Styles</li>
						<li><span class="special-check">&#10003;</span> Priority Support</li>
						<li><span class="special-check">&#10003;</span> Early Access to New Features</li>
					</ul>
					<a id = 'addExtLink' href="https://chromewebstore.google.com/detail/quickstyle/ligohbicjljofdplecggjoeancoonlhc?hl=en&authuser=0" target="_blank" rel="noopener noreferrer">
					<div class="cta" id="getPremium">
						<i class="fas fa-bolt"></i> Get Premium
					</div>
					</a>
					<div class="footer">
						Build with many features!
					</div>
				</div>
			</div>


		</div>
    );
}
