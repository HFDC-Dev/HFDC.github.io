import Space from '../assets/space.mp4'

const About = () => {
    return (
        <section
            id="about"
            className="relative w-full bg-black py-16 md:py-40 px-6 lg:px-24 flex flex-col items-center overflow-hidden"
        >
            {/* --- Vidéo de fond --- */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src={Space} type="video/mp4" />
            </video>

            {/* Overlay pour lisibilité */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

            {/* Contenu de la section */}
            <div className="relative z-20 w-full max-w-6xl flex flex-col items-center">
                {/* Titre centré */}
                <div className="text-center mb-15 md:mb-20">
                    <h1
                        className="text-4xl md:text-5xl font-bold"
                        style={{ fontFamily: '"Science Gothic", sans-serif' }}
                    >
                        À propos de <span className="text-emerald-400">Moi</span>
                    </h1>
                </div>

                {/* Contenu principal */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 w-full">
                    {/* Colonne gauche */}
                    <div className="flex flex-col justify-center text-center lg:text-left">
                        <p className="text-sm md:text-lg leading-relaxed md:leading-relaxed text-gray-200" style={{ fontFamily: '"Science Gothic", sans-serif' }}>
                            La technologie me fascine depuis mon enfance. En 2023, j’ai décidé de me lancer pleinement dans le développement web,
                            en commençant par des cours autodidactes et en rejoignant par la suite
                            <span className="text-emerald-400 font-bold"> OpenClassrooms </span>
                            pour enrichir mes connaissances et consolider mes compétences.
                            <br /><br />
                            Aujourd’hui, je crée des interfaces modernes et accessibles tout en continuant à apprendre chaque jour.
                        </p>

                        <a
                            href="/CV.pdf"
                            download
                            className="mt-4 md:mt-8 px-4 md:px-6 py-2 md:py-3 bg-emerald-500 hover:bg-emerald-600
                     text-black font-semibold rounded-lg shadow-lg transition-all
                     hover:shadow-emerald-400/30 hover:-translate-y-1 self-center lg:self-start text-sm md:text-base"
                            style={{ fontFamily: '"Science Gothic", sans-serif' }}
                        >
                            Télécharger mon CV
                        </a>
                    </div>

                    {/* Colonne droite */}
                    <div className="flex flex-col gap-3 md:gap-6 w-full">
                        {/* Carte Innovation */}
                        <div className="p-3 md:p-6 bg-black/30 backdrop-blur-md border border-neutral-700 rounded-xl shadow-lg
                                        hover:-translate-y-1 hover:shadow-emerald-400/20 transition-all w-full">
                            <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3a1 1 0 011 1v1a1 1 0 01-2 0V4a1 1 0 011-1zM7 7a5 5 0 0110 0c0 2.5-2 4.5-4.5 6.5a.5.5 0 00-.5 0C9 11.5 7 9.5 7 7zM12 14v2m0 4h.01" />
                                </svg>
                                <h2 className="text-sm md:text-xl font-bold text-emerald-400" style={{ fontFamily: '"Science Gothic", sans-serif' }}>Innovation</h2>
                            </div>
                            <p className="text-xs md:text-base text-gray-300" style={{ fontFamily: '"Science Gothic", sans-serif' }}>
                                Toujours explorer de nouvelles idées et technologies.
                            </p>
                        </div>

                        {/* Carte Web Development */}
                        <div className="p-3 md:p-6 bg-black/30 backdrop-blur-md border border-neutral-700 rounded-xl shadow-lg
                                        hover:-translate-y-1 hover:shadow-emerald-400/20 transition-all w-full">
                            <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                                </svg>
                                <h2 className="text-sm md:text-xl font-bold text-emerald-400" style={{ fontFamily: '"Science Gothic", sans-serif' }}>Web Development</h2>
                            </div>
                            <p className="text-xs md:text-base text-gray-300" style={{ fontFamily: '"Science Gothic", sans-serif' }}>
                                Création d’applications web modernes, performantes et interactives.
                            </p>
                        </div>

                        {/* Carte UI/UX Design */}
                        <div className="p-4 md:p-6 bg-black/30 backdrop-blur-md border border-neutral-700 rounded-xl shadow-lg
                                        hover:-translate-y-1 hover:shadow-emerald-400/20 transition-all w-full">
                            <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM6 20v-1c0-2.21 3.58-4 6-4s6 1.79 6 4v1H6z" />
                                </svg>
                                <h2 className="text-sm md:text-xl font-bold text-emerald-400" style={{ fontFamily: '"Science Gothic", sans-serif' }}>UI/UX Design</h2>
                            </div>
                            <p className="text-xs md:text-base text-gray-300" style={{ fontFamily: '"Science Gothic", sans-serif' }}>
                                Conception d’expériences utilisateurs claires, intuitives et esthétiques.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
