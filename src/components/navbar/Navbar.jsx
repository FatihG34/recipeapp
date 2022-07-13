import { ExternalLink } from "react-external-link"
import { NavLink, Link, useNavigate } from "react-router-dom"

const Navbar = () => {
    let navigate = useNavigate()
    return (
        <nav className="navbar navbar-expand-md navbar-success bg-info">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <span><span ariaHidden="true">&lt;</span>F & G<span ariaHidden="true"> /&gt;</span></span> RECIPE
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
                            <Link
                                // style={({ isActive }) => ({ color: isActive && 'yellow' })}
                                to="/about"
                                className="nav-link"
                                aria-current="page"
                            >
                                ABOUT
                            </Link>
                        </li>

                        <li className="nav-item">
                            <ExternalLink
                                href='https://github.com/FatihG34'
                                className="nav-link"
                                aria-current="page"
                                target='_blank'
                            >
                                GITHUB
                            </ExternalLink>
                        </li>
                        <li className="nav-item">
                            <Link
                                // style={({ isActive }) => ({ color: isActive && 'red' })}
                                to="/contact"
                                className="nav-link"
                                aria-current="page"
                            >
                                LOGOUT
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar