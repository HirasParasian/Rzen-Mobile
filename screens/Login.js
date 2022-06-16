import { StyleSheet,ImageBackground } from 'react-native'
import {View,Box,Input,Text, Button,Image} from 'native-base'
import React from 'react'
import LoginImg from '../src/assets/images/Login-Background.jpg';
import Logo from '../src/assets/images/logoReaderzen.png';
import { border } from 'native-base/lib/typescript/theme/styled-system';

const Login = ({ navigation }) => {
  return (
    <ImageBackground 
      style={styles.background}
      resizeMode={'cover'}
      source={LoginImg}>

      <Image alt='Logo' width={200} height={200} source={Logo}></Image>

      <Box mx="5" my="3" alignItems="center">
        <Input borderRadius={20} my="2" size={'lg'} variant={'filled'} placeholder="Username or Email" w="100%" />
        <Input borderRadius={20} my="2" size={'lg'} variant={'filled'} placeholder="Password" w="100%" />
      </Box>
      <Button onPress={() => navigation.navigate('BottomTab')} borderRadius={20} size={'lg'} mt={5} w={'90%'}>Login</Button>

    </ImageBackground>
  )
}

export default Login

const styles = StyleSheet.create({
  background: {
    height: '100%',
    opacity: 0.7,
    justifyContent:'center',
    alignItems:'center'
  },

})