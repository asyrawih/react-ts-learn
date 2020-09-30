import React, { Component, ReactNode } from 'react';

interface Props  {
    children: ReactNode, //overiding
}

export class Form extends Component<Props>  {
    render() {
        return (
            <div className="form">
                {this.props.children}
            </div>
        );
    }
}