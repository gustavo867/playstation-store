import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Cart from '../screens/Cart';
import Products from '../screens/Products';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../redux';
import { Image } from 'react-native';

const Stack = createStackNavigator();

import logo from '../assets/images/ps5-logo.png';

function Routes() {
  const theme = useSelector((state: ApplicationState) => state.theme.theme);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          cardStyle: {
            backgroundColor: theme.primary,
          },
        }}>
        <Stack.Screen
          options={{
            headerTransparent: true,
            headerTitle: () => (
              <Image
                source={logo}
                resizeMode="contain"
                style={{
                  alignSelf: 'center',
                  width: 150,
                  height: 50,
                  marginTop: 10,
                  marginRight: 20,
                }}
              />
            ),
            headerTitleStyle: {
              alignItems: 'center',
              alignSelf: 'center',
            },
          }}
          name="Product"
          component={Products}
        />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
