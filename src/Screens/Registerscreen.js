import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import loginbackground from '../Assets/Image/main.png';

const RegisterScreen = ({ navigation }) => {
    const handleRegister = () => {
        navigation.replace('Login');
    };
    const handleLogin = () => {
        navigation.navigate('Landing');
    }
    return (
        <View style={styles.container}>
            <ImageBackground
                source={loginbackground}
                style={styles.header}>
                <Text style={styles.heading}>Register</Text>

                <View style={styles.card}>
                    <TextInput style={styles.input} placeholder="Email" placeholderTextColor={'#000'} />
                    <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} placeholderTextColor={'#000'} />

                    <TouchableOpacity style={styles.forgotPasswordButton}>
                        <Text style={styles.forgotPasswordButtonText}>Forgot?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.createAccountButton} onPress={handleRegister}>
                        <Text style={styles.createAccountButtonText}>Create Account</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, // Make the container take up the full height of the screen
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    forgotPasswordButton: {
        width: '100%',
        textAlign: 'flex-end',
    },
    forgotPasswordButtonText: {
        color: '#20B2AA',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        padding: 20,
        width: '90%',
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: '100%',
    },
    button: {
        backgroundColor: '#20B2AA',
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    createAccountButton: {
        marginTop: 20,
    },
    createAccountButtonText: {
        color: '#20B2AA',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default RegisterScreen;
