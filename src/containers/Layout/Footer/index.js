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

  const context = React.useContext(StoreContext);
  const { step, setStep } = context.step;
  const { first, setFirst } = context.first;
  const { last, setLast } = context.last;
  const { dataLength, setDataLength } = context.dataLength;
  const { selected, setSelected } = context.selected;

  return (
    <NativeBaseProvider>

      <HStack bg="#9d8331" alignItems="center" safeAreaBottom shadow={6}>
        <Pressable

          opacity={selected === 0 ? 1 : 0.5}
          py={2}
          flex={1}
          onPress={() => {
            setFirst(1)
            setLast(step)
            setSelected(0)
          }}
        >
          <Center>
            <Icon
              mb={1}
              as={<MaterialCommunityIcons name="skip-backward" />}
              color="white"
              size="xs"
            />

            <Text color="white" fontSize={14}>First</Text>
          </Center>
        </Pressable>
        <Pressable

          opacity={selected === 1 ? 1 : 0.5}
          py={2}
          flex={1}
          onPress={() => {

            first > 1 && setFirst(first - step)
            first > 1 && setLast(last - step)
            setSelected(1)
          }}
        >
          <Center>
            <Icon
              mb={1}
              as={<MaterialCommunityIcons name="skip-previous" />}
              color="white"
              size="xs"
            />

            <Text color="white" fontSize={14}>Previous {first}</Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 2 ? 1 : 0.5}
          py={2}
          flex={1}
          onPress={() => {

            last < dataLength - step && setFirst(first + step)
            last < dataLength - step && setLast(last +  step)
            setSelected(2)
          }}
        >
          <Center>
            <Icon
              mb={1}
              as={<MaterialIcons name="skip-next" />}
              color="white"
              size="xs"
            />

            <Text color="white" fontSize={14}>Next {last}</Text>
          </Center>
        </Pressable>
        <Pressable

          opacity={selected === 3 ? 1 : 0.5}
          py={2}
          flex={1}
          onPress={() => {

            setFirst(dataLength - step)
            setLast(dataLength)
            setSelected(3)
          }}
        >
          <Center>
            <Icon
              mb={1}
              as={<MaterialCommunityIcons name="skip-forward" />}
              color="white"
              size="xs"
            />
            <Text color="white" fontSize={14}>Last</Text>
          </Center>
        </Pressable>
      </HStack>

    </NativeBaseProvider>
  );
}
