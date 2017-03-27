"use strict";
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import * as loginActions from '../actions/login-actions';
import * as pageAction from '../actions/page-action';
import Navbar from './navbar';

class Login extends Component{
    constructor(){
        super()
        this.checkLogin = this.checkLogin.bind(this);
    }
    checkLogin(){
        var userName = document.getElementById('userName').value;
        var password = document.getElementById('password').value;
        axios.post(`http://localhost:8000/login/`,{
            user_name:userName,
            hashed_password:password
        })
        .then((response)=>{
            if(response.data.length){
                console.log('data', response.data);
                sessionStorage.setItem('id', response.data[0].id);
                this.props.actions.login(true);
                this.props.actions.page('home');
            }else{
                alert('wrong username or password');
            }
        });
    }
    render() {
        console.log("props", this.props)
        return (
            <div>
                <div className = 'background'></div>
                <Navbar/>
                <div id='login-window'>
                    <br/>
                    <input className = 'login-text' id = "userName" type="text" placeholder='User Name'/>
                    <br/>
                    <input className = 'login-text' id = "password" type="password" placeholder='Password'/>
                    <br/>
                    <button className='login-button' onClick={this.checkLogin}>Login</button>
                </div>
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
