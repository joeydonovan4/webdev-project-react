import React, { Component } from 'react';
import { Navbar, InputGroup, FormControl, Button, DropdownButton, MenuItem } from "react-bootstrap";
import { connect } from 'react-redux';
import { findRecordsForType, queryUpdated, recordTypeUpdated } from '../../actions/search.actions';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.handleQueryUpdated = this.handleQueryUpdated.bind(this);
        this.handleRecordTypeUpdated = this.handleRecordTypeUpdated.bind(this);
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
                    <Navbar.Brand>SmartArt</Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
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
                            <InputGroup.Button>
                                <Button disabled={!this.props.query} onClick={this.handleSearchSubmit}><span className="fa fa-search"></span></Button>
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
    recordType: state.searchReducer.recordType
});

const dispatcherToPropsMapper = dispatch => ({
    findRecordsForType: (recordType, query) => findRecordsForType(dispatch, recordType, query),
    queryUpdated: (newQuery) => queryUpdated(dispatch, newQuery),
    recordTypeUpdated: (newRecordType) => recordTypeUpdated(dispatch, newRecordType)
});

const connectedNavbar = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper
)(Nav);

export { connectedNavbar as Navbar };