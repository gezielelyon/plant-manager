import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Ionicons} from '@expo/vector-icons';

import {Welcome} from '../screens/Welcome';
import {UserIdentification} from '../screens/UserIdentification';
import {Confirmation} from '../screens/Confirmation';
import {RoutesBottomTab} from './bottomtabs.routes';
import {Plant} from '../screens/Plant';

const Stack = createStackNavigator();

export function Routes() {
  return(
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" options={{headerShown: false}} component={Welcome} />
      <Stack.Screen name="UserIdentification" options={{headerShown: false}} component={UserIdentification} />
      <Stack.Screen name="Confirmation" options={{headerShown: false}} component={Confirmation} />
      <Stack.Screen name="RoutesBottomTab" options={{headerShown: false}} component={RoutesBottomTab} />
      <Stack.Screen
        name="Plant"
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#F0F0F0',
            elevation: 0
          },
          headerBackImage: () => (
            <Ionicons name="chevron-back" color="#52665A" size={30} />
          ),
        }}
        component={Plant}
      />
    </Stack.Navigator>
  );
}
