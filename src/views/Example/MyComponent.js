import React from "react";
class MyComponent extends React.Component {
    //key:value
    state = {
        name: 'Nhung',
        channel: 'Bao Phan'
    }
    /* 
    JSX => return is block
    fragment
    */

    render() {
        return (
            <>
                <div className="first">
                    Hello my component My name is {this.state.name}</div>
                <div className="second">
                    My youtube channel: {this.state.channel}
                </div>
            </>

        )
    }
}
export default MyComponent;