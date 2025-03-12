export default function () {
	const backendItems = ['Python', 'Golang', 'SQL', 'SQLite3', 'GraphQL', 'Rust'];
	const frontendItems = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

	// Function to duplicate items for continuous scrolling effect
	const createScrollingList = (items) => {
		const itemsList = items.map(item => `<li>${item}</li>`).join('');
		// Duplicate items to create continuous effect
		return itemsList + itemsList;
	};

	return `
    <div class="skills">
        <h2>Here you can see what I'm most familiar with for development purposes.</h2>
        <br>
        <h3>Back-end</h3>
        <div class="scroll-container">
            <ul class="scrolling-list">
                ${createScrollingList(backendItems)}
            </ul>
        </div>

        <h3>Front-end</h3>
        <div class="scroll-container">
            <ul class="scrolling-list">
                ${createScrollingList(frontendItems)}
            </ul>
        </div>
    </div>
    `;
}
