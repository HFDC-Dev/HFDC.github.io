
const About = () => {
    return (
        <section id="about" className="w-full bg-black py-20 px-6 lg:px-24">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">

                {/* Illustration / Emoji à gauche */}
                <div className="flex-1 flex justify-center lg:justify-start">
                    <div className="text-9xl lg:text-[12rem] transform hover:scale-105 transition-transform duration-500">
                        💻
                    </div>
                </div>

                {/* Texte à droite */}
                <div className="flex-1 bg-emerald-900/80 p-8 rounded-xl shadow-xl text-white text-lg lg:text-xl font-semibold leading-relaxed relative overflow-hidden">

                    {/* Effet de lumière en arrière-plan */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-600/40 to-emerald-900/20 blur-3xl -z-10"></div>

                    {/* Titre */}
                    <h2 className="text-2xl lg:text-5xl font-extrabold mb-6" style={{ fontFamily: '"Science Gothic", sans-serif' }}>
                        À propos de moi
                    </h2>

                    {/* Texte */}
                    <p>
                        La technologie me fascine depuis mon enfance. En 2023, j’ai décidé de me lancer pleinement dans le développement web,
                        en commençant par des cours autodidactes et en rejoignant <span className="text-black font-bold">OpenClassrooms </span>
                        pour enrichir mes connaissances et consolider mes compétences.
                    </p>

                    <p className="mt-4">
                        Aujourd’hui, je crée des interfaces modernes et accessibles tout en continuant à apprendre chaque jour.
                    </p>

                </div>

            </div>
        </section>
    )
}

export default About
