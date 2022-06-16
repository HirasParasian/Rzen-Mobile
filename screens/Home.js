import { StyleSheet } from 'react-native'
import React from 'react'
import {Box,View,Text,VStack,Center} from 'native-base'

const Home = () => {
  return (
    <View>
      <VStack my={5} space={4} alignItems="center">
        <Center w="90%" h="20" bg="transparent" rounded="xl">
          <Text fontSize={'2xl'} bold>Selamat Datang Hiras</Text>
        </Center>
        <Center w="90%" h="20" bg="indigo.500" rounded="xl" shadow={3} />
        <Center w="90%" h="20" bg="indigo.700" rounded="xl" shadow={3} />
        <Center w="90%" h="20" bg="indigo.700" rounded="xl" shadow={3} />
      </VStack>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})