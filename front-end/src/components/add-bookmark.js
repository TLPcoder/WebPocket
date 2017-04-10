"use strict";
import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import * as BookmarkAction from '../actions/bookmark-actions';
import * as Category from '../actions/category-actions';

class AddBookmark extends Component{
    constructor(){
        super();
        this.createBookmark = this.createBookmark.bind(this);
        this.renderBookmarks = this.renderBookmarks.bind(this);
    }
    createBookmark(){
        var bookmark_name = document.getElementById('bookmarkName').value;
        var url = document.getElementById('bookmarkURL').value;
        var category_id = this.props.store.currentCategory;
        axios.post(`http://localhost:8000/create/bookmark`,{
            bookmark_name: bookmark_name,
            url: url,
            category_id: category_id
        })
        .then((response)=> {
            this.props.actions.addBookmark(false);
            axios.get(`http://localhost:8000/API/bookmarks/category/${category_id}`)
            .then((response) => {
                console.log(response.data)
                this.renderBookmarks(this.props.store.currentCategory)
            });
        })
        .catch((error)=> {
            console.log(error);
        });
    }
    renderBookmarks(categoryId = this.props.store.currentCategory){
        var key = 0;
        axios.get(`http://localhost:8000/API/bookmarks/category/${categoryId}`)
        .then((response) => {
            var bookmarks = response.data.map((el) => {
                key++;
                return (<input key={key} type="button" className='button' id ={el.category_id} onClick={()=>{
                    var obj = {
                        name:el.bookmark_name,
                        url:el.url
                    }
                    this.props.actions.selectBookmark(obj)
                }} value={el.bookmark_name}/>)
            });
            this.props.actions.bookmarks(bookmarks);
            this.props.actions.currentCategory(categoryId);
            this.props.actions.clearCategory(bookmarks);
        });
    }
    render(){
        return(
            <div>
                <div id='add-bookmark'>
                    <br/>
                    <input id='bookmarkName' className = "add-bookmark-text" placeholder='Bookmark Name' type="text"/>
                    <br/>
                    <input type="text" id="bookmarkURL" placeholder='Bookmark URL'className = "add-bookmark-text"/>
                    <input type="button" className='add-bookmark-button' value="Create Bookmark" onClick={this.createBookmark}/>
                    <input type="button" value="Back" className='button-back' onClick={()=>{
                        this.props.actions.addBookmark(false);
                        }
                    }/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(store){
    return {store}
}

function mapDispatchToProps(dispatch){
    return {
        actions:bindActionCreators({...BookmarkAction,...Category},dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddBookmark)
