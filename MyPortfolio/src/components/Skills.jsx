import { useEffect, useRef } from "react";

const Skills = () => {
    const titleRef = useRef(null);
    const frontEndRef = useRef(null);
    const backEndRef = useRef(null);
    const softSkillsRef = useRef(null);

    useEffect(() => {
        const elements = [titleRef.current, frontEndRef.current, backEndRef.current, softSkillsRef.current];

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

    return (
        <section
            id="skills"
            className="section bg-base-300 flex flex-col items-center overflow-hidden"
        >
            {/* Titre */}
            <div className="text-center md:mb-35 mb-15">
                <h1
                    ref={titleRef}
                    className="text-4xl md:text-5xl font-bold text-white opacity-0 -translate-y-10 transition-all duration-700"

                >
                    Mes <span className="text-emerald-400">Compétences</span>
                </h1>
            </div>

            {/* Blocs Front-end / Back-end */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
                {/* Front-end */}
                <div
                    ref={frontEndRef}
                    className="relative bg-[#1B1717] rounded-2xl p-8 flex flex-col items-center overflow-hidden opacity-0 -translate-y-10 transition-all duration-700 delay-200"
                >
                    <h2 className="text-2xl font-bold text-emerald-400 mb-8 text-center">
                        Front-<span className="text-white">end</span>
                    </h2>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col items-center">
                            <img src="https://devicon-website.vercel.app/api/html5/original.svg" alt="Logo de HTML5" className="w-16 h-16 mb-2 transform transition duration-300 hover:scale-110" />
                            <h3 className="text-white">HTML5</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="https://devicon-website.vercel.app/api/css3/original.svg" alt="Logo de CSS3" className="w-16 h-16 mb-2 transform transition duration-300 hover:scale-110" />
                            <h3 className="text-white">CSS3</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="https://devicon-website.vercel.app/api/react/original.svg" alt="Logo de React" className="w-16 h-16 mb-2 transform transition duration-300 hover:scale-110" />
                            <h3 className="text-white">React</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="https://devicon-website.vercel.app/api/javascript/original.svg" alt="Logo de Javascript" className="w-16 h-16 mb-2 transform transition duration-300 hover:scale-110" />
                            <h3 className="text-white">Javascript</h3>
                        </div>
                    </div>
                </div>

                {/* Back-end */}
                <div
                    ref={backEndRef}
                    className="relative bg-[#1B1717] rounded-2xl p-8 flex flex-col items-center overflow-hidden opacity-0 -translate-y-10 transition-all duration-700 delay-400"
                >
                    <h2 className="text-2xl font-bold text-emerald-400 mb-8 text-center">
                        Back-<span className="text-white">end</span>
                    </h2>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col items-center">
                            <img src="https://devicon-website.vercel.app/api/nodejs/original.svg" alt="Logo de Node.js" className="w-16 h-16 mb-2 transform transition duration-300 hover:scale-110" />
                            <h3 className="text-white">Node.js</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="https://devicon-website.vercel.app/api/express/original.svg?color=%23FFFFFF" alt="Logo Express" className="w-16 h-16 mb-2 transform transition duration-300 hover:scale-110" />
                            <h3 className="text-white">Express</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="https://devicon-website.vercel.app/api/mongodb/plain-wordmark.svg" alt="Logo de MongoDB" className="w-16 h-16 mb-2 transform transition duration-300 hover:scale-110" />
                            <h3 className="text-white">MongoDB</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Soft Skills */}
            <div
                ref={softSkillsRef}
                className="relative bg-[#1B1717] rounded-2xl p-8 mt-8 w-full max-w-4xl mx-auto backdrop-blur-md opacity-0 -translate-y-10 transition-all duration-700 delay-600"
            >
                <h2 className="text-2xl font-bold text-emerald-400 mb-8 text-center">
                    Soft <span className="text-white">Skills</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
                    {/* Communication */}
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8L3 20l1.2-3.6A8.94 8.94 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>Communication claire</span>
                    </div>

                    {/* Travail d'équipe */}
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM6 20v-1c0-2.21 3.58-4 6-4s6 1.79 6 4v1H6z" />
                        </svg>
                        <span>Travail d’équipe</span>
                    </div>

                    {/* Résolution de problèmes */}
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span>Résolution de problèmes</span>
                    </div>

                    {/* Organisation */}
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                        <span>Organisation & Priorisation</span>
                    </div>

                    {/* Autonomie */}
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.1 0-2 .9-2 2v8a2 2 0 104 0v-8c0-1.1-.9-2-2-2zM7 12H5a2 2 0 100 4h2m10 0h2a2 2 0 100-4h-2" />
                        </svg>
                        <span>Autonomie</span>
                    </div>

                    {/* Curiosité */}
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6a6 6 0 016 6c0 3-6 9-6 9s-6-6-6-9a6 6 0 016-6z" />
                        </svg>
                        <span>Curiosité & apprentissage continu</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
