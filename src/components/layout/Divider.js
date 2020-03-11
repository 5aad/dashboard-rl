import React, { Component } from 'react';

export class Divider extends Component {
    render() {
        return (
            <svg className={this.props.className || null} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 4">
                <polygon points="0 0 100 4 0 4 0 0" />
            </svg>
        );
    }
}

export default Divider;
