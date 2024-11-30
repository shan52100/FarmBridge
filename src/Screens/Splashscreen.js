import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, SafeAreaView } from 'react-native';

const SplashScreen = ({ navigation }) => {
    const fadeAnim = new Animated.Value(0);

    useEffect(() => {
        // Fade in animation
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();

        // Navigate to the Home screen after the animation
        setTimeout(() => {
            navigation.replace('Language');
        }, 3000); // 3 seconds delay
    }, [fadeAnim, navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={{ ...styles.logoContainer, opacity: fadeAnim }}>
                <Text style={styles.logoText}>DirectMarketAccess</Text>
            </Animated.View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#20B2AA', // Customize your background color
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoText: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
    },
});

export default SplashScreen;
