import { NavLink, Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-success bg-info">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <span><span ariaHidden="true">&lt;</span>F & G<span ariaHidden="true">&gt;</span></span> RECIPE
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                style={({ isActive }) => ({ color: isActive && 'yellow' })}
                                to="/about"
                                className="nav-link"
                                aria-current="page"
                            >
                                ABOUT
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                style={({ isActive }) => ({ color: isActive && 'yellow' })}
                                to="/github"
                                className="nav-link"
                                aria-current="page"
                            >
                                GITHUB
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                style={({ isActive }) => ({ color: isActive && 'red' })}
                                to="/contact"
                                className="nav-link"
                                aria-current="page"
                            >
                                LOGOUT
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar