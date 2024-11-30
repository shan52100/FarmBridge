import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, SafeAreaView } from 'react-native';
import { useProducts } from '../Components/ProductContext'; // Adjust the path as needed
import HeaderComponent from '../Components/HeaderComponent';

const ProductCreateScreen = ({ navigation }) => {
    const { addProduct } = useProducts();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = () => {
        if (!name || !price || !image) {
            Alert.alert('Error', 'All fields are required.');
            return;
        }

        const newProduct = {
            id: new Date().getTime(), // Generate a unique ID
            name,
            price: parseFloat(price),
            image,
        };

        addProduct(newProduct);
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <HeaderComponent navigation={navigation} />
            <View style={styles.sub}>
                <Text style={styles.header}>Create New Product</Text>
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
                    <Text style={styles.submitButtonText}>Add Product</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
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

export default ProductCreateScreen;
