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
        this.createCategory = this.createCategory.bind(this);
        this.fitchData = this.fitchData.bind(this);
        this.createDeleteBookmarks = this.createDeleteBookmarks.bind(this);
        this.createDeleteCategories = this.createDeleteCategories.bind(this);
        this.fitchData();
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
    createDeleteCategories(){
        var key = 0;
        return this.props.store.category.map((el) => {
            key++;
            return (<input key={key} type="button" onClick={()=>{
                axios.put(`http://localhost:8000/delete/category`,{
                    category_id:el.category_id
                }).then((response)=>{
                    console.log(response.data);
                    this.fitchData();
                    this.createDeleteCategories();
                })
            }}  value={el.category_name}/>)
        });
    }
    renderCategories(){
        var key = 0;
        return this.props.store.category.map((el) => {
            key++;
            return (<input key={key} type="button" onClick={()=>{
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
                return (<input key={key} type="button" id ={el.category_id} onClick={()=>{
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
    createDeleteBookmarks(categoryId = this.props.store.currentCategory){
        var key = 0;
        axios.get(`http://localhost:8000/API/bookmarks/category/${categoryId}`)
        .then((response) => {
            console.log("hello there data", response.data)
            var bookmarks = response.data.map((el) => {
                key++;
                return (<input key={key} type="button" id ={el.category_id} onClick={()=>{
                    axios.put(`http://localhost:8000/delete/bookmark`,{
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
    createBookmark(){
        console.log("fuck");
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
    createCategory(){
        var category_name = document.getElementById('addCategory').value;
        var user_id = sessionStorage.getItem('id');

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
    render(){
        console.log("PROPS", this.props)
        if(this.props.store.category.length && !this.props.store.addCategory && !this.props.store.deleteCategory){
            return(
                <div>
                    <input type="button" value="Add Category" onClick={() => {
                        console.log("hello");
                        this.props.actions.addCategory(true);
                    }}/>
                <input type="button" value="Delete Category" onClick={() => {
                        console.log("hello");
                        this.props.actions.deleteCategory(true);
                    }}/>
                    <div>{this.renderCategories()}</div>
                </div>
            )
        }else if(this.props.store.deleteCategory){
            return(
                <div>
                    <div>
                        <input type="button" value="Back" onClick={()=>{
                                this.renderCategories()
                                this.props.actions.deleteCategory(false)
                            }
                        }/>
                        <div>{this.createDeleteCategories()}</div>
                    </div>
                </div>
            )
        }
        else if(this.props.store.deleteBookmark){
            return(
                <div>
                    <div>
                        <input type="button" value="Back" onClick={()=>{
                                this.renderBookmarks()
                                this.props.actions.deleteBookmark(false);
                            }
                        }/>
                        <div>{this.props.store.bookmarks}</div>
                    </div>
                </div>
            )
        }else if(this.props.store.addCategory){
            return(
                <div>
                    <div>
                        <label htmlFor="">New Category</label>
                        <input type="text" id="addCategory"/>
                        <input type="button" value="Create Category" onClick={this.createCategory}/>
                    </div>
                    <div>
                        <input type="button" value="Add Category"/>
                        <div>{this.renderCategories()}</div>
                    </div>
                </div>
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
        }else if(this.props.store.noCategories){
            return(
                <div>
                    <label htmlFor="">New Category</label>
                    <input type="text" id="addCategory"/>
                    <input type="button" value="Create Category" onClick={this.createCategory}/>
                </div>
            )
        }else{
            return(
                <div>
                    <input type="button" value="Categories" onClick={()=>{
                            this.props.actions.clearBookmarks();
                            this.props.actions.currentCategory(false);
                            this.fitchData();
                        }}/>
                    <input type="button" value="Add Bookmark" onClick={()=>this.props.actions.addBookmark(true)}/>
                    <input type="button" value="Delete Bookmark" onClick={()=>{
                            this.props.actions.deleteBookmark(true);
                            this.createDeleteBookmarks();
                        }}/>
                    <div>{this.props.store.bookmarks}</div>
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
