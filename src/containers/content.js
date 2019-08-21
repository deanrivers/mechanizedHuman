import React, { Component } from 'react';


class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        let style = {
            background: this.props.color,
            padding: this.props.padding,
            zIndex: '1',
            color: this.props.color,
            float: this.props.float
        };

        let contentStyle = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "0%",
            height: "100%",
        }
        

        return (

            <div className="content-container" id={this.props.text}>
                <div className="description-container"></div>
                
                <div className="title-container" style={style}>
                    <p className="content-title" >{this.props.text}</p>
                </div>

                <div style={contentStyle}>
                    {this.props.content}
                </div>


            </div>
        );
    }
}
export default Content;