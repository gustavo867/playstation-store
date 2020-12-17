import {createStackNavigator} from '@react-navigation/stack';

import Cart from '../screens/Cart';
import Products from '../screens/Products';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Product" component={Products} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}

export default Routes;
