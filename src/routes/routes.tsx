import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import FeatherIcon from 'react-native-vector-icons/Feather';

import Cart from '../screens/Cart';
import Products from '../screens/Products';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../redux';
import { Image, StatusBar } from 'react-native';

const Stack = createStackNavigator();

import logoLight from '../assets/images/logo-black.png';

function Routes() {
  const theme = useSelector((state: ApplicationState) => state.theme.theme);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: theme.primary,
          },
        }}>
        <Stack.Screen
          options={{
            headerTransparent: true,
            headerTitle: () => (
              <Image
                source={logoLight}
                resizeMode="contain"
                style={{
                  alignSelf: 'center',
                  width: 130,
                  height: 50,
                  marginRight: 20,
                  marginTop: StatusBar.currentHeight
                    ? StatusBar.currentHeight - 15
                    : 20,
                }}
              />
            ),
          }}
          name="Product"
          component={Products}
        />
        <Stack.Screen
          options={{
            headerTransparent: true,
            headerBackTitleVisible: false,
            headerLeftContainerStyle: {
              marginLeft: 10,
            },
            headerTitle: () => (
              <Image
                source={logoLight}
                resizeMode="contain"
                style={{
                  alignSelf: 'center',
                  width: 130,
                  height: 50,
                  marginRight: 50,
                  marginTop: StatusBar.currentHeight
                    ? StatusBar.currentHeight - 15
                    : 20,
                }}
              />
            ),
            headerBackImage: () => (
              <FeatherIcon
                name="chevron-left"
                size={24}
                color={theme.mode === 'dark' ? '#EBEEF8' : '#FFFFFF'}
                style={{
                  marginTop: StatusBar.currentHeight
                    ? StatusBar.currentHeight - 15
                    : 20,
                }}
              />
            ),
            headerTitleStyle: {
              marginTop: -50,
            },
          }}
          name="Cart"
          component={Cart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
