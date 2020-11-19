import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Auth stack
import WelcomeScreen from './WelcomeScreen';
import LoginEmail from './LoginEmail';

//Register stack
import InputPhone from './InputPhone';

const Stack = createStackNavigator();

const RegisterStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        options={{title: 'Input Phone Number'}}
        name="InputPhone"
        component={InputPhone}
      />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        options={{title: 'Welcome Screen'}}
        name="WelcomeScreen"
        component={WelcomeScreen}
      />
      <Stack.Screen
        options={{title: 'Log in with e-mail'}}
        name="LoginEmail"
        component={LoginEmail}
      />
      <Stack.Screen
        options={{title: 'Register'}}
        name="Register"
        component={RegisterStack}
      />
    </Stack.Navigator>
  );
};

class Main extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="AuthStack" component={AuthStack} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapSatateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapSatateToProps)(Main);
