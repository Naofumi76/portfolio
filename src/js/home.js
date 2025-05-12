export default function () {
	// Get current hour for personalized greeting
	const hour = new Date().getHours();
	let greeting;
	
	if (hour < 12) {
		greeting = "Good morning";
	} else if (hour < 18) {
		greeting = "Good afternoon";
	} else {
		greeting = "Good evening";
	}
	
	return `
	<div id="home">
		<div class="hero">
			<div class="animated-background">
				<div class="shape shape1"></div>
				<div class="shape shape2"></div>
				<div class="shape shape3"></div>
			</div>
			
			<div class="home-content">
				<div class="profile-section">
					
					<div class="greeting-text">
						<h1><span class="time-greeting">${greeting}!</span> I'm Nathan</h1>
						<p class="tagline">Full-Stack Developer & Technology Enthusiast</p>
					</div>
				</div>
				
				
				<div class="skills-preview">
					<h3>My Tech Playground</h3>
					<div class="skills-pills">
						<span class="skill-pill">Python</span>
						<span class="skill-pill">Golang</span>
						<span class="skill-pill">JavaScript</span>
						<span class="skill-pill">SQL</span>
						<span class="skill-pill">GraphQL</span>
						<span class="skill-pill">Rust</span>
					</div>
				</div>
				
				<div class="quick-intro">
					<p>From creating dynamic web applications to diving into backend systems, I enjoy tackling challenges that push my limits and expand my knowledge.</p>
					<p>Currently studying at Zone01 Rouen and working on projects that connect people and simplify complex problems.</p>
				</div>
				
			</div>
		</div>
	</div>
	
	`
}