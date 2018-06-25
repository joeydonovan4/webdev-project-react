import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <Jumbotron>
                <h1>Welcome to SmartArt!</h1>
                <p>
                    This is SmartArt, a web application portal designed to show the collections of
                    the Harvard Art Museum. Search for a collection in the search bar above and create
                    an account to add to your favorites!
                </p>
                <p>
                    This website uses the Harvard Art Museum's API, "a REST-style service designed for developers who wish
                    to explore and integrate the museums' collections in their projects. The API provides direct access to the
                    data that powers the <a href="https://harvardartmuseums.org" target="_blank" rel="noopener noreferrer">museums' website</a> and many other aspects of the museums."
                </p>
            </Jumbotron>
        )
    }
}

const stateToPropertiesMapper = (state) => ({});

const dispatcherToPropsMapper = dispatch => ({});

const connectedHomePage = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper
)(Home);

export { connectedHomePage as Home };