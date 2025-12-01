const Navbar = () => {
    return (

        <nav className="navbar bg-base-300 fixed top-0 left-0 w-full z-50 shadow-md px-6 lg:px-10 flex justify-between items-center">

            {/* Bouton d'accueil  */}
            <div className="flex-none">
                <a href="#" className="text-5xl font-bold text-emerald-600">H</a>
            </div>

            {/* Liens centraux pour desktop */}
            <div className="hidden lg:flex flex-1 justify-center">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold gap-8">
                    <li><a href="#about" className="hover:text-emerald-600">À propos</a></li>
                    <li><a href="#skills" className="hover:text-emerald-600">Compétences</a></li>
                    <li><a href="#projects" className="hover:text-emerald-600">Projets</a></li>
                    <li><a href="#experience" className="hover:text-emerald-600">Parcours</a></li>
                </ul>
            </div>

            {/* Bouton Contact */}
            <div className="hidden lg:flex flex-none">
                <a href="#contact">
                    <button className="w-25 h-10 bg-emerald-600 hover:bg-emerald-500 text-black font-bold border-none cursor-pointer">
                        Contact
                    </button>
                </a>
            </div>

            {/* Menu hamburger mobile */}
            <div className="lg:hidden flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu dropdown-content mt-3 z-1 p-4 shadow bg-base-200 rounded-box w-52 text-lg font-semibold"
                    >
                        <li><a href="#about">À propos</a></li>
                        <li><a href="#skills">Compétences</a></li>
                        <li><a href="#projects">Projets</a></li>
                        <li><a href="#experience">Parcours</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
