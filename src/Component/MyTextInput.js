import { StyleSheet, TextInput, View, Text } from 'react-native';
import React from 'react';

export default function MyTextInput({ info,placeholder ,iconName}) {
  return (
    <View style={styles.container}>
      <Icon name={iconName} size={20} color="black" style={styles.icon} /> {/* Kullanıcı simgesi */}
      <Text style={styles.label}>{info}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#888"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%', // Ekranın yüzde 90'ı kadar genişlik
    marginVertical: 5, // Dikey boşluk
  },
  label: {
    fontSize: 12, // Daha küçük yazı boyutu
    marginBottom: 3, // Daha az boşluk
    color: 'black', // Siyah renk
    fontWeight: 'bold', // Metni kalın yapar
  },
  icon: {
    marginRight: 10, // İkon ile input arasında boşluk
  },
  input: {
    height: 35, // Daha küçük yükseklik
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 14, // Yazı boyutu
  },
});
