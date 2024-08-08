// src/pages/LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            redirect: false,
            errors: {} // Initialize an errors object in the state
        };

        // Bind the handlers to the class instance
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (localStorage.getItem('token')) {
            this.setState({ redirect: true });
        }
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Form Submitted:", this.state);

        const loginData = {
            email: this.state.email,
            password: this.state.password
        };

        axios
            .post("http://localhost:8000/api/login", loginData)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem("token", response.data.api_token);
                this.setState({ redirect: true });
            })
            .catch((error) => {
                if (error.response && error.response.data.errors) {
                    // Capture the error messages from the response and set the state
                    this.setState({ errors: error.response.data.errors });
                } else {
                    this.setState({ errors: { general: "Login invalide" } });
                }
            });
    }

    render() {
        if (this.state.redirect) {
            return <Navigate to="/dashboard" />;
        }

        return (
            <>
               <Sidebar />
                <div className="container w-50">
                    <h2 className="text-center">Connexion</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Adresse Email
                            </label>
                            <input
                                type="email"
                                className={`form-control ${this.state.errors.email ? 'is-invalid' : ''}`}
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                            />
                            <div id="emailHelp" className="form-text">
                                Ne partagez votre Email avec personne
                            </div>
                            {this.state.errors.email && (
                                <div className="invalid-feedback">{this.state.errors.email[0]}</div>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Mot de passe
                            </label>
                            <input
                                type="password"
                                className={`form-control ${this.state.errors.password ? 'is-invalid' : ''}`}
                                id="exampleInputPassword1"
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                            />
                            {this.state.errors.password && (
                                <div className="invalid-feedback">{this.state.errors.password[0]}</div>
                            )}
                        </div>
                        {this.state.errors.general && (
                            <div className="alert alert-danger" role="alert">
                                {this.state.errors.general}
                            </div>
                        )}
                        <button type="submit" className="btn btn-primary">
                            Se connecter
                        </button>
                    </form>
                </div>
                {/* <div className="d-flex justify-content-center mt-5">
                <a href="https://127.0.0.1:8000/auth/redirect/google">
                <GoogleLoginButton style={{ maxWidth: 500, minHeight: 100 }} />
                </a>
                  
                </div> */}
            </>
        );
    }
}

export default LoginPage;
