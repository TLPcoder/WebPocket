"use strict";
import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as BookmarkAction from '../actions/bookmark-actions';
import * as CategoryAction from '../actions/category-actions';
import axios from 'axios';
import Bookmarks from './bookmarks';
import Navbar from './navbar';

class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.store.selectedBookmark.url === '' || this.props.store.selectedBookmark.name === ''){
            return(
                <div>
                    <div className = 'background'></div>
                    <div className = "home-container">
                        <Navbar/>
                        <div className = "category-container">
                            <Bookmarks/>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
                <div>
                    <div className = 'background'></div>
                    <div className = "home-container">
                        <Navbar/>
                        <div className = "buttons-container">
                            <Bookmarks/>
                        </div>
                        <div >
                            <iframe className = "iframe"
                            src={this.props.store.selectedBookmark.url} frameBorder="0">SORRY THIS PAGE DOES NOT ALLOW iFRAMES</iframe>
                            <br/>
                            <a id = 'iframe-container' target='_blank' href={this.props.store.selectedBookmark.url}>{this.props.store.selectedBookmark.name}</a>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
// <a href="{BookingLink}&if=1&ifwidth=720" onClick={window.open(this.props.store.selectedBookmark.url, 'mywin',
// 'toolbar=0,menubar=0,scrollbars=1,height=600,width=720')}>Book online</a>

function mapStateToProps(store){
    return {store}
}
function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(CategoryAction,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
