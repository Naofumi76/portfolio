export default function () {
    const projects = [
        {
            title: "Real-Time Forum",
            description: "A full-stack forum where users can create accounts, post topics, and comment on discussions. Implemented authentication, database storage, and real-time message conversation.",
            technologies: ["Golang", "JavaScript", "SQLite3", "HTML/CSS"],
            image: "img/projects/forum.png",
            link: "https://github.com/Naofumi76/real-time-forum"
        },
        {
            title: "Lem-in",
            description: "An algorithm of ant colonies and their behaviors, demonstrating path-finding and swarm intelligence.",
            technologies: ["Golang"],
            image: "img/projects/ant-farm.png",
            link: "https://github.com/Naofumi76/lem-in"
        },
        {
            title: "GraphQL (Zone01 GraphQL Dashboard)",
            description: "An interactive dashboard for visualizing student progress using the Zone01 GraphQL API. Includes authentication, profile informations, XP tracking, and audit insights with responsive, SVG-based data visualizations.",
            technologies: ["HTML/CSS", "JavaScript", "GraphQL", "JWT"],
            image: "img/projects/graphql-dashboard.png",
            link: "https://github.com/Naofumi76/graphql"
        },
        {
            title: "Work In Progress: Social-Network",
            description: "A social network project that will include features like user profiles, posts, comments, and more. ",
            technologies: ["Golang", "HTML/CSS", "JavaScript", "React", "Next.js", "SQLite3", "Docker"],
            image: "img/projects/zone01-api.png",
            link: "https://github.com/Yssnogood/social-network"
        }
    ];

    const createProjectCard = (project) => {
        const techStack = project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('');

        return `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-stack">
                    ${techStack}
                </div>
                <a href="${project.link}" class="project-link" target="_blank">View Project</a>
            </div>
        </div>
        `;
    };

    return `
    <div class="projects">
        <h1>My Projects</h2>
        <p>Here are some of the projects I've worked on. Click on a project to learn more.</p>
        
        <div class="project-container">
            ${projects.map(project => createProjectCard(project)).join('')}
        </div>
        
        <div class="timeline">
            <h3>My Development Journey</h3>
            <div class="timeline-container">
                <div class="timeline-item">
                    <div class="timeline-date">2023</div>
                    <div class="timeline-content">
                        <h4>First Steps into Programming</h4>
                        <p>Discovered programming through Python, PHP, SQL and basic web development during high school. Built my first scripts and static web pages.</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">2023</div>
                    <div class="timeline-content">
                    <h4>University of Rouen</h4>
                    <p>Started my academic journey at the University of Rouen, studying computer science and exploring the foundations of digital technologies.</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">2024</div>
                    <div class="timeline-content">
                        <h4>Joined Zone01 Rouen Normandie</h4>
                        <p>Entered the immersive Zone01 training program, based on peer-to-peer learning and real-world projects. Developed technical and collaborative skills by working in a project-driven environment.</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">2025</div>
                    <div class="timeline-content">
                        <h4>Looking for a Work-Study Opportunity</h4>
                        <p>Seeking an apprenticeship (alternance) to apply my skills in a professional setting and gain industry experience while continuing my education.</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">2026</div>
                    <div class="timeline-content">
                        <h4>Graduation & RNCP Level 6 Certification</h4>
                        <p>Expected to graduate from Zone01 with a certified RNCP Level 6 diploma (equivalent to a Bachelor's degree - BAC+3), specializing in software development and digital project management.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}    