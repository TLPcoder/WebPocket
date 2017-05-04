'use strict';
import React, {Component} from 'react';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';
import * as pageAction from '../actions/page-action';
import * as loginActions from '../actions/login-actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Navbar extends Component {
    constructor(props){
        super(props);
    }
    render() {
        if(this.props.store.page === 'login'){
            return(
                <div id="navbar">
                    <h1>WeB-PoCkEt</h1>
                    <button onClick={()=>{
                        sessionStorage.clear();
                        this.props.actions.login(false);
                        this.props.actions.page('create-account');
                    }}>Create Account</button>
                </div>
            )
        }
        if(this.props.store.page === 'create-account'){
            return(
                <div id="navbar">
                    <h1 style={{textAlign:'center'}}>WeB-PoCkEt</h1>
                </div>
            )
        }else{
            return (
                <div id="navbar">
                    <h1>WeB-PoCkEt</h1>
                    <button onClick={()=>{
                        sessionStorage.clear();
                        this.props.actions.login(false);
                        this.props.actions.page('login');
                        }}>Log Out</button>
                </div>
            );
        }
    }
}

function mapStateToProps(store){
    return {store};
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators({...pageAction,...loginActions}, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);
