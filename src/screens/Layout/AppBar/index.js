import React from "react";
import { HStack, IconButton, Icon, Text, Box, StatusBar } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { StoreContext } from '../../../context';

function AppBar() {
  const context = React.useContext(StoreContext);
  const {open, setOpen } = context.open;

  return (
    <>
      <StatusBar backgroundColor="#3700B3" barStyle="light-content" />

      <Box safeAreaTop backgroundColor="#6200ee" />

      <HStack bg='#6200ee' px={1} py={3} justifyContent='space-between' alignItems='center'>
        <HStack space={4} alignItems='center'>
          <IconButton onPress={() => setOpen(!open)} icon={<Icon size="sm" as={<MaterialIcons  name='menu' />} color="white" />} />
         
        </HStack>
        <HStack space={2}>
      
          <IconButton icon={<Icon as={<MaterialIcons name='more-vert' />} size='sm' color="white" />} />
        </HStack>
      </HStack>

    </>
  )
}

export default AppBar