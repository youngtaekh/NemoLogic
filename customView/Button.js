import * as React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

import styles from './style'

class Button extends React.Component {
    render() {
        return(
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={[styles.button, this.props.viewStyle]}>
                    <Text style={[{ color: "#000000", fontSize: 32}, this.props.textStyle]}>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default Button;