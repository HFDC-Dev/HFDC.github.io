const Footer = () => {
    return (
        <footer className="w-full bg-base-300 py-12 flex flex-col items-center shadow-inner">

            {/* Icônes */}
            <div className="flex items-center gap-8 mb-6">
                {/* GitHub */}
                <a
                    href="https://github.com/HFDC-Dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                >
                    <img
                        src="https://devicon-website.vercel.app/api/github/original.svg?color=%23FFFFFF"
                        alt="GitHub"
                        className="w-12 h-12"
                    />
                </a>

                {/* LinkedIn */}
                <a
                    href="https://linkedin.com/in/tonprofil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                >
                    <img
                        src="https://devicon-website.vercel.app/api/linkedin/plain.svg?color=%23FFFFFF"
                        alt="LinkedIn"
                        className="w-12 h-12"
                    />
                </a>
            </div>

            {/* Copyright */}
            <div className="text-white text-sm text-center">
                © 2025 HFDC-Dev. Tous droits réservés.
            </div>

        </footer>
    );
};

export default Footer
