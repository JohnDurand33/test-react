import React from 'react'
// for big components ready to export, type rafce - it will automatically declare your components as exportable
// your return statement should only return one object.  wrap your elements in a div, or use a fragment (RCT specific = <> <>)

const Navbar = ({user}) => {
    return (
        <>
            <nav
                className="navbar navbar-expand-lg bg-dark mb-2"
                data-bs-theme="dark"
            >
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">
                        Navbar
                    </a>
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
                            <a className="nav-link text-white" href="/posts/create">
                                Create Post
                            </a>
                            <a className="nav-link text-white" href="/users">
                                Users
                            </a>
                            <a className="nav-link text-white" href="/logout">
                                Log Out
                            </a>
                            <a className="nav-link text-white" href="/signup">
                                Sign Up
                            </a>
                            <a className="nav-link text-white" href="/login">
                                Log In
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar
