import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Modal,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView,
} from 'react-native';
import { data } from '../constants/data';
import HeaderComponent from '../Components/HeaderComponent';
import veg from '../Assets/Image/veg.jpg';
import { DrawerActions } from '@react-navigation/native';

const LandingScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [hasModalBeenShown, setHasModalBeenShown] = useState(false);

    // Extract categories from the data
    const categories = data[0].categories;

    // Filter categories based on search query
    useEffect(() => {
        if (searchQuery) {
            setFilteredCategories(
                categories.filter(category =>
                    category.title.toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
        } else {
            setFilteredCategories(categories);
        }
    }, [searchQuery]);

    // Render item function for FlatList
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('ListingScreen', { category: item })}
        >
            <Image source={veg} style={styles.itemImage} />
            <Text style={styles.itemText}>{item.title}</Text>
        </TouchableOpacity>
    );

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            if (!hasModalBeenShown) {
                setHasModalBeenShown(true);
                const timer = setTimeout(() => {
                    setModalVisible(true);
                }, 1000);

                return () => clearTimeout(timer);
            }
        });

        return unsubscribe;
    }, [navigation, hasModalBeenShown]);

    const handleNavigation = (role) => {
        setModalVisible(false);
        // Navigate based on the role selected
        if (role === 'Buyer') {
            navigation.navigate('Login'); // Replace 'Login' with your actual screen name
        } else if (role === 'Seller') {
            navigation.navigate('Seller'); // Replace 'Seller' with your actual screen name
        }
    };

    const handleDrawerNavigation = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    return (
        <View style={styles.container}>
            <HeaderComponent navigation={navigation} />
            <ScrollView style={styles.main}>
                <TextInput
                    style={styles.input}
                    placeholder="Search category"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    placeholderTextColor={'#000'}
                />
                <FlatList
                    data={filteredCategories}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2} // Display two items per row
                    columnWrapperStyle={styles.row} // Styling for the row
                />
            </ScrollView>
            <Modal
                transparent={true}
                visible={modalVisible}
                animationType="slide" // Slide animation for better effect
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Please choose a login option:</Text>
                        <TouchableOpacity
                            onPress={() => handleNavigation('Buyer')}
                            style={styles.modalButton}
                        >
                            <Text style={styles.modalButtonText}>Clientele</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleNavigation('Seller')}
                            style={styles.modalButton}
                        >
                            <Text style={styles.modalButtonText}>Farmer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Skip for now!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8F6F3',
    },
    itemContainer: {
        flex: 1,
        padding: 15,
        margin: 10,
        backgroundColor: '#ffffff', // Background color for list items
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    main: {
        flex: 1,
    },
    itemText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333', // Text color
        textAlign: 'center', // Center the text
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end', // Align modal content to the bottom
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent background for modal
    },
    itemImage: {
        width: '100%',
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
    },
    modalContent: {
        width: '100%', // Full width
        padding: 20,
        backgroundColor: '#fff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 15,
    },
    modalButton: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#20B2AA',
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
    },
    modalButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    closeButton: {
        marginTop: 10,
        padding: 10,
    },
    closeButtonText: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: '100%',
    },
});

export default LandingScreen;
