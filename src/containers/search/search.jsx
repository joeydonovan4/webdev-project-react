import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findRecordsForType } from '../../actions/search.actions';

class Search extends Component {
    render() {
        
    }
}

const stateToPropertiesMapper = (state) => ({
    records: state.stateReducer.records,
    errorMsg: state.searchReducer.errorMsg
});

const dispatcherToPropsMapper = dispatch => ({
    findRecordsForType: (recordType) =>
        findRecordsForType(dispatch, recordType)
});

const connectedSearchPage = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper
)(Search);

export { connectedSearchPage as Search };