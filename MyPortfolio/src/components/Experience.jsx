import ocLogo from "../assets/oc-logo.png"
import slLogo from "../assets/auto-logo.jpg"
import { useRef, useState } from "react";


const Experience = () => {
    const slides = [
        {
            title: "Apprentissage Autodidacte",
            date: "2023 – 2024",
            logo: slLogo,
            description:
                "Découverte et apprentissage des bases du développement web en autonomie : HTML, CSS, JavaScript, premiers projets personnels et compréhension des fondamentaux.",
        },
        {
            title: "Formation Développeur Web — OpenClassrooms",
            date: "2024 – 2025",
            logo: ocLogo,
            description:
                "Parcours professionnalisant couvrant le développement web moderne : HTML, CSS, JavaScript, React, Node.js, optimisation, accessibilité et gestion de projet.",
        },
    ];

    const [current, setCurrent] = useState(0);
    const carouselRef = useRef(null);

    const goToSlide = (index) => {
        setCurrent(index);

        const carousel = carouselRef.current;
        const width = carousel.clientWidth;

        carousel.scrollTo({
            left: width * index,
            behavior: "smooth",
        });
    };

    return (
        <section id="experience" className="section bg-base-300 flex flex-col items-center py-16">

            {/* Titre */}
            <div className="text-center mb-16">
                <h1
                    className="text-4xl md:text-5xl font-bold text-white"
                    style={{ fontFamily: '"Science Gothic", sans-serif' }}
                >
                    Mon <span className="text-emerald-400">Parcours</span>
                </h1>
            </div>

            {/* Carousel */}
            <div className="w-full max-w-4xl">

                <div ref={carouselRef} className="carousel w-full rounded-2xl overflow-hidden scroll-smooth">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="carousel-item w-full flex justify-center"
                        >
                            <div className="flex items-center gap-6 bg-[#1B1717] p-8 rounded-2xl shadow-xl w-full">
                                <img src={slide.logo} alt={slide.title} className="w-24 h-24 object-contain" />

                                <div style={{ fontFamily: '"Science Gothic", sans-serif' }}>
                                    <h2 className="text-xl md:text-2xl font-bold text-white">{slide.title}</h2>
                                    <p className="text-emerald-400 text-sm font-semibold mt-1">{slide.date}</p>
                                    <p className="text-gray-300 mt-3">{slide.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-4 mt-6">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-5 h-5 rounded-full transition-all duration-300 ${current === index
                                ? "bg-emerald-400 scale-125"
                                : "bg-gray-500"
                                }`}
                        ></button>
                    ))}
                </div>

            </div>

        </section>
    );
};

export default Experience
