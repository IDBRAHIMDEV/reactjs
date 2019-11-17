import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-success">
                    <div className="nav navbar-nav">
                        <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                        <Link className="nav-item nav-link" to="/blog">Blog</Link>
                        <Link className="nav-item nav-link" to="/courses">list Courses</Link>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
