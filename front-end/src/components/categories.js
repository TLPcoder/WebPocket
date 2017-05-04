"use strict";
import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import * as BookmarkAction from '../actions/bookmark-actions';
import * as Category from '../actions/category-actions';

class Categories extends Component {
    constructor() {
        super();
        this.renderCategories = this.renderCategories.bind(this);
        this.renderBookmarks = this.renderBookmarks.bind(this);
    }
    renderCategories() {
        var key = 0;
        return this.props.store.category.map((el) => {
            key++;
            return (<input key={key} type="button" className='button' onClick={() => {
                this.renderBookmarks(el.category_id)
            }} value={el.category_name}/>)
        });
    }
    renderBookmarks(categoryId = this.props.store.currentCategory) {
        var key = 0;
        axios.get(`http://localhost:8000/API/bookmarks/category/${categoryId}`).then((response) => {
            console.log("hello there data", response.data)
            var bookmarks = response.data.map((el) => {
                key++;
                return (<input key={key} type="button" className='button' id ={el.category_id} onClick={() => {
                    var obj = {
                        name: el.bookmark_name,
                        url: el.url
                    }
                    this.props.actions.selectBookmark(obj)
                }} value={el.bookmark_name}/>)
            });
            this.props.actions.bookmarks(bookmarks);
            this.props.actions.currentCategory(categoryId);
            this.props.actions.clearCategory(bookmarks);
        });
    }
    render() {
        return (
            <div id="main-window">
                <input type="button" value="Add Category" className='button-control' onClick={() => {
                    console.log("hello");
                    this.props.actions.addCategory(true);
                }}/>
                <input type="button" value="Delete Category" className='button-control-delete' onClick={() => {
                    console.log("hello");
                    this.props.actions.deleteCategory(true);
                }}/>
                <div id='window'>{this.renderCategories()}</div>
            </div>
        )
    }
}

function mapStateToProps(store) {
    return {store};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...Category,
            ...BookmarkAction
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
