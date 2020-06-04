import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';

import Home from './src/pages/Home/Home'

export default function App() {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
            <Home></Home>
        </>
    );
}
