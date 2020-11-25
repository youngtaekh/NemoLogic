import React, { Component } from 'react'
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native'

class ModifiedNemo extends Component {
    constructor(props) {
        super(props)
        this._onPress = this._onPress.bind(this)
    }

    _onPress() {
        this.props.refreshMap(this.props.row, this.props.column)
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this._onPress}>
                <View
                    style={[ styles.main, this.props.style]}>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        borderBottomWidth: 1,
        borderEndWidth: 1
    }
})

export default ModifiedNemo;