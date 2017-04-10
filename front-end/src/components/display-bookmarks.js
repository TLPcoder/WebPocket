"use strict";
import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import * as BookmarkAction from '../actions/bookmark-actions';
import * as Category from '../actions/category-actions';

class DisplayBookmarks extends Component{
    constructor(){
        super();
        this.fitchData = this.fitchData.bind(this);
        this.createDeleteBookmarks = this.createDeleteBookmarks.bind(this);
    }
    fitchData(){
        var user_id = sessionStorage.getItem('id');
        axios.get(`http://localhost:8000/API/category/${user_id}`)
        .then((response) => {
            this.props.actions.updateCategory(response.data);
            if(response.data.length === 0){
                this.props.actions.noCategories(true);
            }
        });
    }
    createDeleteBookmarks(categoryId = this.props.store.currentCategory){
        var key = 0;
        axios.get(`http://localhost:8000/API/bookmarks/category/${categoryId}`)
        .then((response) => {
            console.log("hello there data", response.data)
            var bookmarks = response.data.map((el) => {
                key++;
                return (<input key={key} type="button" className='button-delete' id ={el.category_id} onClick={()=>{
                    axios.put(`http://localhost:8080/delete/bookmark`,{
                        bookmark_id:el.bookmark_id
                    }).then((response)=>{
                        console.log(response.data);
                        this.createDeleteBookmarks();
                    })
                }} value={el.bookmark_name}/>)
            });
            this.props.actions.bookmarks(bookmarks);
            this.props.actions.currentCategory(categoryId);
            this.props.actions.clearCategory(bookmarks);
        });
    }
    render(){
        return(
            <div id="main-window">
                <input type="button" className='button-control' value="Add Bookmark" onClick={()=>this.props.actions.addBookmark(true)}/>
                <input type="button" className='button-control-delete' value="Delete Bookmark" onClick={()=>{
                        this.props.actions.deleteBookmark(true);
                        this.createDeleteBookmarks();
                    }}/>
                <input type="button" className='button-control' value="Categories" onClick={()=>{
                        this.props.actions.clearBookmarks();
                        this.props.actions.currentCategory(false);
                        this.props.actions.selectBookmark({url:'', name:''})
                        this.fitchData();
                    }}/>
                <div id = "window">{this.props.store.bookmarks}</div>
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

export default connect(mapStateToProps,mapDispatchToProps)(DisplayBookmarks)
