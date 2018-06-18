import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login } from '../containers/login/index';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <Route exact path="/login" component={Login}/>
                </div>
            </Router>
        );
    }
}
export default App;
