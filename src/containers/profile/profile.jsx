import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import picture from '../../blank-profile-picture.png';
import { LinkContainer } from 'react-router-bootstrap';
import { PageHeader, Grid, Col, Row, ListGroup, ListGroupItem, Panel, Image, Button } from 'react-bootstrap';

class Profile extends Component {
    render() {
        let user = this.props.currentUser;
        return (
            <div>
                {!this.props.loggedIn ? <Redirect to="/home"/> :
                <div style={{marginTop: 60}}>
                    <PageHeader style={{display: 'inline-block', marginTop: 0}}>
                        {user.username}
                    </PageHeader>
                    {this.props.currentUser.admin &&
                        <LinkContainer to="/admin">
                            <Button type="button" className="pull-right">Admin</Button>
                        </LinkContainer>
                    }
                    <Grid>
                        <Row>
                            <Col xs={4}>
                                <Image src={picture} responsive rounded/>
                            </Col>
                            <Col xs={8}>
                                <Panel>
                                    <Panel.Heading>
                                        <Panel.Title>Information</Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Body>
                                        <ListGroup>
                                            <ListGroupItem header="Username">{user.username}</ListGroupItem>
                                            <ListGroupItem header="First Name">{user.name.firstName}</ListGroupItem>
                                            <ListGroupItem header="Last Name">{user.name.lastName}</ListGroupItem>
                                            <ListGroupItem header="Email">{user.email}</ListGroupItem>
                                        </ListGroup>
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
    loggedIn: state.authReducer.loggedIn,
    currentUser: state.authReducer.user
});

const dispatcherToPropsMapper = dispatch => ({
});

const connectedProfile = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper
)(Profile);

export { connectedProfile as Profile };