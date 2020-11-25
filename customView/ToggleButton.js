import React, { Component } from 'react'
import { View, TouchableWithoutFeedback, Text, StyleSheet } from 'react-native'

export default class ToggleButton extends Component {
    render() {
        if (this.props.active) {
            return (
                <TouchableWithoutFeedback onPress={this.props.onPress}>
                    <View style={[styles.active, this.props.viewStyle]}>
                        <Text style={[styles.activeText, this.props.textStyle]}>{this.props.title}</Text>
                    </View>
                </TouchableWithoutFeedback>
            );
        } else {
            return (
                <TouchableWithoutFeedback onPress={this.props.onPress}>
                    <View style={[styles.inactive, this.props.viewStyle]}>
                        <Text style={[styles.inactiveText, this.props.textStyle]}>{this.props.title}</Text>
                    </View>
                </TouchableWithoutFeedback>
            );
        }
    }
}

const styles = StyleSheet.create({
    active: {
        backgroundColor: "#000000",
        padding: 15,
        borderRadius: 10
    },
    activeText: {
        color: "#FFFFFF"
    },
    inactive: {
        backgroundColor: "#FFFFFF",
        padding: 15,
        borderRadius: 10
    },
    inactiveText: {
        color: "#000000"
    }
})