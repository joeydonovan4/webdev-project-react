import React, { Component } from 'react';
import { Login } from '../containers/login/index';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Login />
            </div>
        );
    }
}
export default App;
