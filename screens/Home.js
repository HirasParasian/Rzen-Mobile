import {StyleSheet} from 'react-native';
import React from 'react';
import {Box, View, Text, VStack, Center, HStack, Image, Pressable,Stack, Button} from 'native-base';
import profileImg from '../src/assets/images/profile.png';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto'
import MC from 'react-native-vector-icons/MaterialCommunityIcons'

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
        <View w="95%" h="17%" bgColor={'white'} px={'5'} shadow={3} rounded={30} >
          <Stack direction="row" justifyContent={'space-between'} mb="2.5" mt="3.5" space={3}>
            <Button bg="#f0b15c" rounded="xl" shadow={"3"}>
              <Center size="16" _text={{  color: "warmGray.50",fontWeight: "medium"}} >
                <SimpleLineIcons name='note' size={30}></SimpleLineIcons>
                <Text> Notes </Text>
              </Center>
            </Button>
            <Button bg="#f0b15c" rounded="xl" shadow={"3"}>
            <Center  size="16" _text={{color: "warmGray.50",fontWeight: "medium"}}>
              <Fontisto name='favorite' size={30}></Fontisto>
              <Text>Favorite</Text>
            </Center>
            </Button>
            <Button bg="#f0b15c" rounded="xl" shadow={"3"} >
            <Center size="16" _text={{color: "warmGray.50", fontWeight: "medium"}}>
            <SimpleLineIcons name='book-open' size={30}></SimpleLineIcons>
              <Text>Penerbit</Text>
            </Center>
          </Button>
          </Stack>

          <Stack direction="row" justifyContent={'space-between'} mb="2.5" mt="1.5" space={3}>
          <Button bg="#f0b15c"  rounded="xl" shadow={"3"}>
              <Center size="16" _text={{  color: "warmGray.50",fontWeight: "medium"}} >
                <MC name="typewriter" size={30}></MC>
                <Text>Lomba</Text>
              </Center>
            </Button>
            <Button bg="#f0b15c"  rounded="xl" shadow={"3"}>
              <Center size="16" _text={{  color: "warmGray.50",fontWeight: "medium"}} >
              <Fontisto name='shopping-store' size={30}></Fontisto>
              <Text fontSize={13}>Toko</Text>
              </Center>
            </Button>
            <Button bg="#f0b15c"  rounded="xl" shadow={"3"}>
              <Center size="16" _text={{  color: "warmGray.50",fontWeight: "medium"}} >
              <Fontisto name='commenting' size={30}></Fontisto>
              <Text fontSize={13}>Testimony</Text>
              </Center>
            </Button>
          </Stack>  
        </View>
        <Center w="100%" h="100%" bg="white" roundedTop={60} shadow={3} />
      </VStack>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
