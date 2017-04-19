"use strict";
import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import * as BookmarkAction from '../actions/bookmark-actions';
import * as Category from '../actions/category-actions';

class NoCategory extends Component{
    constructor(){
        super();
        this.createCategory = this.createCategory.bind(this);
        this.renderCategories = this.renderCategories.bind(this);
        this.renderBookmarks = this.renderBookmarks.bind(this);
    }
    createCategory(){
        var category_name = document.getElementById('add-category-text').value;
        var user_id = sessionStorage.getItem('id');
        console.log('safjasldkjf', category_name);
        axios.post(`http://localhost:8000/create/category`,{
            category_name: category_name,
            user_id: user_id,
        })
        .then((response)=>{
            this.props.actions.addCategory(false);
            axios.get(`http://localhost:8000/API/category/${user_id}`)
            .then((response) => {
                this.props.actions.updateCategory(response.data);
                this.props.actions.noCategories(false);
                this.renderCategories();
            });
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    renderCategories(){
        var key = 0;
        return this.props.store.category.map((el) => {
            key++;
            return (<input key={key} type="button" className='button' onClick={()=>{
                this.renderBookmarks(el.category_id)
            }} value={el.category_name}/>)
        });
    }
    renderBookmarks(categoryId = this.props.store.currentCategory){
        var key = 0;
        axios.get(`http://localhost:8000/API/bookmarks/category/${categoryId}`)
        .then((response) => {
            console.log("hello there data", response.data)
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
            <div id="main-window" style={{paddingBottom:'20px'}}>
                <br/>
                <input type="text" id="add-category-text" className="add-category-text" placeholder='Category Name'/>
                <input type="button" className='button-add' value="Create Category" onClick={this.createCategory}/>
            </div>
        )
    }
}

function mapStateToProps(store){
    return {store}
}

function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators({...BookmarkAction,...Category},dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NoCategory)
