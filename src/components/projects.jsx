export default function Projects() {
    const projects = [
        {
            name: "Hauser Real Estate",
            description: "Real estate listing app with dashboard, role system, and uploads.",
        },
        {
            name: "Crypto Tracker",
            description: "Track live crypto prices using public APIs.",
        },
    ];

    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>

            <div className="project-grid">
                {projects.map((p) => (
                    <div className="project-card" key={p.name}>
                        <h3>{p.name}</h3>
                        <p>{p.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
