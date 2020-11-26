import * as React from 'react';
import { View, Text } from 'react-native';

import Tiles from './../customView/Tiles'
import Button from './../customView/Button'
import ToggleButton from './../customView/ToggleButton'
import { INIT, FILL, EMPTY } from './../Constant'
import { RowGuide, ColumnGuide, MockData } from './../MockData'

const SIZE = 10
var mStateMap = [];
var p = {
    a: 10,
    b: function () {
        console.log("b")
    }
};

function addNum(a, b) {
    return a + b;
}

var add = addNum

export default class Ten extends React.Component {
    constructor(props) {
        super(props)
        this._refreshMap = this._refreshMap.bind(this)
        this._printMap = this._printMap.bind(this)

        this.state = {
            mode: FILL,
            table: []
        }
    }

    componentDidMount() {
        console.log("componentDidMount")
        this._initMap()
        this._printMap()
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    componentDidCatch() {
        console.log("componentDidCatch")
    }

    _solve(i, j) {

    }

    _rowSolve1() {
        for (var i = 0; i < MockData.row.length; i++) {
            var total = MockData.row[i].length - 1
            for (var j = 0; j < MockData.row[i].length; j++) {
                total += MockData.row[i][j]
            }
            console.log("index : " + i + ", total : " + total)

            if (total == SIZE) {
                var index = 0
                for (var j = 0; j < MockData.row[i].length; j++) {
                    for (var k = index; k < MockData.row[i][j] + index; k++) {
                        console.log("i : " + i)
                        console.log("index : " + index)
                        mStateMap[i][k].state = FILL
                    }
                    index += MockData.row[i][j]
                    if (index < SIZE) {
                        mStateMap[i][index++].state = EMPTY
                    }
                }
            } else {
                var index=0
                for (var j=0;j<MockData.row[i].length;j++) {
                    if (MockData.row[i][j] > SIZE-total) {
                        for (var k=SIZE-total+index;k<MockData.row[i][j]+index;k++) {
                            mStateMap[i][k].state = FILL
                        }
                    }
                    index += MockData.row[i][j] + 1
                }
            }
        }
        this.setState({ table: mStateMap })
    }

    _columnSolve1() {
        for (var i = 0; i < MockData.column.length; i++) {
            var total = MockData.column[i].length - 1
            for (var j = 0; j < MockData.column[i].length; j++) {
                total += MockData.column[i][j]
            }
            console.log("index : " + i + ", total : " + total)

            if (total == SIZE) {
                var index = 0
                for (var j = 0; j < MockData.column[i].length; j++) {
                    for (var k = index; k < MockData.column[i][j] + index; k++) {
                        mStateMap[k][i].state = FILL
                    }
                    index += MockData.column[i][j]
                    if (index < SIZE) {
                        mStateMap[index++][i].state = EMPTY
                    }
                }
            } else {
                var index=0
                for (var j=0;j<MockData.column[i].length;j++) {
                    if (MockData.column[i][j] > SIZE-total) {
                        for (var k=SIZE-total+index;k<MockData.column[i][j]+index;k++) {
                            mStateMap[k][i].state = FILL
                        }
                    }
                    index += MockData.column[i][j] + 1
                }
            }
        }
        this.setState({ table: mStateMap })
    }

    _initMap() {
        mStateMap = []
        for (let i = 0; i < SIZE; i++) {
            var stateRow = [];
            for (let j = 0; j < SIZE; j++) {
                stateRow = [...stateRow, { id: i * 10 + j, state: INIT, done: false }]
            }
            mStateMap = [...mStateMap, stateRow]
        }
        this.setState({ table: mStateMap, })
    }

    _printMap() {
        console.log("state.table")
        for (let i = 0; i < this.state.table.length; i++) {
            let text = ''
            for (let j = 0; j < this.state.table[i].length; j++) {
                text += this.state.table[i][j].state + " | "
            }
            console.log(text)
        }
        console.log("mStateMap")
        for (let i = 0; i < mStateMap.length; i++) {
            let text = ''
            for (let j = 0; j < mStateMap[i].length; j++) {
                text += mStateMap[i][j].state + " | "
            }
            console.log(text)
        }
    }

    _fill = (x) => {
        console.log("Fill")
        console.log(x)

        this.setState({
            mode: FILL,
        })
    }

    _empty = () => {
        console.log("Empty")
        this.setState({
            mode: EMPTY,
        })
    }

    _refreshMap(i, j) {
        console.log("_refreshMap(" + i + ", " + j + ")")
        if (mStateMap[i][j].state == INIT) {
            mStateMap[i][j].state = this.state.mode
        } else {
            mStateMap[i][j].state = INIT
        }
        this.setState({ table: mStateMap })
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{ flex: 2, flexDirection: "row", backgroundColor: "#ffddff" }}>
                    <View style={{ width: '30%', backgroundColor: "#ddddff", borderBottomWidth: 1, borderEndWidth: 1 }}><Text>1</Text></View>
                    <View style={{ width: '70%' }}>
                        <ColumnGuide />
                    </View>
                </View>
                <View style={{ flex: 3, flexDirection: "row", }}>
                    <View style={{ width: '30%', flexDirection: "column", backgroundColor: "#ddffdd" }}>
                        <RowGuide />
                    </View>
                    <Tiles size={SIZE} map={this.state.table} refreshMap={this._refreshMap} />
                </View>
                <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#ddffff", alignItems: "center", justifyContent: "center" }}>
                    <ToggleButton
                        active={this.state.mode == FILL}
                        title="FILL"
                        onPress={() => this._fill(1)}
                        viewStyle={{ marginRight: 10 }}
                        textStyle={{ fontSize: 15 }} />
                    <ToggleButton
                        active={this.state.mode == EMPTY}
                        title="EMPTY"
                        onPress={this._empty}
                        viewStyle={{ marginRight: 10 }}
                        textStyle={{ fontSize: 15 }} />
                    <Button
                        title="PRINT"
                        onPress={this._printMap}
                        viewStyle={{ marginRight: 10 }}
                        textStyle={{ fontSize: 15 }} />
                    <Button
                        title="Row"
                        onPress={() => this._rowSolve1()}
                        viewStyle={{ marginRight: 10 }}
                        textStyle={{ fontSize: 15 }} />
                </View>
                <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#ddffdd", alignItems: "center", justifyContent: "center" }}>
                    <Button
                        title="Column"
                        onPress={() => this._columnSolve1()}
                        textStyle={{ fontSize: 15 }} />
                </View>
            </View>
        );
    }
}