'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import * as BookmarkAction from '../actions/bookmark-actions';
import * as Category from '../actions/category-actions';

class DeleteBookmarks extends Component{
    constructor(){
        super();
        this.renderBookmarks = this.renderBookmarks.bind(this);
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
                <div id="main-window">
                    <input style={{marginBottom:'3px'}}type="button" value="Back" className='button-back' onClick={()=>{
                            this.renderBookmarks()
                            this.props.actions.deleteBookmark(false);
                        }
                    }/>
                <div id='window'>{this.props.store.bookmarks}</div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(store){
    return {store};
}

function mapDispatchToProps(dispatch){
    return {actions: bindActionCreators({...BookmarkAction,...Category},dispatch)}
}

export default connect(mapStateToProps,mapDispatchToProps)(DeleteBookmarks)
