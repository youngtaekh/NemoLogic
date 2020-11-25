import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

var mData = []

class MyComponent extends Component {
    render() {
        // console.log("key : " + this.props.key)
        // console.log("pass_in_data : " + this.props.pass_in_data)
        return (
            <View>
                <Text>key={this.props.key}</Text>
                <Text>data={this.props.pass_in_data.title}</Text>
                <Text>content={this.props.pass_in_data.content}</Text>
            </View>
        );
    }
}

export default class ArrayExample extends Component {
    // MyComponent() {
    //     return (
    //         <View>
    //             <Text>key={this.props.key}</Text>
    //             <Text>data={this.props.pass_in_data.title}</Text>
    //             <Text>content={this.props.pass_in_data.content}</Text>
    //         </View>
    //     );
    // }

    constructor(props) {
        super(props);

        this._handleAddButton = this._handleAddButton.bind(this);
        this._modifyButton = this._modifyButton.bind(this);

        this.state = {    /* initial your state. without any added component */
            data: []
        }
    }

    _handleAddButton() {
        // console.log(this.state.data.length)
        // if (this.state.data.length != 0) {
        //     console.log(this.state.data[0])
        //     console.log(this.state.data[this.state.data.length-1])
        //     console.log(this.state.data[this.state.data.length-1].title)
        //     console.log(this.state.data[this.state.data.length-1].content)
        // }
        let newly_added_data = { title: 'new title', content: 'new content goes here' };

        this.setState({
            data: [...this.state.data, newly_added_data]
        });
        mData = this.state.data;
    }

    _modifyButton() {
        let modified_data = { title: "modified title", content: "modified content" }
        this.state.data[0] = modified_data
        this.setState({
            data: [...this.state.data]
        });
    }

    render() {
        console.log(mData.length)
        if (mData.length != 0) {
            console.log(mData[0].title)
            console.log(mData[0].content)
        }
        let added_buttons_goes_here = this.state.data.map((data, index) => {
            // console.log("index : " + index)
            // console.log("data : " + data)
            return (
                <MyComponent key={index} pass_in_data={data} />
            )
        });

        return (
            <View>
                <Button title="Add more" onPress={this._handleAddButton} />
                <Button title="Modify" onPress={this._modifyButton} />
                {added_buttons_goes_here}
            </View>
        );
    }
}