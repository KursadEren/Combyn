import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const AccountVerificationScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Combyn</Text>
            <Text style={styles.subtitle}>Hesabını Doğrula</Text>

            <Text style={styles.instructionText}>Mail adresinize kod gönderildi.
                <Text style={styles.emailText}> cagri@combyn.com</Text>
            </Text>

            <View style={styles.codeContainer}>
                <TextInput style={styles.codeInput} maxLength={1} keyboardType="number-pad" />
                <TextInput style={styles.codeInput} maxLength={1} keyboardType="number-pad" />
                <TextInput style={styles.codeInput} maxLength={1} keyboardType="number-pad" />
                <TextInput style={styles.codeInput} maxLength={1} keyboardType="number-pad" />
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Doğrula</Text>
            </TouchableOpacity>

            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>Kod almadınız mı?</Text>
                <TouchableOpacity>
                    <Text style={styles.resendText}>Yeniden gönder</Text>
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
    instructionText: {
        fontSize: 14,
        color: 'black',
        textAlign: 'center',
        marginBottom: 20,
    },
    emailText: {
        fontWeight: 'bold',
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        alignSelf: 'center',
        marginBottom: 20,
    },
    codeInput: {
        borderWidth: 1,
        borderColor: '#d3d3d3',
        borderRadius: 8,
        width: 50,
        height: 50,
        textAlign: 'center',
        fontSize: 18,
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
    resendText: {
        fontSize: 13,
        color: '#1E2AFF',
        textDecorationLine: 'underline',
        marginTop: 5,
    },
});

export default AccountVerificationScreen;
