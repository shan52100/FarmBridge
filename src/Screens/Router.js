import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Splashscreen';
import LoginScreen from './Loginscreen';
import RegisterScreen from './Registerscreen';
import LandingScreen from './LandingScreen';
import SellerScreen from './SellerScreen';
import SellerRegisterScreen from './SellerRegisterScreen';
import ListingScreen from './ListingScreen';
import { CartProvider } from '../Components/CartContext';
import CartScreen from './CartScreen';
import ProductListScreen from './ProductListScreen';
import ProductCreateScreen from './ProductCreateScreen';
import ProductEditScreen from './ProductEditScreen';
import LanguageSelectionScreen from './Language';
import CheckoutScreen from './CheckoutScreen';
// import HomeDrawer from './HomeDrawer'

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Landing" component={LandingScreen} />
          <Stack.Screen name="Language" component={LanguageSelectionScreen} />
          <Stack.Screen name="Seller" component={SellerScreen} />
          <Stack.Screen name="Sellerregister" component={SellerRegisterScreen} />
          <Stack.Screen name="ListingScreen" component={ListingScreen} />
          <Stack.Screen name="Checkout" component={CheckoutScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="ProductList" component={ProductListScreen} />
            <Stack.Screen name="ProductCreate" component={ProductCreateScreen} />
            <Stack.Screen name="ProductEdit" component={ProductEditScreen} />
          {/* <Stack.Screen name="HomeDrawer" component={HomeDrawer} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default Router;