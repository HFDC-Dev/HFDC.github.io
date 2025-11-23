import Matrix from '../assets/matrix.mp4'

const Hero = () => {
    return (
        <div className="relative w-full min-h-[calc(100vh-10rem)] flex items-center justify-center px-8 lg:px-24">

            {/* Vidéo de fond */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover -z-20"
            >
                <source src={Matrix} type="video/mp4" />
            </video>

            {/* Filtre pour + de lisibilité */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm -z-10"></div>

            {/* Contenu Hero */}
            <div className="relative z-10 flex flex-col lg:flex-row lg:gap-16 items-center lg:items-start max-w-6xl w-full">

                {/* Texte Hero + Icones */}
                <div className="text-center lg:text-left max-w-lg lg:max-w-xl ml-0 lg:ml-[-2rem]">
                    <h1 className="text-6xl lg:text-5xl font-bold text-white mb-8"
                        style={{ fontFamily: '"Science Gothic", sans-serif' }}>
                        Salut !<br />
                        <span className="text-emerald-400">Je suis Henrique.</span>
                    </h1>

                    <p className='text-4xl text-white mb-4'
                        style={{ fontFamily: '"Science Gothic", sans-serif' }}>
                        Développeur Front-End
                    </p>

                    <p className="py-4 text-lg lg:text-xl text-white" style={{ fontFamily: '"Science Gothic", sans-serif' }}>
                        Passionné par la création d’interfaces modernes, performantes et accessibles.
                        Je transforme des idées en expériences web engageantes.
                    </p>

                    {/* Icones alignees sous le texte */}
                    <div className="flex items-center justify-center lg:justify-start gap-7 mt-4">
                        {/* GitHub */}
                        <a
                            href="https://github.com/tonprofil"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-emerald-400 transition-transform hover:scale-125"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="64" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.583 0-.288-.01-1.05-.015-2.06-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.335-5.466-5.932 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.29-1.552 3.295-1.23 3.295-1.23.653 1.653.242 2.873.12 3.176.77.84 1.232 1.91 1.232 3.22 0 4.61-2.805 5.628-5.475 5.922.43.37.823 1.096.823 2.21 0 1.595-.015 2.88-.015 3.27 0 .322.216.698.825.58C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://linkedin.com/in/tonprofil"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-emerald-400 transition-transform hover:scale-125"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="64" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v16h-4V8zm7.5 0h3.78v2.16h.05c.53-1 1.82-2.16 3.74-2.16 4 0 4.74 2.62 4.74 6.03V24h-4v-7.42c0-1.77-.03-4.05-2.47-4.05-2.48 0-2.86 1.93-2.86 3.92V24h-4V8z" />
                            </svg>
                        </a>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Hero
