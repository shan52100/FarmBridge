import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useCart } from '../Components/CartContext'; // Adjust path as needed
import HeaderComponent from '../Components/HeaderComponent';
import img from '../Assets/Image/2.jpg'
const ListingScreen = ({ navigation, route }) => {
    const { category } = route.params;
    const { cart, addToCart, removeFromCart } = useCart();

    // Render product item function for FlatList
    const renderProduct = ({ item }) => {
        const quantity = cart[item?.id]?.quantity || 0; // Get quantity from cart or default to 0

        return (
            <View style={styles.productContainer}>
                <Image
                    source={img} // Fallback image URL
                    style={styles.productImage}
                />
                <Text style={styles.productName}>{item.name}</Text>
                <View style={styles.productDetails}>
                    <Text style={styles.productPrice}>Rs.{item.price}</Text>
                    <Text style={styles.productUnit}>1{item.unit}</Text>
                </View>
                {quantity === 0 ? (
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => addToCart(item)} // Add item to cart
                    >
                        <Text style={styles.buttonText}>Add</Text>
                    </TouchableOpacity>
                ) : (
                    <View style={styles.quantityContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.decrementButton]}
                            onPress={() => removeFromCart(item)} // Decrement quantity
                        >
                            <Text style={styles.buttonText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>{quantity}</Text>
                        <TouchableOpacity
                            style={[styles.button, styles.incrementButton]}
                            onPress={() => addToCart(item)} // Increment quantity
                        >
                            <Text style={styles.buttonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <HeaderComponent navigation={navigation} />
            <Text style={styles.title}>{category.title}</Text>
            <FlatList
                data={category.items || []} // Default to empty array if items is undefined
                renderItem={renderProduct}
                keyExtractor={item => item.id.toString()}
                numColumns={2} // Display two products per row
                columnWrapperStyle={styles.row} // Styling for the row
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8F6F3',
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'#000'
    },
    productContainer: {
        flex: 1,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        padding: 10,
    },
    productImage: {
        width: '100%',
        height: 100,
        borderRadius: 5,
        marginBottom: 10,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    productDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: 'space-between',
    },
    productPrice: {
        fontSize: 16,
        color: '#20B2AA',
        marginRight: 5,
    },
    productUnit: {
        fontSize: 16,
        color: '#000',
    },
    button: {
        backgroundColor: '#20B2AA',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    decrementButton: {
        backgroundColor: '#FF6347', // Different color for decrement button
        fontWeight: 'bold',
        fontSize: 16,
    },
    incrementButton: {
        backgroundColor: '#20B2AA', // Color for increment button
        fontWeight: 'bold',
        fontSize: 16,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    quantityText: {
        fontSize: 16,
        marginHorizontal: 10,
        color:'#000'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default ListingScreen;
