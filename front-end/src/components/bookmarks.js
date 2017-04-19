"use strict";
import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import querystring from 'querystring';
import DeleteBookmarks from './delete-bookmarks';
import DeleteCategory from './delete-category';
import AddBookmark from './add-bookmark';
import AddCategory from './add-category';
import Categories from './categories';
import NoCategory from './no-category';
import DisplayBookmarks from './display-bookmarks';
import {bindActionCreators} from 'redux';
import * as BookmarkAction from '../actions/bookmark-actions';
import * as Category from '../actions/category-actions';

class Bookmarks extends Component{
    constructor(){
        super();
        this.fetchData = this.fetchData.bind(this);
    }
    fetchData(){
        var user_id = sessionStorage.getItem('id');
        axios.get(`http://localhost:8000/API/category/${user_id}`)
        .then((response) => {
            this.props.actions.updateCategory(response.data);
            if(response.data.length === 0){
                this.props.actions.noCategories(true);
            }
        });
    }
    componentWillMount(){
        this.fetchData();
    }
    render(){
        console.log("PROPS", this.props);
        if(this.props.store.category.length && !this.props.store.addCategory && !this.props.store.deleteCategory){
            return(
                <Categories/>
            )
        }else if(this.props.store.deleteCategory){
            return(<DeleteCategory/>)
        }else if(this.props.store.deleteBookmark){
            return(<DeleteBookmarks/>)
        }else if(this.props.store.addCategory){
            return(<AddCategory/>)
        }else if(this.props.store.addBookmark){
            return(<AddBookmark/>)
        }else if(this.props.store.noCategories){
            return(<NoCategory/>)
        }else{
            return(<DisplayBookmarks/>)
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
