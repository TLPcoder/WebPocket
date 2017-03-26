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
    setStyle(style){
        this.setState({style:style});
    }
    render(){
        var style;
        if(this.props.store.selectedBookmark.name){
            style ={
                textAlign: 'left',
                textDecoration: 'none',
                color: 'white',
                padding: '8px 15px',
                position: 'relative',
                left:'230px',
                top:'30px',
                fontSize: '25px',
                backgroundColor: '#CB3837',
                border: 'solid 1px #CB3837',
                webkitTransitionDuration: '.5s', /* Safari */
                transitionDuration: '.5s'
            };
        }
        return(
            <div>
                <div className = 'background'></div>
                <div className = "home-container">
                    <Navbar/>
                    <div className = "buttons-container">
                        <Bookmarks/>
                    </div>
                    <div >
                        <iframe className = "iframe" src={this.props.store.selectedBookmark.url} frameBorder="0" width="900px" height='600px'>SORRY THIS PAGE DOES NOT ALLOW iFRAMES</iframe>
                        <br/>
                        <a id = 'iframe-container' style={style} target='_blank'
                        href={this.props.store.selectedBookmark.url}>{this.props.store.selectedBookmark.name}</a>
                    </div>
                </div>
            </div>
        )
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
