"use strict";
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginActions from '../actions/login-actions';

class Login extends Component{
    constructor(){
        super()
        this.login = this.login.bind(this);
    }
    login(){
        console.log("login", this.props)
        this.props.actions.login(true);
    }
    render() {
        console.log("props", this.props)
        return (
            <div>
            <h1>hello</h1>
            <button onClick={this.login}></button>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return { store };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(loginActions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
