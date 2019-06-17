import React, { Component } from 'react';
import Header from './Header';
// import ProjectList from '../Project/ProjectList';

class HeaderItem extends Component {
    // Renders the entire app on the DOM
    render() {
        return (
            <div className="App">
                <Header github={'juliezembik'} name={'Julie Zembik'} />
                {/* <ProjectList /> */}
            </div>
        );
    }
}

export default HeaderItem;
