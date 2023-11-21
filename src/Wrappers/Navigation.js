import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../constants/navigation.constants';
import Cards from '../Components/organisms/Cards';
import Categories from '../Components/organisms/Categories';
import Login from '../Components/organisms/Login';
import SignUp from '../Components/organisms/SignUp';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ROUTES.login} component={Login} />
        <Stack.Screen name={ROUTES.signup} component={SignUp} />
        <Stack.Screen name={ROUTES.categories} component={Categories} />
        <Stack.Screen name={ROUTES.cards.name} component={Cards} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;