import React from "react"; 
import { NativeRouter, Route } from "react-router-native";
import * as Screens from '../screens'

const keys = Object.keys(Screens)

const Router = () => (
  <NativeRouter>
      {keys.map((screen,index)=>{
         <Route path={"/"+screen}  component={Screens[screen]} />
      })}
    
  </NativeRouter>
);
 
export default Router