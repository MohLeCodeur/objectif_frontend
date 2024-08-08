// src/pages/RegisterPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
class RegisterPage extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            confirm_password: '',
            redirect: false,
            errors: {} // Initialize an errors object in the state
        };

        // Bind the handlers to the class instance
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        if(localStorage.getItem('token')) {
            this.setState({ redirect: true });
        }
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleConfirmPasswordChange(event) {
        this.setState({ confirm_password: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        let bodyFormData = new FormData();
        bodyFormData.append('name', this.state.name);
        bodyFormData.append('email', this.state.email);
        bodyFormData.append('password', this.state.password);
        bodyFormData.append('confirm_password', this.state.confirm_password);

        axios.post('http://localhost:8000/api/register', bodyFormData)
            .then((response) => {
                
                this.setState({ redirect: true });
            })
            .catch((error) => {
                if (error.response && error.response.data.errors) {
                    // Capture the error messages from the response and set the state
                    this.setState({ errors: error.response.data.errors });
                }
            });
    }

    render() {
        if(this.state.redirect) {
            return <Navigate to="/login" />
        }

        return (
            <>
                   <Sidebar />
                <div className="container w-50">
                    <h2 className="text-center">Inscription</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName" className="form-label">Nom</label>
                            <input
                                type="text"
                                className={`form-control ${this.state.errors.name ? 'is-invalid' : ''}`}
                                id="exampleInputName"
                                value={this.state.name}
                                onChange={this.handleNameChange}
                            />
                            {this.state.errors.name && (
                                <div className="invalid-feedback">{this.state.errors.name[0]}</div>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Adresse Email</label>
                            <input
                                type="email"
                                className={`form-control ${this.state.errors.email ? 'is-invalid' : ''}`}
                                id="exampleInputEmail1"
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                            />
                            <div id="emailHelp" className="form-text">Ne partagez votre Email avec personne</div>
                            {this.state.errors.email && (
                                <div className="invalid-feedback">{this.state.errors.email[0]}</div>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Mot de passe</label>
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
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword2" className="form-label">Confirmer Mot de passe</label>
                            <input
                                type="password"
                                className={`form-control ${this.state.errors.confirm_password ? 'is-invalid' : ''}`}
                                id="exampleInputPassword2"
                                value={this.state.confirm_password}
                                onChange={this.handleConfirmPasswordChange}
                            />
                            {this.state.errors.confirm_password && (
                                <div className="invalid-feedback">{this.state.errors.confirm_password[0]}</div>
                            )}
                        </div>
                        <button type="submit" className="btn btn-primary">S'inscrire</button>
                    </form>
                </div>
            </>
        );
    }
}

export default RegisterPage;
