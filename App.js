import React from 'react';
import Layout from './src/containers';
import StoreProvider from './src/context'; 

export default function App() {
  return (
    <StoreProvider 
    
    Children={<Layout />}
    />
       
  );
}
