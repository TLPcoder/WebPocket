"use strict";
import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as BookmarkAction from '../actions/bookmark-actions';
import axios from 'axios';

class Home extends Component{
    constructor(props){
        super(props);
        this.fitchData = this.fitchData.bind(this);
        this.fitchData();
    }
    fitchData(){
        axios.get(`http://localhost:8000/API/bookmarks/2`)
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
                    <h1>Home</h1>
                    <iframe src={this.props.store.bookmarks[0][0].url} frameborder="0" width="800px" height='500px'></iframe>
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
