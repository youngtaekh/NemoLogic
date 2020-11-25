import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Nemo from './../customView/Nemo'
import Button from './../customView/Button'
import { INIT, FILL, EMPTY } from './../Constant'

function Column(props) {

    return (
        <View style={{ flex: 1, flexDirection: "column" }}>
            <Nemo mode={props.mode} style={styles.nemo} row={0} column={props.column} />
            <Nemo mode={props.mode} style={styles.nemo} row={1} column={props.column} />
            <Nemo mode={props.mode} style={styles.nemo} row={2} column={props.column} />
            <Nemo mode={props.mode} style={styles.nemo} row={3} column={props.column} />
            <Nemo mode={props.mode} style={styles.nemo} row={4} column={props.column} />
        </View>
    );
}

export default class Five extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: FILL,
            fillButtonBackgroundColor: "#000000",
            fillButtonColor: "#ffffff",
            emptyButtonBackgroundColor: "#FFFFFF",
            emptyButtonColor: "#000000",
            table: [
                [INIT, INIT, INIT, INIT, INIT],
                [INIT, INIT, INIT, INIT, INIT],
                [INIT, INIT, INIT, INIT, INIT],
                [INIT, INIT, INIT, INIT, INIT],
                [INIT, INIT, INIT, INIT, INIT],
            ]
        }
    }

    _fill = () => {
        console.log("Fill")
        console.log(this.state.table[1][1])
        this.setState({
            mode: FILL,
            fillButtonBackgroundColor: "#000000",
            fillButtonColor: "#ffffff",
            emptyButtonBackgroundColor: "#FFFFFF",
            emptyButtonColor: "#000000"
        })
    }

    _empty = () => {
        console.log("Empty")
        this.setState({
            mode: EMPTY,
            fillButtonBackgroundColor: "#FFFFFF",
            fillButtonColor: "#000000",
            emptyButtonBackgroundColor: "#000000",
            emptyButtonColor: "#FFFFFF"
        })
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{
                    flex: 1,
                    flexDirection: "row",
                    backgroundColor: "#ffddff"
                }}>
                    <View style={{ flex: 3, backgroundColor: "#ddddff" }}></View>
                    <View style={{ flex: 5 }}></View>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: "row",
                }}>
                    <View style={{
                        flex: 3,
                        flexDirection: "column",
                        backgroundColor: "#ddffdd"
                    }}>
                    </View>
                    <Column mode={this.state.mode} column={0}/>
                    <Column mode={this.state.mode} column={1}/>
                    <Column mode={this.state.mode} column={2}/>
                    <Column mode={this.state.mode} column={3}/>
                    <Column mode={this.state.mode} column={4}/>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: "row",
                    backgroundColor: "#ddffff",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Button
                        title="FILL"
                        onPress={this._fill}
                        viewStyle={{
                            marginRight: 10,
                            backgroundColor: this.state.fillButtonBackgroundColor
                        }}
                        textStyle={{ color: this.state.fillButtonColor }} />
                    <Button
                        title="EMPTY"
                        onPress={this._empty}
                        viewStyle={{
                            backgroundColor: this.state.emptyButtonBackgroundColor
                        }}
                        textStyle={{ color: this.state.emptyButtonColor }} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    nemo: {
        flex: 1,
        borderWidth: 1
    }
});