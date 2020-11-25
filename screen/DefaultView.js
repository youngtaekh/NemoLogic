import * as React from 'react'
import { View, StyleSheet } from 'react-native'

export default class DefaultView extends React.Component {
    render() {
        return (
            <View style={styles.columnView}>
                <View style={[styles.rowView, {backgroundColor: "#ffddff"}]}>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    columnView: {
        flex: 1,
        flexDirection: "column"
    },
    rowView: {
        flex: 1,
        flexDirection: "row"
    }
})