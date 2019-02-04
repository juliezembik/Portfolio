import React, { Component } from 'react';

class Adminpage extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            description: '',
            thumbnail: '',
            website: '',
            github: '',
            date_completed: '',
            tag_id: '',
            
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            name: event.target.value.name,
            description: event.target.value.description,
            thumbnail: event.target.value.thumbnail,
            website: event.target.value.website,
            github: event.target.value.github,
            date_completed: event.target.value.date_completed,
            tag_id: event.target.value.tag_id
        });
        
    }

    
    render() {
        return (
            <div>
                {JSON.stringify(this.state)}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value="name" placeholder="Name" />
                    <input type="text" value="description" placeholder="Description" />
                    <input type="text" value="thumbnail" placeholder="Thumbnail" />
                    <input type="text" value="website" placeholder="Website" />
                    <input type="text" value="github" placeholder="Github" />
                    <input type="text" value="date_completed" placeholder="Date" />
                    <input type="text" value="tag_id" placeholder="Language" />
                    <button type="submit" value="submit" handleChange={this.handleChange}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Adminpage;