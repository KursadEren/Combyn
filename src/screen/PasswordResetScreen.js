import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PasswordResetScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Combyn</Text>
            <Text style={styles.subtitle}>Şifremi Sıfırla</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>E-mail adresi</Text>
                <View style={styles.inputWrapper}>
                    <Icon name="email" size={20} color="#a9a9a9" style={styles.icon} />
                    <TextInput placeholder="mail@combyn.io" style={styles.input} keyboardType="email-address" />
                </View>
                <Text style={styles.helperText}>Lütfen kayıt olduğunuz mail adresinizi giriniz.</Text>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Gönder</Text>
            </TouchableOpacity>

            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>Tekrar denemek mi istiyorsun?</Text>
                <TouchableOpacity>
                    <Text style={styles.loginText}>Giriş yap</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 18,
        color: '#1f43d3',
    },
    subtitle: {
        fontSize: 16,
        alignSelf: 'center',
        marginBottom: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    inputContainer: {
        marginBottom: 10,
        width: '90%',
        alignSelf: 'center',
    },
    label: {
        fontSize: 12,
        marginBottom: 2,
        color: 'black',
        fontWeight: 'bold',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#d3d3d3',
        borderRadius: 4,
        padding: 5,
    },
    icon: {
        marginLeft: 5,
    },
    input: {
        flex: 1,
        marginLeft: 8,
        fontSize: 13,
        height: 35,
    },
    helperText: {
        fontSize: 12,
        color: '#a9a9a9',
        marginTop: 5,
    },
    button: {
        backgroundColor: '#3a7dff',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
        width: '90%',
        alignSelf: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 13,
        fontWeight: 'bold',
    },
    footerContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    footerText: {
        fontSize: 13,
        color: 'black',
    },
    loginText: {
        fontSize: 13,
        color: '#1E2AFF',
        textDecorationLine: 'underline',
        marginTop: 5,
    },
});

export default PasswordResetScreen;
