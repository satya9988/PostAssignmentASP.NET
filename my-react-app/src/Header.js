import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login"); 
    };

    return (
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
            <div className="container">
                <img src="../images/College Administration.jpg" alt="college logo" style={{width:"60px",height:"40px"}}></img>&nbsp;
                <Link to="/" className="navbar-brand">
                    College Management
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/add-Jsonfile" className="nav-link">
                                Add File
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/view-college" className="nav-link">
                                View Details
                            </Link>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-danger" onClick={logout}>
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
