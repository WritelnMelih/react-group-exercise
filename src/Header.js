import React from "react"

export default class TestingHeader extends React.Component{
    render() {
        return (
            <div>
                <h1>{this.props.test}</h1>
            </div>
        )
    }
}