import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function MyButton({ title, onPress, backgroundColor = "#3a7dff", textColor = "#fff" }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor }]}>
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%', // Ekranın yüzde 90'ı kadar genişlik
    height: 35, // Daha küçük yükseklik
    justifyContent: 'center', // Dikey ortalama
    alignItems: 'center', // Yatay ortalama
    borderRadius: 10,
    marginVertical: 3, // Butonlar arasında daha az boşluk
    borderWidth: 1, // Sınır
    borderColor: '#ccc', // Gri sınır
  },
  buttonText: {
    fontSize: 14, // Daha küçük yazı boyutu
  },
});
