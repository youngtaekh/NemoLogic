
import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Button from './customView/Button'

class App extends React.Component {
  _five = () => {
    console.log(5);
    // this.props.navigation.navigate("NavigatorScreen")
  };

  _ten = () => {
    console.warn(10);
  };

  _fifteen = () => {
    console.error(15)
  }

  _twenty = () => {
    console.info(20)
  }

  render() {
    return (
      <View style={styles.main}>
        <Button
          title="5X5"
          style={{marginBottom: 10}}
          onPress={this._five} />
        <Button
          title="10X10"
          style={{marginBottom: 10}}
          onPress={this._ten} />
        <Button
          title="15X15"
          style={{marginBottom: 10}}
          onPress={this._fifteen} />
        <Button
          title="20X20"
          onPress={this._twenty} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
});

export default App;
