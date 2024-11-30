import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductItem = ({ product, onEdit, onDelete }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{product.name}</Text>
                <Text style={styles.itemPrice}>RS.{product.price}</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.editButton} onPress={onEdit}>
                        <Text style={styles.buttonText}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
                        <Text style={styles.buttonText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemImage: {
        width: 70,
        height: 70,
        borderRadius: 5,
        marginRight: 15,
    },
    itemDetails: {
        flex: 1,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'#000'
    },
    itemPrice: {
        fontSize: 16,
        color: '#20B2AA',
        marginBottom: 10,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    editButton: {
        backgroundColor: '#20B2AA',
        padding: 10,
        borderRadius: 5,
    },
    deleteButton: {
        backgroundColor: '#FF6347',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default ProductItem;
