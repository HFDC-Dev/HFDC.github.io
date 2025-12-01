import { useState, useRef, useEffect } from "react";
import project1 from "../assets/grimoire.png";
import project2 from "../assets/nina.png";
import project3 from "../assets/kasa.png";
import logo1 from "../assets/grimoire-logo.png";
import logo2 from "../assets/nina-logo.png";
import logo3 from "../assets/kasa-logo.png";

const Projects = () => {
    const [current, setCurrent] = useState(null);

    const titleRef = useRef(null);
    const logosRef = useRef(null);

    // Intersection Observer pour fade + slide
    useEffect(() => {
        const elements = [titleRef.current, logosRef.current];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("opacity-100", "translate-y-0");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        elements.forEach(el => {
            if (el) observer.observe(el);
        });
    }, []);

    // Tableau des projets
    const projects = [
        {
            img: project1,
            logo: logo1,
            description:
                "Mon vieux Grimoire est un site web de référencement et de notation de livres pour une petite chaîne de librairies. Dans ce projet, j'ai pris en charge le développement back-end.",
            github: "https://github.com/HFDC-Dev/P6-Grimoire",
        },
        {
            img: project2,
            logo: logo2,
            description:
                "Nina Carducci est un site de photographie professionnelle pour lequel j’ai optimisé les performances, l’accessibilité et le référencement afin d’améliorer l’expérience utilisateur et la visibilité sur les moteurs de recherche.",
            github: "https://github.com/HFDC-Dev/Nina-Carducci-P4",
        },
        {
            img: project3,
            logo: logo3,
            description:
                "Kasa est une plateforme de location d’appartements. J’ai développé l’interface utilisateur complète du nouveau site en React.",
            github: "https://github.com/HFDC-Dev/P5-Kasa",
        },
    ];

    return (
        <section id="projects" className="section flex flex-col items-center overflow-hidden">
            {/* Titre */}
            <div className="text-center mb-20">
                <h1
                    ref={titleRef}
                    className="text-4xl md:text-5xl font-bold text-white opacity-0 -translate-y-10 transition-all duration-700"

                >
                    Mes <span className="text-emerald-400">Projets</span>
                </h1>
            </div>

            <div className="w-full max-w-5xl mx-auto">
                {/* Logos */}
                <div
                    ref={logosRef}
                    className="flex justify-center gap-5 py-5 mb-10 opacity-0 -translate-y-10 transition-all duration-700 delay-200"
                >
                    {projects.map((project, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-50 h-50 bg-base-300 rounded-xl flex items-center justify-center shadow-lg transition-transform ${current === index ? "scale-110" : "hover:scale-105"
                                }`}
                        >
                            <img
                                src={project.logo}
                                alt={`logo-${index}`}
                                className="w-30 h-30 object-contain"
                            />
                        </button>
                    ))}
                </div>

                {/* Projet sélectionné avec fade + slide */}
                {current !== null && (
                    <div
                        key={current} // Pour relancer l'animation à chaque changement
                        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-base-300 p-6 rounded-2xl shadow-xl backdrop-blur-md transition-all duration-500 opacity-0 animate-fadeIn"
                    >
                        {/* Image */}
                        <div className="rounded-xl overflow-hidden shadow-lg">
                            <img
                                src={projects[current].img}
                                alt={`project-${current}`}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Description + bouton */}
                        <div
                            className="p-4 text-left rounded-lg shadow-inner"

                        >
                            <p className="text-white mb-6">{projects[current].description}</p>

                            <a
                                href={projects[current].github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-5 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-xl transition-all duration-300 text-black font-semibold shadow-lg hover:scale-105"
                            >
                                <img
                                    src="https://devicon-website.vercel.app/api/github/original.svg"
                                    alt="GitHub"
                                    className="w-6 h-6"
                                />
                                <span>Dépôt GitHub</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
