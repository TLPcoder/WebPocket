"use strict";
import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as BookmarkAction from '../actions/bookmark-actions';
import axios from 'axios';
import Bookmarks from './bookmarks';

class Home extends Component{
    constructor(props){
        super(props);
        this.fitchData = this.fitchData.bind(this);
        this.fitchData();
    }
    fitchData(){
        var id = sessionStorage.getItem('id');
        axios.get(`http://localhost:8000/API/bookmarks/${id}`)
        .then((response) => {
            this.props.actions.bookmarks(response.data);
        });
    }
    render(){
        console.log("home props", this.props);
        if(this.props.store.bookmarks.length){
            console.log("url", this.props.store.bookmarks[0][0].url);
            return(
                <div>
                    <Bookmarks/>
                    <h1>Home</h1>
                    <iframe src={this.props.store.selectedBookmark.url} frameBorder="0" width="800px" height='500px'></iframe>
                    <br/>
                    <a href={this.props.store.selectedBookmark.url}>{this.props.store.selectedBookmark.name}</a>
                </div>
            )
        }else{
            return(
                <h1>thats not right</h1>
            )
        }
    }
}

function mapStateToProps(store){
    return {store}
}
function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(BookmarkAction,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
