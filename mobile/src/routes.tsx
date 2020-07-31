import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Administrator from './pages/Administrator';
import User from './pages/User';
import Features from './pages/Features';

const AppStrack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStrack.Navigator 
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#f0f0f5',
                    }
                }}
            >
                <AppStrack.Screen name="Home" component={Home} />
                <AppStrack.Screen name="Administrator" component={Administrator} />
                <AppStrack.Screen name="User" component={User} />
                <AppStrack.Screen name="Features" component={Features} />
            </AppStrack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;