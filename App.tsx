import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import Splash from './src/screens/splash/Splash';
import Home from './src/screens/home/Home';
import Words from './src/screens/word/Words';

const Stack = createStackNavigator();

function Stacks() {
  const setCustomHeader = (props: {route: any; navigation?: any}) => {
    return {
      headerTitle: props.route.params.title,
    };
  };

  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="Words"
        component={Words}
        options={props => setCustomHeader(props)}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stacks />
      <Toast />
    </NavigationContainer>
  );
}
