import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <div></div>
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