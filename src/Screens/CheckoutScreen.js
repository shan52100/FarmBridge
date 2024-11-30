import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useCart } from '../Components/CartContext'; // Adjust path as needed
import CartItem from '../Components/CartItem';
import HeaderComponent from '../Components/HeaderComponent';

const CheckoutScreen = ({ navigation }) => {
    const { cart, addToCart, removeFromCart } = useCart();

    // Calculate total cost
    const totalCost = Object.values(cart).reduce((total, item) => total + item.price * item.quantity, 0);
    const isEmpty = Object.keys(cart).length === 0; // Check if cart is empty

    return (
        <View style={styles.container}>
             
            <Text style={styles.title}>Thank you !! </Text>
            <Text style={styles.title2}>Your order is placed successfully</Text>
             
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'#000'
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
        color:'#000'
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#999',
    },
    emptySubText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginTop: 10,
    },
    summary: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    totalCost: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'#000'
    },
    checkoutButton: {
        backgroundColor: '#20B2AA',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    checkoutButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default CheckoutScreen;
