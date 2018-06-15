import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { login, handleUsernameUpdated, handlePasswordUpdated } from '../../actions/auth.actions';

class Login extends Component {
    constructor(props) {
        super(props);

        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.disableSubmit = this.disableSubmit.bind(this);
    }
    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <Form>
                    <FormGroup controlId="username">
                        <Col componentClass={ControlLabel} sm={2}>
                            Username
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="Username" value={this.props.user.username}
                                onChange={(e) => this.props.handleUsernameUpdated(e.target.value)}/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="password">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password" value={this.props.user.password}
                                onChange={(e) => this.props.handlePasswordUpdated(e.target.value)}/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button bsStyle="primary" type="submit" disabled={this.disableSubmit()} onClick={this.handleLoginSubmit}>Sign in</Button>
                            <Button bsStyle="link" type="button" >Register</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }

    handleLoginSubmit(e) {
        e.preventDefault();
        this.props.login(this.props.user.username, this.props.user.password);
    }

    disableSubmit() {
        return this.props.user.username === '' || this.props.user.password === '';
    }
}

const stateToPropertiesMapper = (state) => ({
    loggingIn: state.authReducer.loggingIn,
    user: state.authReducer.user
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