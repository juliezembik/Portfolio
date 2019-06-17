import React, { Component } from 'react';
import Adminpage from './Adminpage';
import Admintable from './Admintable';
import { connect } from 'react-redux';


class Adminfront extends Component {
    render() {
        return (
            <div>
                <Adminpage />
                <br />
                {this.props.reduxState.projects.map((project) => {
                    return (
                        <Admintable key={project.id} project={project} />
                    )
                })}
            </div>
        );
    }
}


const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Adminfront);