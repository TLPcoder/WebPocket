"use strict";
import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import querystring from 'querystring';
import {bindActionCreators} from 'redux';
import * as BookmarkAction from '../actions/bookmark-actions';
import * as Category from '../actions/category-actions';

class Bookmarks extends Component{
    constructor(){
        super();
        this.renderBookmarks = this.renderBookmarks.bind(this);
        this.renderCategories = this.renderCategories.bind(this);
        this.createBookmark = this.createBookmark.bind(this);
    }
    renderCategories(){
        console.log(this.props)
        var key = 0;
        if(this.props.store.category.length){
            this.props.actions.clearBookmarks();
        }
        return this.props.store.bookmarks.map((el) => {
            key++;
            return (<input key={key} type="button" onClick={()=>{
                this.renderBookmarks(el)
            }} value={el[0].category_name}/>)
        });
    }
    renderBookmarks(arr){
        console.log(arr)
        var key = 0;
        var bookmarks = arr.map((el) => {
            key++;
            return (<input key={key} type="button" id ={el.category_id} onClick={()=>{
                var obj = {
                    name:el.bookmark_name,
                    url:el.url
                }
                this.props.actions.selectBookmark(obj)
            }} value={el.bookmark_name}/>)
        });

        this.props.actions.changeCategory(bookmarks)
    }
    createBookmark(){
        var bookmark_name = document.getElementById('bookmarkName').value;
        var url = document.getElementById('bookmarkURL').value;
        var category_id = this.props.store.category[0].props.id;
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
                this.renderBookmarks(response.data);
            });
        this.renderBookmarks()
        })
        .catch((error)=> {
            console.log(error);
        });

    }
    render(){
        console.log(this.props)
        if(!this.props.store.category.length){
            return(
                <div>{this.renderCategories()}</div>
            )
        }else if(this.props.store.addBookmark){
            return(
                <div>
                    <div id='addBookmark'>
                        <label htmlFor="">Name</label>
                        <input id='bookmarkName' type="text"/>
                        <label htmlFor="">URL</label>
                        <input type="text" id="bookmarkURL"/>
                        <input type="button" value="Create Bookmark" onClick={this.createBookmark}/>
                    </div>
                    <div>
                        <input type="button" value="Categories" onClick={this.renderCategories}/>
                        <input type="button" value="Add Bookmark"/>
                        <div>{this.props.store.category}</div>
                    </div>
                </div>
            )
        }else{
            return(
                <div>
                    <input type="button" value="Categories" onClick={this.renderCategories}/>
                    <input type="button" value="Add Bookmark" onClick={()=>this.props.actions.addBookmark(true)}/>
                    <div>{this.props.store.category}</div>
                </div>
            )
        }
    }
}

function mapStateToProps(store){
    return {store};
}

function mapDispatchToProps(dispatch){
    return {actions: bindActionCreators({...BookmarkAction,...Category},dispatch)}
}
export default connect(mapStateToProps,mapDispatchToProps)(Bookmarks);
