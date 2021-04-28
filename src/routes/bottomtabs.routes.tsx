import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {AntDesign, FontAwesome5} from '@expo/vector-icons';

import {PlantSelect} from '../screens/PlantSelect';
import {MyPlants} from '../screens/MyPlants';

const BottomTab = createBottomTabNavigator();

export function RoutesBottomTab (){
  return(
    <BottomTab.Navigator
      initialRouteName="PlantSelect"
      tabBarOptions={{
        labelPosition:'beside-icon',
        activeTintColor: '#32B768',
        inactiveTintColor: '#AAB2AD',
        iconStyle: {
          alignItems: 'center'
        }
      }}
    >
      <BottomTab.Screen
        name="PlantSelect"
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign name="pluscircleo" color={focused ? "#32B768" : '#AAB2AD'} size={22} />
          ),
        }}
        component={PlantSelect}
      />
      <BottomTab.Screen
        name="MyPlants"
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome5 name="list-ul" color={focused ? "#32B768" : '#AAB2AD'} size={20} />
          ),
        }}
        component={MyPlants}
      />
    </BottomTab.Navigator>
  );
}
