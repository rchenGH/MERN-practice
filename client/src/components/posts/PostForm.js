import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addPost } from '../../actions/postActions'; 

class PostForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            text: '',
            errors: {}
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log('submit')
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    render() {
        const {errors } = this.state;
        
        return (
            <div class="post-form mb-3">
                <div class="card card-info">
                    <div class="card-header bg-info text-white">
                        Say Somthing...
                    </div>
                    <div class="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <TextAreaFieldGroup 
                                    placeholder="Create a post"
                                    name="text"
                                    value={this.state.text}
                                    onChange={this.onChange}
                                    error={errors.text}
                                />
                            </div>
                            <button type="submit" class="btn btn-dark">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostForm;