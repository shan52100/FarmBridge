import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import img from '../Assets/Image/1.jpg'
const CartItem = ({ item, onIncrement, onDecrement }) => {
    return (
        <View style={styles.itemContainer}>
            <Image source={img} style={styles.itemImage} />
            <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>RS.{item.price}</Text>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity
                        onPress={() => onDecrement(item)}
                        style={styles.adjustButton}
                        disabled={item.quantity <= 1} // Disable button if quantity is 1
                    >
                        <Text style={styles.adjustButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{item.quantity} {item.unit}</Text>
                    <TouchableOpacity
                        onPress={() => onIncrement(item)}
                        style={styles.adjustButton}
                    >
                        <Text style={styles.adjustButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        padding: 15,
        borderRadius: 12,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 3,
        marginBottom: 15,
        alignItems: 'center',
    },
    itemImage: {
        width: 90,
        height: 90,
        borderRadius: 10,
        marginRight: 15,
    },
    itemDetails: {
        flex: 1,
        justifyContent: 'center',
    },
    itemName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 5,
    },
    itemPrice: {
        fontSize: 16,
        color: '#27ae60',
        marginBottom: 10,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    adjustButton: {
        backgroundColor: '#3498db',
        borderRadius: 20,
        padding: 8,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.8,
    },
    adjustButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    quantityText: {
        fontSize: 16,
        color: '#555',
    },
});

export default CartItem;
