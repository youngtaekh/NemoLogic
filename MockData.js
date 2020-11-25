import React, { Component } from 'react'
import { View, Text } from 'react-native'

export var MockData = {
    row: [
        [7, 2],
        [6, 1],
        [6, 1],
        [8, 1],
        [1, 2, 1, 1],
        [1, 3, 1],
        [1, 1, 1, 1],
        [7],
        [2, 6],
        [2, 5]
    ],
    column: [
        [4, 1],
        [5, 2],
        [4, 2, 2],
        [5, 1],
        [6, 2],
        [4, 1, 3],
        [1, 7],
        [1, 1, 3],
        [1, 1, 5],
        [1, 2, 3]
    ]
}

export function RowGuide() {
    var guide = []
    for (var i = 0; i < MockData.row.length; i++) {
        var str = ''
        var values = MockData.row[i]
        for (var value of values) {
            str += value + " "
        }
        guide.push(
            <View key={i} style={{flex: 1, borderBottomWidth: 1, borderEndWidth: 1, width: "100%", backgroundColor: "#FFFFFF", alignItems: "flex-end", justifyContent: "center"}}>
            <Text style={{ color: "#000000" }}>{str}</Text>
            </View>
        )
    }
    return (
        <View style={{ flex: 1, flexDirection: "column" }}>
            {guide}
        </View>
    )
}

export function ColumnGuide() {
    var guide = []
    for (var i = 0; i < MockData.column.length; i++) {
        var str = ''
        var values = MockData.column[i]
        for (var value of values) {
            str += value + "\n"
        }
        guide.push(
            <View key={i} style={{flex: 1, borderBottomWidth: 1, borderEndWidth: 1, height: "100%", backgroundColor: "#FFFFFF", alignItems: "center", justifyContent: "flex-end"}}>
            <Text style={{ color: "#000000" }}>{str.trim()}</Text>
            </View>
        )
    }
    return (
        <View style={{ flex: 1, flexDirection: "row" }}>
            {guide}
        </View>
    )
}