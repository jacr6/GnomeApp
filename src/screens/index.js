import React from 'react';
import {NativeBaseProvider} from 'native-base'
import  Layout  from './Layout';

export default function () {
    return (
      <NativeBaseProvider>
        <Layout/>
      </NativeBaseProvider>
    );
  }