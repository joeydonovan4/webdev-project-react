import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { Login } from '../containers/login/index';
import { Home } from '../containers/home/index';
import { Search } from '../containers/search/index';
import { Navbar } from '../containers/navbar/index';
import { Profile } from '../containers/profile/index';
import { Register } from '../containers/register/index';
import { Admin } from '../containers/admin/index';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Route path="/" component={Navbar}/>
                    <Switch>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                        <Route path="/search" component={Search}/>
                        <Route exact path="/profile" component={Profile}/>
                        <Route exact path="/admin" component={Admin}/>
                        <Route path="/home" component={Home}/>
                        <Redirect to="/home"/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;