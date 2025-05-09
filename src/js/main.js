// Handle dynamic content logic

// Loads content dynamically depending on the current section
function loadContent(section) {
	const contentContainer = document.getElementById("content-container")

	// Clear the current content
	contentContainer.innerHTML = ""

	switch (section) {
		case "home":
			import('./home.js').then(module => {
                contentContainer.innerHTML = module.default()
            })
			break

		case "about":
			import('./about.js').then(module => {
				contentContainer.innerHTML = module.default()
			})
			break

		case "school":
			import('./school.js').then(module => {
                contentContainer.innerHTML = module.default()
            })
            break
			
		case "skills":
			import('./skills.js').then(module => {
				contentContainer.innerHTML = module.default()
			})
			break

		case "projects":
			import('./projects.js').then(module => {
				contentContainer.innerHTML = module.default()
			})
			break
			
		case "contact":
			import('./contact.js').then(module => {
				contentContainer.innerHTML = module.default()
			})
			break

		default:
			contentContainer.innerHTML = "<p>Section not found, please select a valid section.</p>"
	}
}

// Event listener to handle clicks on navigation links
document.querySelectorAll('a[data-section]').forEach(link => {
	link.addEventListener('click', (e) => {
		e.preventDefault()
		const section = e.target.getAttribute('data-section')
		loadContent(section)
	})
})

// Load the home page by default
loadContent("home")