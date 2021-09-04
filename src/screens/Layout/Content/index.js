import React from 'react';

import {
  NativeBaseProvider,
} from 'native-base';
import { StoreContext } from '../../../context';
import Calculator from '../Calculator'

export default function App() {
  const [selected, setSelected] = React.useState(1);
  const context = React.useContext(StoreContext);
  const { open, setOpen } = context.open;

  return (
    <NativeBaseProvider>
      <Calculator />
    </NativeBaseProvider>
  );
}
