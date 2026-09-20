import { Link } from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="flex items-center gap-2">
                <p className="text-2xl font-bold text-gradient">
                    HireLens AI
                </p>
            </Link>

            <Link to="/upload" className="primary-button w-fit">
                Analyze Resume
            </Link>
        </nav>
    );
};

export default Navbar;