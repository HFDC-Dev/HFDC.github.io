import { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [showModal, setShowModal] = useState(false);

    const titleRef = useRef(null);
    const formRef = useRef(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_8yngzca",    // Service ID
                "template_zz1q15k",   // Template ID
                form,                 // Données du formulaire
                "2GLtOVhNia_4nezZL"   // Clé publique
            )
            .then(
                () => {
                    setShowModal(true); // Affiche la modale
                    setForm({ name: "", email: "", message: "" }); // Réinitialise le formulaire
                },
                (err) => {
                    alert("Erreur, message non envoyé.");
                    console.error(err);
                }
            );
    };

    // Intersection Observer pour fade + slide
    useEffect(() => {
        const elements = [titleRef.current, formRef.current];
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

        elements.forEach((el) => {
            if (el) observer.observe(el);
        });
    }, []);

    return (
        <section id="contact" className="section flex flex-col items-center overflow-hidden">
            <h1
                ref={titleRef}
                className="text-4xl md:text-5xl font-bold text-white mb-10 opacity-0 -translate-y-10 transition-all duration-700"

            >
                Me <span className="text-emerald-400">Contacter</span>
            </h1>

            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full max-w-xl bg-base-300 p-8 rounded-2xl shadow-xl space-y-6 opacity-0 -translate-y-10 transition-all duration-700 delay-200"
            >
                <div className="form-control">
                    <label className="label w-15" htmlFor="contact-name">
                        <span className="label-text text-white">Nom</span>
                    </label>
                    <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="input input-bordered bg-[#1B1717] text-white rounded-none"
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label w-15" htmlFor="contact-email">
                        <span className="label-text text-white">Email</span>
                    </label>
                    <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="input input-bordered bg-[#1B1717] text-white rounded-none"
                        required
                    />
                </div>


                <div className="form-control">
                    <label className="label w-38" htmlFor="contact-message">
                        <span className="label-text text-white">Votre message</span>
                    </label>
                    <textarea
                        id="contact-message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Que souhaitez-vous dire ?"
                        className="textarea textarea-bordered bg-[#1B1717] text-white h-20 rounded-none"
                        required
                    ></textarea>
                </div>


                <div className="form-control mt-4 flex justify-center">
                    <button
                        type="submit"
                        className="btn bg-emerald-500 border-none hover:bg-emerald-600 text-black px-15 rounded-lg text-lg"

                    >
                        Envoyer
                    </button>
                </div>
            </form>

            {/* Modale de confirmation */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
                    <div className="bg-[#1B1717] p-8 rounded-2xl flex flex-col items-center shadow-xl">
                        {/* Icône de validation */}
                        <div className="text-6xl text-emerald-400 mb-4">✅</div>
                        <p className="text-white text-lg font-semibold">Message envoyé avec succès !</p>
                        <button
                            className="mt-6 px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-black rounded-lg"
                            onClick={() => setShowModal(false)}
                        >
                            Fermer
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;