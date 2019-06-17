import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="bg-color">
                    {/* Background color for top half of the header */}
                </div>
                {/* Only render if a github username was passed through props */}
                {this.props.github !== '' &&
                    <div>
                        <div className="user-img-container">
                            <div className="user-img">
                                {/* Use the image from github */}
                                <img src={`https://github.com/${this.props.github}.png?size=116`} alt='' />
                            </div>
                        </div>
                        <div>
                            <h1>{this.props.name}</h1>
                        </div>
                    </div>
                }

            </header>

        );
    }
}

export default Header;