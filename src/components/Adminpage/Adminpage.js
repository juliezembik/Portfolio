import React, { Component } from 'react';
import { connect } from 'react-redux';

class Adminpage extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            description: '',
            website: '',
            github: '',
            date_completed: '',
            tag_id: '',
            
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const action = { type: 'ADD_PROJECTS', payload: this.state };
        this.props.dispatch(action);
    };

    // handle changes to name field
    handleName = (event) => {
        this.setState({
            ...this.state,
            name: event.target.value,
        });
    }

    handleDescription = (event) => {
        this.setState({
            ...this.state,
            description: event.target.value,
        })
    }

    handleWebsite = (event) => {
        this.setState({
            ...this.state,
            website: event.target.value,
        })
    }

    handleGithub = (event) => {
        this.setState({
            ...this.state,
            github: event.target.value,
        })
    }

    handleDate = (event) => {
        this.setState({
            ...this.state,
            date_completed: event.target.value,
        })
    }
    
    handleTag = (event) => {
        this.setState({
            ...this.state,
            tag_id: event.target.value,
        })
    }


    
    render() {
        return (
            <div>
                {JSON.stringify(this.state)}
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" name="name" onChange={this.handleName} placeholder="Name" />
                    <input type="text" name="description" onChange={this.handleDescription} placeholder="Description" />
                    <input type="text" name="website" onChange={this.handleWebsite} placeholder="Website" />
                    <input type="text" name="github" onChange={this.handleGithub} placeholder="Github" />
                    <input type="date" name="date_completed" onChange={this.handleDate} placeholder="Date" />
                    <input type="text" name="tag_id" onChange={this.handleTag} placeholder="Language" />
                    <button type="submit" value="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default connect()(Adminpage);