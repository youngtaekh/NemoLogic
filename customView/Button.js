import * as React from 'react'
import { TouchableHighlight, View, Text } from 'react-native'

import styles from './style'

class Button extends React.Component {
    render() {
        return(
            <TouchableHighlight onPress={this.props.onPress}>
                <View style={[styles.button, this.props.style]}>
                    <Text style={{ color: "#000000", fontSize: 32}}>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
}

export default Button;