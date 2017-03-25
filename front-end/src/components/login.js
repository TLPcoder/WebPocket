"use strict";
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginActions from '../actions/login-actions';
import * as pageAction from '../actions/page-action';


class Login extends Component{
    constructor(){
        super()
        this.login = this.login.bind(this);
        this.checkLogin = this.checkLogin.bind(this);
    }
    checkLogin(){
        var userName = document.getElementById('userName').value;
        var password = document.getElementById('password').value;
        fetch(`http://localhost:8000/login/${userName}`)
        .then((promise)=>{
            return promise.json();
        }).then((data) => {
            if(data.length){
                console.log('data', data);
                sessionStorage.setItem('id', data[0].id);
                this.props.actions.login(true);
                this.login();
            }else{
                alert('wrong username or password');
            }
        });
    }
    login(){
        if(this.props.store.login){
            this.props.actions.page('home');
        }
    }
    render() {
        console.log("props", this.props)
        return (
            <div>
            <h1>LOGIN</h1>
            <input id = "userName" type="text"/>
            <input id = "password" type="text"/>
            <button onClick={this.checkLogin}>Login</button>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return { store };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators({...pageAction,...loginActions},dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
