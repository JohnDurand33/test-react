import React from 'react';
import { Link } from 'react-router-dom';
// for big components ready to export, type rafce - it will automatically declare your components as exportable
// your return statement should only return one object.  wrap your elements in a div, or use a fragment (RCT specific = <> <>)

const Navbar = () => {
    return (
        <>
            <nav
                className="navbar navbar-expand-lg bg-dark mb-2"
                data-bs-theme="dark"
            >
                <div className="container-fluid">
                    <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                    >
                        Navbar
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                        <div className="navbar-nav">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </Link>
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/news"
                            >
                                News
                            </Link>
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/news2"
                            >
                                News2
                            </Link>
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/posts"
                            >
                                Feed
                            </Link>
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/posts/create"
                            >
                                Create A Post
                            </Link>
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/logout"
                            >
                                Log Out
                            </Link>
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/signup"
                            >
                                Sign Up
                            </Link>
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/login"
                            >
                                Log In
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar
