import React from 'react';
import { Col, Row, Grid } from "react-native-easy-grid";
import { NativeBaseProvider, Center } from 'native-base';
import ContentScreen from './Content';
import FooterScreen from './Footer';
import HeaderScreen from './Header';
import RightSideScreen from './RightSide';
import LeftSideScreen from './LeftSide';
import AppBar from './AppBar'
import Drawer from './Drawer'
const Layout = () => {
    return (
        <>
            <Drawer />
           
        </>
    );
}
export default Layout
