import React from 'react';

import {
  NativeBaseProvider,
} from 'native-base';

import TableView from '../TableView'

export default function Content(props) {
  console.log("Content props: ", props)


  return (
     
      <TableView {...props}/>
   
  );
}
