import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectItems from './ProjectItems';

class ProjectList extends Component {
    componentDidMount() {
        this.getProject();
    }

    getProject = () => {
        const action = { type: 'GET_PROJECTS' };
        this.props.dispatch(action);
    }

    render() {
        return (
            <div>
                <h3>Project List</h3>
                {/* {JSON.stringify(this.props.reduxState.projects)} */}
                {this.props.reduxState.projects.map((project) => {
                    return (
                        <ProjectItems key={project.id} project={project} />
                    )
                })}
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(ProjectList);