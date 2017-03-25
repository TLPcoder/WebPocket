"use strict";
import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as BookmarkAction from '../actions/bookmark-actions';
import * as CategoryAction from '../actions/category-actions';
import axios from 'axios';
import Bookmarks from './bookmarks';

class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Bookmarks/>
                <h1>Home</h1>
                <iframe src={this.props.store.selectedBookmark.url} frameBorder="0" width="800px" height='500px'></iframe>
                <br/>
                <a href={this.props.store.selectedBookmark.url}>{this.props.store.selectedBookmark.name}</a>
            </div>
        )
    }
}

function mapStateToProps(store){
    return {store}
}
function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(CategoryAction,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
