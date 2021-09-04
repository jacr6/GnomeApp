import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  MaterialCommunityIcons
} from '@expo/vector-icons';
import {
  NativeBaseProvider,
  Box,
  Pressable,
  VStack,
  Text,
  HStack,
  Divider,
  Icon
} from 'native-base';

import FooterScreen from '../Footer'
import ContentScreen from '../Content';

const Drawer = createDrawerNavigator();
function Component(props) {
  return (
    <>
    
        <ContentScreen />
     
     
       
        <FooterScreen />
    
    </>
  );
}

const getIcon = (screenName) => {
  switch (screenName) {
    case 'ArtHotel':
      return "archive"
    case 'Mis Puntos':
      return 'send'
    case 'Mi Plan de Ruta':
      return 'heart'
    case 'Mi Perfil':
      return 'archive'
    case 'Calificar':
      return 'heart'
    
    default:
      return undefined
  }
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView 
    
    {...props} safeArea>
    <VStack space={6} my={2} mx={1}>
      <Box px={4}>
        <Text bold color="gray.700">Jhon Doe</Text>
        <Text fontSize={14} mt={1} color="gray.500" fontWeight={500}>john_doe@gmail.com</Text>
      </Box>
    <VStack divider={<Divider />} space={4}>
      <VStack space={3}>
        {props.state.routeNames.map((name, index) => (
            <Pressable
              px={5}
              py={3}
              rounded="md"
              key={index}
              bg={index === props.state.index ? 'rgba(6, 182, 212, 0.1)' : 'transparent'}
              onPress={(event) => {
                props.navigation.navigate(name);
              }}
              >
                <HStack space={7} alignItems="center">
                  <Icon
                  color={index === props.state.index ? 'primary.500' : 'gray.500'}
                  size={5} as={<MaterialCommunityIcons name={getIcon(name)}/>}  />
                  <Text fontWeight={500} color={index === props.state.index ? 'primary.500' : 'gray.700'}>
                  {name}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
          <VStack space={5}>
            <Text fontWeight={500} fontSize={14} px={5} color="gray.500">Opciones</Text>
            <VStack space={3}>
              <Pressable
                px={5}
                py={3}
              >
                <HStack space={7} alignItems="center">
                  <Icon
                  color='gray.500'
                  size={5} as={<MaterialCommunityIcons name='heart'/>}  />
                  <Text color='gray.700' fontWeight={500}>
                    Salir
                  </Text>
                </HStack>
              </Pressable>
               
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
}
function MyDrawer() {
  return (
    <Box   safeArea flex={1} >
    <Drawer.Navigator
     
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >

      <Drawer.Screen name="ArtHotel" component={Component} />
      <Drawer.Screen name="Mis Puntos" component={Component} />
      <Drawer.Screen name="Mi Plan de Ruta" component={Component} />
      <Drawer.Screen name="Mi Perfil" component={Component} />
      <Drawer.Screen name="Calificar" component={Component} /> 

    </Drawer.Navigator>
  
    </Box>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <MyDrawer />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}