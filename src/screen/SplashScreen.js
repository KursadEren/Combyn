import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Combyn</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3a7dff',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default SplashScreen;
