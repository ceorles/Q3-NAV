import React, { useEffect, useState } from 'react';
import style from './sections-css/Projects.module.css';

const Projects = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Prevent body scroll on load
        document.body.style.overflow = 'hidden';

        // Start animation after mount
        setAnimate(true);

        // Allow body scroll after animation finishes
        const timer = setTimeout(() => {
            document.body.style.overflow = 'auto';
        }, 800); // Match the duration of your animation (800ms in your case)

        return () => clearTimeout(timer); // Cleanup timer
    }, []);

    const projects = [
        { src: "KOI.png", alt: "KOI WEBSITE", link: "https://ceorles.github.io/midterm_project.github.io/" },
        { src: "mp3.png", alt: "MUSIC PLAYER", link: "https://ceorles.github.io/music_player.github.io/" },
        { src: "pokemon.png", alt: "POKEMON", link: "https://ceorles.github.io/responsive_website.github.io/" },
        { src: "card.png", alt: "CARD", link: "https://ceorles.github.io/responsive_cards.github.io/" },
        { src: "enrollment.png", alt: "EFORM", link: "https://ceorles.github.io/enrollment_form.github.io/" },
        { src: "manga.png", alt: "MANGA", link: "https://ceorles-library.netlify.app/" },
        { src: "cra.png", alt: "PORTFOLIO", link: "https://ceorles-portfolio.netlify.app/" }
    ];

    return (
        <section
            id="projects"
            className={`${style.projectsSection} ${animate ? style.animateIn : ''}`}
        >
            <h1>Projects</h1>
            <div className={style.projectsGrid}>
                {projects.map((project, index) => (
                    <div className={style.projectCard} key={index}>
                        <img src={project.src} alt={project.alt} />
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            Visit Website
                        </a>
                    </div>
                ))}
            </div>

            <p className={style.githubLink}>
                I have some ongoing projects on GitHub:{" "}
                <a href="https://github.com/ceorles" target="_blank" rel="noopener noreferrer">
                    <img src="github.png" alt="GITHUB" /> ceorles
                </a>
            </p>
        </section>
    );
};

export default Projects;