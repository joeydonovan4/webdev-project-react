import React, { Component } from 'react';
import { Navbar } from "../navbar/index";
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
            </div>
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