import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Button from './../customView/Button'

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <Text>The water would boil.</Text>;
    }
    return <Text>The water would not boil.</Text>;
  }

export default class Fifteen extends Component {
    constructor(props) {
        super(props)
        this.state = { temperature: 100 }
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <View>
                <Text>
                    Fifteen!!
            </Text>
                <TextInput
                    value={this.state.temperature}
                    onChangeText={text => this.setState({temperature: text})} />
                    <BoilingVerdict celsius={parseFloat(this.state.temperature)} />
            </View>
        );
    }
}