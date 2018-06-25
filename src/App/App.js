import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Login } from '../containers/login/index';
import { Home } from '../containers/home/index';
import { Search } from '../containers/search/index';
import { Navbar } from '../containers/navbar/index';
import { Profile } from '../containers/profile/index';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/(login)" component={LoginContainer}/>
                    <Route component={DefaultContainer}/>
                </Switch>
            </Router>
        );
    }
}
export default App;

const LoginContainer = () => (
    <div className="container">
        <Route exact path="/" render={() => <Redirect to="/login" />}/>
        <Route path="/login" component={Login}/>
    </div>
)

const DefaultContainer = () => (
    <div className="container">
        <Navbar />
        <Route path="/" component={Home}/>
        <Route path="/search" component={Search}/>
        <Route path="/profile" component={Profile}/>
    </div>
)
