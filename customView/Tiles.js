import React from 'react';
import { View } from 'react-native';
import ModifiedNemo from '../customView/ModifiedNemo';
import { INIT, FILL, EMPTY } from './../Constant'

function Rows(props) {
    var rows = []
    for (var i = 0; i < props.size; i++) {
        if (props.map[props.row][i].state == INIT) {
            rows.push(
                <ModifiedNemo key={props.row * 10 + i} row={props.row} column={i} mode={INIT} size={props.size}
                style={{ flex: 1, backgroundColor: "#FFFFFF" }}
                refreshMap={props.refreshMap} />
            )
        } else if (props.map[props.row][i].state == FILL) {
            rows.push(
                <ModifiedNemo key={props.row * 10 + i} row={props.row} column={i} mode={FILL} size={props.size}
                style={{ flex: 1, backgroundColor: "#555555" }}
                refreshMap={props.refreshMap} />
            )
        } else {
            rows.push(
                <ModifiedNemo key={props.row * 10 + i} row={props.row} column={i} mode={EMPTY} size={props.size}
                style={{ flex: 1, backgroundColor: "#ff8181" }}
                refreshMap={props.refreshMap} />
            )
        }
    }

    return (
        <View style={{ flex: 1, flexDirection: "row" }}>
            {rows}
        </View>
    );
}

function Tiles(props) {
    console.log("Tiles")
    console.log("props.map.length : " + props.map.length)
    console.log("props.size : " + props.size)
    if (props.map.length != props.size) {
        return (
            <View style={{ flex: 5, flexDirection: "column", backgroundColor: "#ffffdd" }} />
        )
    }

    var tiles = []
    for (let i = 0; i < props.size; i++) {
        tiles.push(
            <Rows key={i} row={i} size={props.size} map={props.map} refreshMap={props.refreshMap} />
        )
    }

    return (
        <View style={{ width: '70%', flexDirection: "column" }}>
            {tiles}
        </View>
    )
}

export default Tiles;