import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FormGroup, FormControl, HelpBlock, Button } from 'react-bootstrap';
import * as actions from '../../actions/register.actions';

class Register extends Component {
    constructor(props) {
        super(props);

        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    }
    handleRegisterSubmit(e) {
        e.preventDefault();
        this.props.register({
            username: this.props.username,
            name: {
                firstName: this.props.firstName,
                lastName: this.props.lastName
            },
            password: this.props.password,
            email: this.props.email
        });
    }

    disableSubmit() {
        return this.props.username === '' ||
            this.props.firstName === '' ||
            this.props.lastName === '' ||
            this.props.password === '' ||
            this.props.email === '';
    }

    render() {
        return (
            <div>
                {this.props.loggedIn ?
                <Redirect to="/profile"/>
                :
                <div className="login">
                    <form onSubmit={this.handleRegisterSubmit} className="loginForm">
                        <FormGroup controlId="firstName" bsSize="large">
                            <FormControl autoFocus type="text" placeholder="First Name" value={this.props.firstName}
                                onChange={(e) => this.props.handleFirstNameUpdated(e.target.value)}/>
                        </FormGroup>
                        <FormGroup controlId="lastName" bsSize="large">
                            <FormControl autoFocus type="text" placeholder="Last Name" value={this.props.lastName}
                                onChange={(e) => this.props.handleLastNameUpdated(e.target.value)}/>
                        </FormGroup>
                        <FormGroup controlId="email" bsSize="large">
                            <FormControl type="email" placeholder="Email" value={this.props.email}
                                onChange={(e) => this.props.handleEmailUpdated(e.target.value)}/>
                        </FormGroup>
                        <FormGroup controlId="username" bsSize="large">
                            <FormControl autoFocus type="text" placeholder="Username" value={this.props.username}
                                onChange={(e) => this.props.handleUsernameUpdated(e.target.value)}/>
                        </FormGroup>
                        <FormGroup controlId="password" bsSize="large">
                            <FormControl type="password" placeholder="Password" value={this.props.password}
                                onChange={(e) => this.props.handlePasswordUpdated(e.target.value)}/>
                        </FormGroup>
                        <Button block bsSize="large" disabled={this.disableSubmit()} type="submit">Register</Button>
                    </form>
                </div>
            }
            </div>
        )
    }
}

const stateToPropertiesMapper = (state) => ({
    firstName: state.registerReducer.firstName,
    lastName: state.registerReducer.lastName,
    username: state.registerReducer.username,
    password: state.registerReducer.password,
    email: state.registerReducer.email,
    loggedIn: state.authReducer.loggedIn
});

const dispatcherToPropsMapper = dispatch => ({
    handleUsernameUpdated: (username) => actions.handleUpdateUsername(dispatch, username),
    handleFirstNameUpdated: (firstName) => actions.handleUpdateFirstName(dispatch, firstName),
    handleLastNameUpdated: (lastName) => actions.handleUpdateLastName(dispatch, lastName),
    handleEmailUpdated: (email) => actions.handleUpdateEmail(dispatch, email),
    handlePasswordUpdated: (password) => actions.handleUpdatePassword(dispatch, password),
    register: (user) => actions.register(dispatch, user)
});

const connectedRegister = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper
)(Register);

export { connectedRegister as Register };