import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../redux';
import { Image, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import FeatherIcon from 'react-native-vector-icons/Feather';

import Cart from '../screens/Cart';
import Products from '../screens/Products';
import Logo from '../components/Logo';

const Stack = createStackNavigator();

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
            headerTitle: () => <Logo margin={10} />,
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
            headerTitle: () => <Logo margin={60} />,
            headerBackImage: () => (
              <FeatherIcon
                name="chevron-left"
                size={24}
                color={theme.mode === 'dark' ? '#EBEEF8' : '#000'}
                style={{
                  marginTop: StatusBar.currentHeight
                    ? StatusBar.currentHeight - 15
                    : 20,
                }}
              />
            ),
            headerTitleStyle: {
              marginTop: -50,
              alignSelf: 'center',
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
