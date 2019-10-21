import React from 'react'
//navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//UI
import IndexScreen from './ui/screens/home'
import DetailScreen from './ui/screens/home/details'
import { Icon } from 'native-base'
import { theme } from 'theme'


const homeStack = createStackNavigator({
    Home: {
        screen: IndexScreen,
        navigationOptions: {
            header: null,
        },
    },
    Detail: {
        screen: DetailScreen,
        navigationOptions: {
            header: null,
        },
    }
});


const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    let iconName;
    if (routeName === 'Home') {
        iconName = 'home';
    } else if (routeName === 'help') {
        iconName = 'robot';
    }

    // You can return any component that you like here!
    return <Icon
        name={iconName}
        size={25}
        color={tintColor}
        type="FontAwesome5"
    />;
};

const TabNavigator = createBottomTabNavigator({
    Home: homeStack,
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) =>
                getTabBarIcon(navigation, focused, tintColor),
        }),
        tabBarOptions: {
            activeTintColor: theme.colorTab.activeColor,
            inactiveTintColor: theme.colorTab.inactiveColor,
            style: {
                backgroundColor: theme.themeApp.backgroundTabBar,
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0
            }

        },
    },

);

export default createAppContainer(TabNavigator);