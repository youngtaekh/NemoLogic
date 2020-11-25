import React, { Component } from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'

import { INIT, FILL, EMPTY } from './../Constant'

class Nemo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mode: INIT,
            backgroundColor: "#FFFFFF"
        }
    }

    _onPress = () => {
        console.log(this.newComp)
        console.log(this.newComp._internalFiberInstanceHandleDEV._debugID)
        console.log("Row is " + this.props.row + ", Column is " + this.props.column)
        if (this.state.mode == INIT) {
            console.log("INIT")
            if (this.props.mode == FILL) {
                this.setState({
                    mode: FILL,
                    backgroundColor: "#000000"
                })
            } else {
                this.setState({
                    mode: EMPTY,
                    backgroundColor: "#FF0000"
                })
            }
        } else {
            console.log("NOT INIT")
            this.setState({
                mode: INIT,
                backgroundColor: "#FFFFFF"
            })
        }
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this._onPress}>
                <View
                    ref={component => this.newComp = component}
                    style={[
                        this.props.style,
                        { backgroundColor: this.state.backgroundColor }
                    ]}>

                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default Nemo;