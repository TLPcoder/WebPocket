'use strict';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Login from "./components/login";
import Home from "./components/home";
import CreateAccount from './components/create-account'

class App extends Component {
    constructor(){
        super();
    }
    render() {
        console.log("store", this.props.store.page);
        if(this.props.store.page === 'login'){
            console.log('login');
            return (
                <div className="App">
                    <Login/>
                </div>
            );
        }
        if(this.props.store.page === 'home'){
            return (
                <div className="App">
                    <Home/>
                </div>
            );
        }
        if(this.props.store.page === 'create-account'){
            return (
                <div>
                    <CreateAccount/>
                </div>
            )
        }
    }
}

function mapStateToProps(store) {
    return { store };
}

// <PeopleContainer/>
export default connect(mapStateToProps)(App)
