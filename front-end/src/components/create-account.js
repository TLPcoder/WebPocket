'use strict';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as pageAction from '../actions/page-action';
import * as loginActions from '../actions/login-actions';
import {bindActionCreators} from 'redux';
import axios from 'axios';
import Navbar from './navbar';

class CreateAccount extends Component{
    constructor(){
        super();
        this.createUser = this.createUser.bind(this);
    }
    createUser(){
        var firstName = document.getElementById('first-name').value;
        var lastName = document.getElementById('last-name').value;
        var userName = document.getElementById('user-name').value;
        var email = document.getElementById('email').value;
        var hashedPassword = document.getElementById('hashed_password').value;
        axios.post(`http://localhost:8000/create/user`,{
            first_name:firstName,
            last_name:lastName,
            username:userName,
            email:email,
            hashed_password:hashedPassword
        })
        .then((response)=>{
            console.log('data', response.data);
            sessionStorage.setItem('id', response.data[0].id);
            this.props.actions.login(true);
            this.props.actions.page('home');
        })
    }
    render(){
        return(
            <div>
                <div className = 'background'></div>
                <Navbar/>
                <div id='create-account-window'>
                    <br/>
                    <input id='first-name' className='login-text' type="text" placeholder='First Name'/>
                    <br/>
                    <input id='last-name' className='login-text' type="text" placeholder='Last Name'/>
                    <br/>
                    <input id='user-name' className='login-text' type="text" placeholder='User Name'/>
                    <br/>
                    <input id='email' className='login-text' type="email" placeholder='Email'/>
                    <br/>
                    <input id='hashed_password' className='login-text' type="password" placeholder='password'/>
                    <br/>
                    <input className='login-button' type="button" value='submit' onClick={this.createUser}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(store){
    return {store};
}

function mapDispatchToProps(dispatch){
    return {
        actions:             bindActionCreators({...pageAction,...loginActions},dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateAccount)
