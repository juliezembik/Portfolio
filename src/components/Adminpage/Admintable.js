import React, { Component } from 'react';
import { connect } from 'react-redux';

class Admintable extends Component {
    render() {
        return (
            <table>
                {JSON.stringify(this.props.reduxState.projects)}
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
                
            </table>
        );
    }
}


export default connect()(Admintable);