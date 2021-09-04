import React from 'react';
import Layout from './src/screens';
import StoreProvider from './src/context';
// import 'bulma/css/bulma.min.css'

export default function App() {
  return (
    <StoreProvider 
    
    Children={<Layout />}
    />
       
  );
}
