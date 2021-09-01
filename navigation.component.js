import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './home.component';
import { DetailsScreen } from './details.component';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';

const { Navigator, Screen } = createBottomTabNavigator();

const HomeIcon = (props) => (
  <Icon {...props} name='home-outline'/>
);
const GalleryIcon = (props) => (
  <Icon {...props} name='film-outline'/>
);
const NotesIcon = (props) => (
  <Icon {...props} name='book-open-outline'/>
);
const GraphIcon = (props) => (
  <Icon {...props} name='activity-outline'/>
);

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='HOME' icon={HomeIcon}/>
    <BottomNavigationTab title='GALLERY' icon={GalleryIcon}/>
    <BottomNavigationTab title='NOTES' icon={NotesIcon}/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='Gallery' component={DetailsScreen}/>
    <Screen name='Notes' component={DetailsScreen}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>
);