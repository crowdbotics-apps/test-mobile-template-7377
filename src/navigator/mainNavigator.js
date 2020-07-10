import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen38724Navigator from '../features/BlankScreen38724/navigator';
import BlankScreen28723Navigator from '../features/BlankScreen28723/navigator';
import BlankScreen18722Navigator from '../features/BlankScreen18722/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen38724: { screen: BlankScreen38724Navigator },
BlankScreen28723: { screen: BlankScreen28723Navigator },
BlankScreen18722: { screen: BlankScreen18722Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
