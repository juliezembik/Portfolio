import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectItems extends Component {
    render() {
        return (
            <div>
                <pre>{this.props.project.name}</pre>
                <p>{this.props.project.description}</p>
                <pre>{this.props.project.thumbnail}</pre>
                <pre>{this.props.project.website}</pre>
                <pre>{this.props.project.github}</pre>
                <pre>{this.props.project.date_completed}</pre>
                <pre>{this.props.project.tag_id}</pre>

            </div>
        );
    }
}

export default ProjectItems;