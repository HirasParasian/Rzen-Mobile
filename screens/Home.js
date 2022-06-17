import {StyleSheet} from 'react-native';
import React from 'react';
import {Box, View, Text, VStack, Center, HStack, Image} from 'native-base';
import profileImg from '../src/assets/images/profile.png';

const Home = () => {
  return (
    <View bgColor={'#e35953'}>
      <VStack mt={3} space={3} alignItems="center">
        <HStack justifyContent="center" mx={3}>
          <View h="20" w="80%" justifyContent={'center'} rounded="md">
            <Text fontFamily={'body'} fontSize={12} bold>
              Selamat Datang
            </Text>
            <Text fontFamily={'body'} fontSize={'3xl'} bold>
              Hiras Parasian
            </Text>
          </View>
          <View h="20" w="20%" rounded={30} shadow={3}>
            <Image
              borderRadius={100}
              alt="profile"
              width={'100%'}
              height={'100%'}
              source={profileImg}
            />
          </View>
        </HStack>
        <Center w="95%" h="15%" bgColor={'white'} shadow={3} rounded={50} />
        <Center w="100%" h="100%" bg="white" roundedTop={60} shadow={3} />
      </VStack>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
