import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { useProducts } from '../Components/ProductContext'; // Adjust the path as needed
import HeaderComponent from '../Components/HeaderComponent';

const ProductEditScreen = ({ route, navigation }) => {
    const { product } = route.params;
    const { updateProduct } = useProducts();
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price.toString());
    const [image, setImage] = useState(product.image);

    const handleSubmit = () => {
        if (!name || !price || !image) {
            Alert.alert('Error', 'All fields are required.');
            return;
        }

        const updatedProduct = {
            ...product,
            name,
            price: parseFloat(price),
            image,
        };

        updateProduct(updatedProduct);
        navigation.goBack();
    };

    useEffect(() => {
        setName(product.name);
        setPrice(product.price.toString());
        setImage(product.image);
    }, [product]);

    return (
        <View style={styles.container}>
            <HeaderComponent navigation={navigation} />
            <View style={styles.sub} >
            <Text style={styles.header}>Edit Product</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Product Name"
                    placeholderTextColor="#BDC3C7"
                    value={name}
                    onChangeText={setName}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Price"
                    placeholderTextColor="#BDC3C7"
                    value={price}
                    onChangeText={setPrice}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Image URL"
                    placeholderTextColor="#BDC3C7"
                    value={image}
                    onChangeText={setImage}
                />
            </View>
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Update Product</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8F6F3',
    },
    sub: {
        flex: 1,
        paddingTop: 15,
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2C3E50',
        marginBottom: 20,
        textAlign: 'center',
    },
    inputContainer: {
        marginBottom: 15,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },
    input: {
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#BDC3C7',
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#2C3E50',
    },
    submitButton: {
        backgroundColor: '#20B2AA',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ProductEditScreen;
