/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Stack from './navigator/Stack'
import TopTab from './navigator/TopTab'
import DrawerNavigator from './navigator/Drawer'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => DrawerNavigator);
