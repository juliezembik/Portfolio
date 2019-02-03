import React, { Component } from 'react';

class Adminpage extends Component {
    render() {
        return (
            <div>
                <form>
                    <input value="name">Project Name</input>
                    <input value="description">Description</input>
                    <input value="thumbnail">Thumbnail</input>
                    <input value="website">Website</input>
                    <input value="github">Github</input>
                    <input value="datecompleted">Date</input>
                    <input value="tag">Language Used</input>
                </form>
            </div>
        )
    }
}

export default Adminpage;