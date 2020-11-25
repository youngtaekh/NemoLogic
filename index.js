/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Stack from './navigator/Stack'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Stack);
