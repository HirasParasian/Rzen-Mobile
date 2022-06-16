import React from 'react';
import {StyleSheet} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {View,Text,Container} from 'native-base'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//AUTH
import Login from './screens/Login';
import Signup from './screens/Signup';
import ForgotPassword from './screens/ForgotPassword';

import Profile from './screens/Profile';
import Testing from './screens/Testing';
import Home from './screens/Home';
import Search from './screens/Search';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AD from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarColor="#f0b15c"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#f0b15c',
          bottom: 10,
          left: 10,
          right: 10,
          borderRadius: 15,
          paddingTop: 10,
        },
      }}>
      <Tab.Screen
        name="Homes"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarActiveTintColor: '#8D8DAA',
          tabBarInactiveTintColor: '#F7F5F2',
          tabBarIcon: ({ color }) => (
            <AD name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: '',
          tabBarActiveTintColor: '#8D8DAA',
          tabBarInactiveTintColor: '#F7F5F2',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="testing"
        component={Testing}
        options={{
          tabBarLabel: '',
          tabBarActiveTintColor: '#8D8DAA',
          tabBarInactiveTintColor: '#F7F5F2',
          tabBarIcon: ({ color }) => (
            <Ionicons name="sticker-text-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profiles"
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarActiveTintColor: '#8D8DAA',
          tabBarInactiveTintColor: '#F7F5F2',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function Auth() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="BottomTab" component={MyTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
