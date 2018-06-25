import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findAllUsers } from '../../actions/admin.actions';
import { Redirect } from 'react-router-dom';
import { PageHeader, Grid, Row, Col, Panel, Table } from 'react-bootstrap';

class Admin extends Component {
    componentDidMount() {
        this.props.findAllUsers();
    }

    renderUsers() {
        if (this.props.users) {
            return this.props.users.map(user => {
                return (
                    <tr key={user._id}>
                        <th>{user._id}</th>
                        <th>{user.username}</th>
                        <th>{user.email}</th>
                        <th>{user.name.firstName}</th>
                        <th>{user.name.lastName}</th>
                    </tr>
                )
            })
        }
    }

    render() {
        return (
            <div>
                {!this.props.loggedIn ?
                    <Redirect to="/home"/>
                    :
                    <div style={{marginTop: 60}}>
                        <PageHeader>
                            Admin
                        </PageHeader>
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <Panel>
                                        <Panel.Heading>
                                            <Panel.Title componentClass="h1" style={{color: 'white'}}>Users</Panel.Title>
                                        </Panel.Heading>
                                        <Panel.Body>
                                            <Table striped condensed hover>
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Username</th>
                                                        <th>Email</th>
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.renderUsers()}
                                                </tbody>
                                            </Table>
                                        </Panel.Body>
                                    </Panel>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                }
            </div>
        )
    }
}

const stateToPropertiesMapper = (state) => ({
    users: state.adminReducer.users,
    currentUser: state.authReducer.user,
    loggedIn: state.authReducer.loggedIn
});

const dispatcherToPropsMapper = dispatch => ({
    findAllUsers: () => findAllUsers(dispatch)
});

const connectedAdmin = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper
)(Admin);

export { connectedAdmin as Admin };