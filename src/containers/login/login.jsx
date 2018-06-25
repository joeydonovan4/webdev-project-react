import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FormGroup, FormControl, Button, HelpBlock } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { login, handleUsernameUpdated, handlePasswordUpdated } from '../../actions/auth.actions';

class Login extends Component {
    constructor(props) {
        super(props);

        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.disableSubmit = this.disableSubmit.bind(this);
    }

    render() {
        return (
            <div>
                {this.props.loggedIn ?
                    <Redirect to="/home"/>
                    :
                    <div className="login">
                        <form onSubmit={this.handleLoginSubmit} className="loginForm">
                            <FormGroup controlId="username" bsSize="large" validationState={this.usernameValidation()}>
                                <FormControl autoFocus type="text" placeholder="Username" value={this.props.user.username}
                                    onChange={(e) => this.props.handleUsernameUpdated(e.target.value)}/>
                                <FormControl.Feedback />
                                    {this.usernameValidation() && <HelpBlock>{this.props.errorMsg}</HelpBlock>}
                            </FormGroup>
                            <FormGroup controlId="password" bsSize="large" validationState={this.passwordValidation()}>
                                <FormControl type="password" placeholder="Password" value={this.props.user.password}
                                    onChange={(e) => this.props.handlePasswordUpdated(e.target.value)}/>
                                <FormControl.Feedback />
                                    {this.passwordValidation() && <HelpBlock>{this.props.errorMsg}</HelpBlock>}
                            </FormGroup>
                            <Button block bsSize="large" disabled={this.disableSubmit()} type="submit">
                                {this.props.loggingIn ? 'Logging In...' : 'Login'}
                            </Button>
                            <LinkContainer to="/register">
                                <Button block bsSize="large" type="button">Register</Button>
                            </LinkContainer>
                        </form>
                    </div>
                }
            </div>
        )
    }

    handleLoginSubmit(e) {
        e.preventDefault();
        this.props.login(this.props.user.username, this.props.user.password);
    }

    disableSubmit() {
        return this.props.loggingIn || this.props.user.username === '' || this.props.user.password === '';
    }

    usernameValidation() {
        if (this.props.errorMsg && this.props.errorMsg.toLowerCase().includes('username')) {
            return 'error';
        }
        return null;
    }

    passwordValidation() {
        if (this.props.errorMsg && this.props.errorMsg.toLowerCase().includes('password')) {
            return 'error';
        }
        return null;
    }
}

const stateToPropertiesMapper = (state) => ({
    loggingIn: state.authReducer.loggingIn,
    user: state.authReducer.user,
    errorMsg: state.authReducer.errorMsg,
    loggedIn: state.authReducer.loggedIn
});

const dispatcherToPropsMapper = dispatch => ({
    login: (username, password) => login(dispatch, username, password),
    handleUsernameUpdated: (username) => handleUsernameUpdated(dispatch, username),
    handlePasswordUpdated: (password) => handlePasswordUpdated(dispatch, password)
});

const connectedLoginPage = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper
)(Login);

export { connectedLoginPage as Login };