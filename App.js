import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Router from './src/Screens/Router';
import { ProductProvider } from './src/Components/ProductContext';

const App = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ProductProvider>
                <Router />
            </ProductProvider>
        </GestureHandlerRootView>
    );
};

export default App;
