import React from 'react';
import { Dimensions, StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCart } from '../Components/CartContext'; // Adjust path as needed
import logo from '../Assets/Image/left-arrow.png';
import hamburger from '../Assets/Image/shopping-cart.png';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const HeaderComponent = ({ navigation }) => {
    const { cartCount, cart } = useCart();
    const count = Object.keys(cart).length
    function handleCart() {
        navigation.navigate('Cart')
    }
    function handleBack() {
        navigation.goBack();
    }
    return (
        <SafeAreaView style={styles.containerStyle}>
            <View style={styles.headerContent}>
                <TouchableOpacity style={styles.logoButton} onPress={handleBack}>
                    <Image source={logo} style={styles.logoStyle} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.hamburgerButton} onPress={handleCart}>
                    <View style={styles.cartContainer}>
                        <Image source={hamburger} style={styles.hamburgerStyle} />
                        {count > 0 && (
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>{count}</Text>
                            </View>
                        )}
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: 'white',
        padding: 10,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#EEEEEE', // Adjusted color for consistency
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoButton: {
        padding: 10,
        width: '50%', // Adjust based on design needs
    },
    logoStyle: {
        height: 30, // Adjusted size for better fit
        resizeMode: 'contain',
    },
    hamburgerButton: {
        padding: 10,
        position: 'relative', // Ensure the badge positions correctly
    },
    cartContainer: {
        alignItems: 'center',
    },
    hamburgerStyle: {
        width: 30, // Adjusted size for consistency
        height: 30, // Adjusted size for consistency
        resizeMode: 'contain',
    },
    badge: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: '#FF6347',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2, // Added shadow for better visibility
    },
    badgeText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
    },
});

export default HeaderComponent;
