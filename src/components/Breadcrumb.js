import React, { Component } from 'react';
import '../styles/Breadcrumb.css'

class Breadcrumb extends Component {
    render() {

        return (
            <div className="Breadcrumb">
                <div className="content-container">
                   {this.props.crumbs.join(" / ")}
                </div>
            </div>
        );
    }
}

export default Breadcrumb;