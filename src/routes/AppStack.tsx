import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../pages/Landing';
import Maps from '../pages/Maps';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Lanfing" component={Landing} />
                <Screen name="Maps" component={Maps} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;
