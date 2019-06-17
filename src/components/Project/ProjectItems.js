import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Project.css';


class ProjectItems extends Component {
    render() {
        return (
            <div>
                    <div id="card-name">
                        <h2>{this.props.project.name}</h2> 
                    </div>


                    <div id="card">
                        <p>{this.props.project.description}</p>
                        <p>{this.props.project.thumbnail}</p>
                        <pre>{this.props.project.website}</pre>
                        <a href={this.props.project.github} >Github</a>
                        <pre>{this.props.project.date_completed}</pre>
                        <pre>{this.props.project.tag_id}</pre>
                    </div>
            </div>
        );
    }
}

export default connect()(ProjectItems);