import ocLogo from "../assets/oc-logo.png";
import slLogo from "../assets/auto-logo.jpg";
import { useRef, useState, useEffect } from "react";

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
    const titleRef = useRef(null);
    const carouselContainerRef = useRef(null);
    const dotsRef = useRef(null);

    const goToSlide = (index) => {
        setCurrent(index);

        const carousel = carouselRef.current;
        const width = carousel.clientWidth;

        carousel.scrollTo({
            left: width * index,
            behavior: "smooth",
        });
    };

    // Intersection Observer pour fade + slide
    useEffect(() => {
        const elements = [titleRef.current, carouselContainerRef.current, dotsRef.current];
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
        <section id="experience" className="section bg-base-300 flex flex-col items-center py-16 overflow-hidden">
            {/* Titre */}
            <div className="text-center mb-16">
                <h1
                    ref={titleRef}
                    className="text-4xl md:text-5xl font-bold text-white opacity-0 -translate-y-10 transition-all duration-700"

                >
                    Mon <span className="text-emerald-400">Parcours</span>
                </h1>
            </div>

            {/* Carousel */}
            <div
                ref={carouselContainerRef}
                className="w-full max-w-4xl opacity-0 -translate-y-10 transition-all duration-700 delay-200"
            >
                <div ref={carouselRef} className="carousel w-full rounded-2xl overflow-hidden scroll-smooth">
                    {slides.map((slide, index) => (
                        <div key={index} className="carousel-item w-full flex justify-center">
                            <div className="flex items-center gap-6 bg-[#1B1717] p-8 rounded-2xl shadow-xl w-full">
                                <img src={slide.logo} alt={`Logo de ${slide.title}`} className="w-24 h-24 object-contain" />

                                <div>
                                    <h2 className="text-xl md:text-2xl font-bold text-white">{slide.title}</h2>
                                    <p className="text-emerald-400 text-sm font-semibold mt-1">{slide.date}</p>
                                    <p className="text-gray-300 mt-3">{slide.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dots */}
                <div
                    ref={dotsRef}
                    className="flex justify-center gap-4 mt-6 opacity-0 -translate-y-10 transition-all duration-700 delay-400"
                >
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-5 h-5 rounded-full transition-all duration-300 ${current === index ? "bg-emerald-400 scale-125" : "bg-gray-500"
                                }`}
                            aria-label={`Aller à la diapositive ${index + 1}`}

                        >
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;