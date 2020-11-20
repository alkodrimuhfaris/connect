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
import ConfirmPhone from './ConfirmPhone';
import AlreadyHave from './AlreadyHave';
import CreateNew from './CreateNew';
import CreatePassword from './CreatePassword';
import AddFriends from './AddFriends';

//Main stack
import MainScreen from './MainScreen';
import ChatRoom from './ChatRoom';

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
      <Stack.Screen
        options={{title: 'Confirm Phone Number'}}
        name="ConfirmPhone"
        component={ConfirmPhone}
      />
      <Stack.Screen
        options={{title: 'Already Have Account'}}
        name="AlreadyHave"
        component={AlreadyHave}
      />
      <Stack.Screen
        options={{title: 'Create New Account'}}
        name="CreateNew"
        component={CreateNew}
      />
      <Stack.Screen
        options={{title: 'Create Password'}}
        name="CreatePassword"
        component={CreatePassword}
      />
      <Stack.Screen
        options={{title: 'Add Friends'}}
        name="AddFriends"
        component={AddFriends}
      />
    </Stack.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        options={{title: 'Chat List'}}
        name="MainScreen"
        component={MainScreen}
      />
      <Stack.Screen
        options={{title: 'Chat Room'}}
        name="ChatRoom"
        component={ChatRoom}
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
          <Stack.Screen name="MainStack" component={MainStack} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapSatateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapSatateToProps)(Main);