import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login } from '../containers/login/index';
import { Home } from '../containers/home/index';
import { Search } from '../containers/search/index';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <Route exact path="/login" component={Login}/>
                    <Route path="/" component={Home}/>
                    <Route path="/search" component={Search}/>
                </div>
            </Router>
        );
    }
}
export default App;
