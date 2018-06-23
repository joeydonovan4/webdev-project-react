import React, { Component } from 'react';
import { Navbar, Nav as Nav2, NavDropdown, InputGroup, FormControl, Button, DropdownButton, MenuItem } from "react-bootstrap";
import { connect } from 'react-redux';
import { findRecordsForType, queryUpdated, recordTypeUpdated } from '../../actions/search.actions';
import { setLoggedIn } from '../../actions/auth.actions';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { authService } from '../../services/auth.service';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.handleQueryUpdated = this.handleQueryUpdated.bind(this);
        this.handleRecordTypeUpdated = this.handleRecordTypeUpdated.bind(this);
    }

    componentDidMount() {
        this.getCurrentUser();
    }

    getCurrentUser() {
        authService.getCurrentUser()
            .then(response => {
                if (response.ok) {
                    response.json().then(user => {
                        if (user) {
                            this.props.setLoggedIn(true);
                        } else {
                            this.props.setLoggedIn(false);
                        }
                    });
                }
            });
    }

    handleSearchSubmit(e) {
        e.preventDefault();
        this.props.findRecordsForType(this.props.recordType, this.props.query);
    }

    handleQueryUpdated(e) {
        this.props.queryUpdated(e.currentTarget.value);
    }

    handleRecordTypeUpdated(e) {
        if (e !== this.props.recordType) {
            this.props.recordTypeUpdated(e);
        }
    }

    render() {
        return (
            <Navbar fixedTop fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/home">SmartArt</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav2 pullRight>
                        {this.props.loggedIn ?
                            <NavDropdown id="user-dropdown-loggedin" eventKey="user-dropdown-loggedin" title={<span><i className="fa fa-user fa-fw"></i></span>}>
                                <MenuItem eventKey="profile">Profile</MenuItem>
                                <MenuItem eventKey="logout">Logout</MenuItem>
                            </NavDropdown>
                            :
                            <NavDropdown id="user-dropdown-guest" eventKey="user-dropdown-guest" title={<span><i className="fa fa-user fa-fw"></i></span>}>
                                <MenuItem eventKey="login">Login</MenuItem>
                                <MenuItem eventKey="register">Register</MenuItem>
                            </NavDropdown>
                        }
                    </Nav2>
                    <Navbar.Form pullRight>
                        <InputGroup>
                            <DropdownButton
                                componentClass={InputGroup.Button}
                                id="search-type-dropdown"
                                title={this.props.recordType.replace(/^\w/, c => c.toUpperCase())}
                                onSelect={this.handleRecordTypeUpdated}>
                                <MenuItem eventKey="object" active={this.props.recordType === "object"}>Object</MenuItem>
                                <MenuItem eventKey="person" active={this.props.recordType === "person"}>Person</MenuItem>
                                <MenuItem eventKey="publication" active={this.props.recordType === "publication"}>Publication</MenuItem>
                                <MenuItem eventKey="exhibition" active={this.props.recordType === "exhibition"}>Exhibition</MenuItem>
                                <MenuItem eventKey="gallery" active={this.props.recordType === "gallery"}>Gallery</MenuItem>
                            </DropdownButton>
                            <FormControl type="text" placeholder="Search" value={this.props.query}
                                onChange={this.handleQueryUpdated}/>
                            <InputGroup.Button onClick={this.handleSearchSubmit}>
                                <LinkContainer to={"/search?q=" + this.props.query + "&recordType=" + this.props.recordType}>
                                    <Button disabled={!this.props.query}><span className="fa fa-search"></span></Button>
                                </LinkContainer>
                            </InputGroup.Button>
                        </InputGroup>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const stateToPropertiesMapper = (state) => ({
    query: state.searchReducer.query,
    recordType: state.searchReducer.recordType,
    loggedIn: state.authReducer.loggedIn
});

const dispatcherToPropsMapper = dispatch => ({
    findRecordsForType: (recordType, query) => findRecordsForType(dispatch, recordType, query),
    queryUpdated: (newQuery) => queryUpdated(dispatch, newQuery),
    recordTypeUpdated: (newRecordType) => recordTypeUpdated(dispatch, newRecordType),
    setLoggedIn: (loggedIn) => setLoggedIn(dispatch, loggedIn)
});

const connectedNavbar = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper
)(Nav);

export { connectedNavbar as Navbar };