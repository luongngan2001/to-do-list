import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons';
import UserPage from './user/UserPage';
import DiscoverPage from './discover/DiscoverPage';


const Tab = createBottomTabNavigator();

const userPage = 'UserPage';
const discoverPage = 'DiscoverPage';

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={discoverPage}
                // screenOptions={({ route }) => ({
                //     tabBarIcon: ({ focused, color, size }) => {
                //         let iconName;
                //         let rn = route.name;

                //         if (rn === discoverPage) {
                //             iconName = focused ? 'home' : 'home-outline';
                //         } else if (rn === userPage) {
                //             iconName = focused ? 'settings' : 'settings-outline'
                //         }

                //         return <Ionicons name={iconName} size={size} color={color} />
                //     },
                //     // tabBarActiveTintColor: 'tomato',
                //     // tabBarInactiveTintColor: 'gray',
                // })}
            // tabBarOptions={{
            //     activeTintColor: 'tomato',
            //     inactiveTintColor: 'grey',
            //     labelStyle: { paddingBottom: 10, fontSize: 10},
            //     style: {padding: 10, height: 70}
            // }}
            >
                <Tab.Screen name="Tôi" component={UserPage} />
                <Tab.Screen name="Khám phá" component={DiscoverPage} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;