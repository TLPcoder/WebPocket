"use strict";
import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import * as BookmarkAction from '../actions/bookmark-actions';
import * as Category from '../actions/category-actions';

class DeleteCategory extends Component{
    constructor(){
        super();
        this.renderCategories = this.renderCategories.bind(this);
        this.createDeleteCategories = this.createDeleteCategories.bind(this);
        this.fitchData = this.fitchData.bind(this);
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
    renderCategories(){
        var key = 0;
        return this.props.store.category.map((el) => {
            key++;
            return (<input key={key} type="button" className='button' onClick={()=>{
                this.renderBookmarks(el.category_id)
            }} value={el.category_name}/>)
        });
    }
    createDeleteCategories(){
        var key = 0;
        return this.props.store.category.map((el) => {
            key++;
            return (<input key={key} type="button" className='button-delete' onClick={()=>{
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
    render(){
        return (
            <div id="main-window">
                <div>
                    <input style={{marginBottom:'3px'}} type="button" value="Back" className='button-back' onClick={()=>{
                            this.renderCategories()
                            this.props.actions.deleteCategory(false)
                        }
                    }/>
                <div id='window'>{this.createDeleteCategories()}</div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(store){
    return {store};
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators({...Category},dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DeleteCategory)
