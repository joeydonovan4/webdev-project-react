import React, { Component } from 'react';
import { Navbar, InputGroup, FormControl, Button } from "react-bootstrap";
import { connect } from 'react-redux';

class Nav extends Component {
    render() {
        return (
            <Navbar fixedTop fluid>
                <Navbar.Header>
                    <Navbar.Brand>SmartArt</Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullRight>
                        <InputGroup>
                            <FormControl type="text" placeholder="Search"/>
                            <InputGroup.Button>
                                <Button type="submit"><span className="fa fa-search"></span></Button>
                            </InputGroup.Button>
                        </InputGroup>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const stateToPropertiesMapper = (state) => ({});

const dispatcherToPropsMapper = dispatch => ({});

const connectedNavbar = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper
)(Nav);

export { connectedNavbar as Navbar };