'use strict';
import React, {Component} from 'react';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';

export default class Navbar extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div id = "navbar">
                <h1>WeB-PoCkEt</h1>
            </div>
        );
    }
}
