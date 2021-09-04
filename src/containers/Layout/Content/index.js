import React from 'react';

import {
  NativeBaseProvider,
} from 'native-base';
import { StoreContext } from '../../../context'; 
import * as Screens from '../screens'


export default function App() { 
  const context = React.useContext(StoreContext); 
  
  return (
    <NativeBaseProvider>
      <Screens />
    </NativeBaseProvider>
  );
}
