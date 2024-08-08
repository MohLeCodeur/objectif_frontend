// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Assurez-vous d'importer votre fichier CSS personnalisé

class Sidebar extends React.Component {
    constructor() {
        super();
        this.state = {};

        this.logout = this.logout.bind(this);
    }

    logout() {
        localStorage.removeItem("token");
        window.location.href = "/login";
    }

    render() {
        return (
            <div className="sidebar bg-primary text-white vh-100" style={{ width: '250px', position: 'fixed', top: 0, left: 0 }}>
                <div className="sidebar-header p-3 text-center">
                    <h2 className="title">Objectif+</h2>
                    <hr className="sidebar-separator" />
                </div>
                <nav className="p-3">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/dashboard">Tableau de Bord</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/goals">Objectifs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/habits">Habitudes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/calendar">Calendrier</Link>
                        </li>
                        {localStorage.getItem("token") ? (
                            <li className="nav-item">
                                <span className="nav-link text-white" style={{ cursor: 'pointer' }} onClick={this.logout}>Deconnexion</span>
                            </li>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/login">Connexion</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/register">Inscription</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Sidebar;
