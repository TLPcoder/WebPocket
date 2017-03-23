"use strict";
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as BookmarkAction from '../actions/bookmark-actions';
import * as Category from '../actions/category-actions';

class Bookmarks extends Component{
    constructor(){
        super();
        this.renderBookMarks = this.renderBookMarks.bind(this);
        this.renderCategories = this.renderCategories.bind(this);
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
                this.renderBookMarks(el)
            }} value={el[0].category_name}/>)
        });
    }
    renderBookMarks(arr){
        console.log(arr)
        var key = 0;
        var bookmarks = arr.map((el) => {
            key++;
            return (<input key={key} type="button" onClick={()=>{
                var obj = {
                    name:el.bookmark_name,
                    url:el.url
                }
                this.props.actions.selectBookmark(obj)
            }} value={el.bookmark_name}/>)
        });

        this.props.actions.changeCategory(bookmarks)
    }
    render(){
        console.log(this.props)
        if(!this.props.store.category.length){
            return(
                <div>{this.renderCategories()}</div>
            )
        }else{
            return(
                <div>
                    <input type="button" value="Categories" onClick={this.renderCategories}/>
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
