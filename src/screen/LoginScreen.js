import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LoginScreen = () => {
    const [rememberMe, setRememberMe] = React.useState(false);
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Combyn</Text>
            <Text style={styles.subtitle}>Giriş Yap</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Ad Soyad</Text>
                <View style={styles.inputWrapper}>
                    <Icon name="person" size={20} color="#a9a9a9" style={styles.icon} />
                    <TextInput placeholder="Ad Soyad" style={styles.input} />
                </View>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Kullanıcı Adı</Text>
                <View style={styles.inputWrapper}>
                    <Icon name="person-outline" size={20} color="#a9a9a9" style={styles.icon} />
                    <TextInput placeholder="Kullanıcı Adı" style={styles.input} />
                </View>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Şifre</Text>
                <View style={styles.inputWrapper}>
                    <Icon name="lock" size={20} color="#a9a9a9" style={styles.icon} />
                    <TextInput placeholder="Şifre" style={styles.input} secureTextEntry={true} />
                    <Icon name="visibility-off" size={20} color="#a9a9a9" style={styles.iconRight} />
                </View>
            </View>

            <View style={styles.rememberContainer}>
                <View style={styles.checkboxContainer}>
                    <TouchableOpacity style={styles.checkbox} onPress={() => setRememberMe(!rememberMe)}>
                        {rememberMe && <Icon name="check" size={14} color="#3a7dff" />}
                    </TouchableOpacity>
                    <Text style={styles.rememberText}>Beni hatırla</Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgotPasswordText}>Şifremi Unuttum!</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Giriş yap</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.appleButton}>
                <FontAwesome name="apple" size={20} color="#000" style={styles.socialIcon} />
                <Text style={styles.socialButtonText}>Apple ile giriş yap</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.googleButton}>
                <FontAwesome name="google" size={20} color="#4285F4" style={styles.socialIcon} />
                <Text style={styles.socialButtonText}>Google ile giriş yap</Text>
            </TouchableOpacity>
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
        marginBottom: 10,
        color: "black",
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
    },
    icon: {
        marginLeft: 5,
    },
    iconRight: {
        marginRight: 5,
    },
    input: {
        flex: 1,
        marginLeft: 8,
        fontSize: 13,
        height: 35,
    },
    rememberContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
        marginBottom: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 16,
        height: 16,
        marginRight: 5,
        borderWidth: 1,
        borderColor: '#d3d3d3',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    rememberText: {
        fontSize: 12,
        color: 'black',
    },
    forgotPasswordText: {
        fontSize: 12,
        color: '#1E2AFF',
        textDecorationLine: 'underline',
    },
    button: {
        backgroundColor: '#3a7dff',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 5,
        width: '90%',
        alignSelf: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 13,
        fontWeight: 'bold',
    },
    appleButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderRadius: 8,
        marginTop: 5,
        borderWidth: 1,
        borderColor: 'gray',
        width: '90%',
        alignSelf: 'center',
    },
    googleButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderRadius: 8,
        marginTop: 5,
        borderWidth: 1,
        borderColor: 'gray',
        width: '90%',
        alignSelf: 'center',
    },
    socialButtonText: {
        marginLeft: 10,
        color: '#000',
        fontSize: 13,
        fontWeight: 'bold',
    },
});

export default LoginScreen;
