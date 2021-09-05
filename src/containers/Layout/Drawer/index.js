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
  Avatar,
  Icon
} from 'native-base';
import FooterScreen from '../Footer'
import ContentScreen from '../Content';
import useGnomeApi from '../../../hooks/useGnomeApi'
import { StoreContext } from '../../../context';
 


const Drawer = createDrawerNavigator();





function Component(props) {
  console.log("Component props: ", props)

  return (
    <>
      <HStack height={"90%"}>
        <ContentScreen {...props} /> 
      </HStack>
      <FooterScreen />

    </>
  );
}
 
function CustomDrawerContent(props) { 
  const {data} = props
  console.log("CustomDrawerContent props: ", props)
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
                onPress={() => {
                  props.navigation.navigate(name);
                }}
              >
                <HStack space={7} alignItems="center">
                 {( <Avatar
                    source={{
                      uri: data&&data[index]&&data[index].thumbnail,
                    }}
                  />)}
                  <Text fontWeight={500} color={index === props.state.index ? 'primary.500' : 'gray.700'}>
                    {name}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
          <VStack space={5}>
            <Text fontWeight={500} fontSize={14} px={5} color="gray.500">Options</Text>
            <VStack space={3}>
              <Pressable
                px={5}
                py={3}
              >
                <HStack space={7} alignItems="center">
                  <Icon
                    color='gray.500'
                    size={5} as={<MaterialCommunityIcons name='heart' />} />
                  <Text color='gray.700' fontWeight={500}>
                    Exit
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
  const context = React.useContext(StoreContext);
  const { first } = context.first;
  const { dataLength, setDataLength } = context.dataLength;
  const { last } = context.last;
  const { gnomeData, isLoadingComplete } = useGnomeApi()
  console.log("gnomeData: ", gnomeData)
   
  if (!isLoadingComplete && !gnomeData || gnomeData && !gnomeData.Brastlewark) {
    return null
  }


  const data = gnomeData.Brastlewark.filter((x) => x.id < last).filter(x => x.id >= first)

  setDataLength(gnomeData.Brastlewark.length)
  console.log("dataLength: ", dataLength)

  return gnomeData && gnomeData.Brastlewark && (
    <Box safeArea flex={1} >
      <Drawer.Navigator
        height={"100%"}
        drawerContent={(props) => <CustomDrawerContent {...{data}} {...props} />}
      >
        {data.map((gnome) => {
          
          const Render = () => <Component data={gnome} />
          return <Drawer.Screen name={gnome.name} params={gnome} component={Render} />
        })}
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