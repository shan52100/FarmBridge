import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useProducts } from '../Components/ProductContext'; // Adjust the path as needed
import ProductItem from '../Components/ProductItem'; // Adjust the path as needed
import HeaderComponent from '../Components/HeaderComponent';

const ProductListScreen = ({ navigation }) => {
    const { products, deleteProduct } = useProducts();

    const handleEdit = (product) => {
        navigation.navigate('ProductEdit', { product });
    };

    const handleDelete = (productId) => {
        deleteProduct(productId);
    };

    const renderProduct = ({ item }) => (
        <ProductItem
            product={item}
            onEdit={() => handleEdit(item)}
            onDelete={() => handleDelete(item.id)}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <HeaderComponent navigation={navigation} />
            <View style={styles.sub}>
                <Text style={styles.title}>Product List</Text>
                {products.length === 0 ? (
                    <Text style={styles.emptyMessage}>No products available.</Text>
                ) : (
                    <FlatList
                        data={products}
                        renderItem={renderProduct}
                        keyExtractor={(item) => item.id.toString()}
                    />
                )}
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => navigation.navigate('ProductCreate')}
                >
                    <Text style={styles.addButtonText}>Add New Product</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    sub: {
        flex: 1,
        paddingTop: 15,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
        color: '#2C3E50',
        marginBottom: 20,
    },
    emptyMessage: {
        fontSize: 18,
        color: '#BDC3C7',
        textAlign: 'center',
        marginTop: 30,
    },
    addButton: {
        backgroundColor: '#3498DB',
        paddingVertical: 12,
        borderRadius: 25,
        alignItems: 'center',
        marginVertical: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
    },
    addButtonText: {
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 18,
    },
});

export default ProductListScreen;
