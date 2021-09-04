import React from 'react';

import {
  NativeBaseProvider,
  Box,
  Text,
  Icon,
  HStack,
  Center,
  Pressable,
} from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { StoreContext } from '../../../context';


export default function App() {
  const [selected, setSelected] = React.useState(1);
  const context = React.useContext(StoreContext);
  const { open, setOpen } = context.open;

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="white" safeAreaTop>
        <Center flex={1}>
        </Center>
        <HStack bg="#9d8331" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable

            opacity={selected === 0 ? 1 : 0.5}
            py={2}
            flex={1}
            onPress={() => setSelected(0)}
          >
            <Center>
              <Icon
                mb={1}
                as={<MaterialCommunityIcons name="heart" />}
                color="white"
                size="xs"
              />

              <Text color="white" fontSize={14}>Billetera</Text>
            </Center>
          </Pressable>
          <Pressable

            opacity={selected === 1 ? 1 : 0.5}
            py={2}
            flex={1}
            onPress={() => setSelected(1)}
          >
            <Center>
              <Icon
                mb={1}
                as={<MaterialCommunityIcons name="music-note" />}
                color="white"
                size="xs"
              />

              <Text color="white" fontSize={14}>Espacios</Text>
            </Center>
          </Pressable>
          <Pressable
            opacity={selected === 2 ? 1 : 0.6}
            py={2}
            flex={1}
            onPress={() => setSelected(2)}
          >
            <Center>
              <Icon
                mb={1}
                as={<MaterialIcons name="location-pin" />}
                color="white"
                size="xs"
              />

              <Text color="white" fontSize={14}>Lugares</Text>
            </Center>
          </Pressable>
          <Pressable

            opacity={selected === 3 ? 1 : 0.5}
            py={2}
            flex={1}
            onPress={() => setSelected(3)}
          >
            <Center>
              <Icon
                mb={1}
                as={<MaterialCommunityIcons name="newspaper" />}
                color="white"
                size="xs"
              />
              <Text color="white" fontSize={14}>Cupones</Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
}
