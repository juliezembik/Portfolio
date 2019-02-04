import React, { Component } from 'react';
import { connect } from 'react-redux';

class Adminpage extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            // description: '',
            // website: '',
            // github: '',
            // date_completed: '',
            // tag_id: '',
            
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const action = { type: 'ADD_PROJECTS', payload: this.state };
        this.props.dispatch(action);
    };

    // handleChange = (event) => {
    //     console.log(event.target.value);
    //     event.preventDefault();
    //     this.setState({
    //         name: event.target.value.name,
    //         description: event.target.value.description,
    //         thumbnail: event.target.value.thumbnail,
    //         website: event.target.value.website,
    //         github: event.target.value.github,
    //         date_completed: event.target.value.date_completed,
    //         tag_id: event.target.value.tag_id
    //     });
        
    // }
    // handle changes to name field
    handleName = (event) => {
        this.setState({
            ...this.state,
            name: event.target.value,
        });
    }

    


    
    render() {
        return (
            <div>
                {JSON.stringify(this.state)}
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" name="name" onChange={this.handleName} placeholder="Name" />
                    {/* <input type="text" name="description" value={this.state.description} placeholder="Description" />
                    <input type="text" name="website" value={this.state.website} placeholder="Website" />
                    <input type="text" name="github" value={this.state.github} placeholder="Github" />
                    <input type="text" name="date_completed" value={this.state.date_completed} placeholder="Date" />
                    <input type="text" name="tag_id" value={this.state.tag_id} placeholder="Language" /> */}
                    <button type="submit" value="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default connect()(Adminpage);