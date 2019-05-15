import React, { Component } from 'react';


class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        var style = {
            background: this.props.color,
            padding: this.props.padding,
            zIndex: '1',
            color: 'black',
            float: this.props.float
        };

        let contentStyle = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "1.5%"
        }

        return (

            <div className="content-container">
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