import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const ProductsSection = ({ showAllProducts, setShowAllProducts }) => {
    const products = [
        { id: '1', image: require('../assets/pngwing.com.png') },
        { id: '2', image: require('../assets/pngwing.com.png') },
        { id: '3', image: require('../assets/pngwing.com.png') },
        { id: '4', image: require('../assets/pngwing.com.png') },
        { id: '5', image: require('../assets/pngwing.com.png') },
        { id: '6', image: require('../assets/pngwing.com.png') },
    ];

    const renderProduct = ({ item }) => (
        <View style={styles.productItem}>
            <Image source={item.image} style={styles.productImage} />
        </View>
    );

    return (
        <View style={styles.sectionContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Ürünlerim</Text>
                <TouchableOpacity onPress={() => setShowAllProducts(true)}>
                    <Text style={styles.headerAction}>TÜMÜ</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={showAllProducts ? [...products, ...products, ...products] : products}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.productList}
            />
        </View>
    );
};

const SupportSection = () => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.supportTitle}>Destek Araçları</Text>

            <TouchableOpacity style={styles.supportButton}>
                <Icon name="support-agent" size={20} color="#000" />
                <Text style={styles.supportButtonText}>Teknik Destek Talebi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.supportButton}>
                <Icon name="verified-user" size={20} color="#000" />
                <Text style={styles.supportButtonText}>Garanti Kapsamı</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.supportButton}>
                <Icon name="add-box" size={20} color="#000" />
                <Text style={styles.supportButtonText}>Ürün Tanımla</Text>
            </TouchableOpacity>
        </View>
    );
};

const DolapScreen = () => {
    const [showAllProducts, setShowAllProducts] = React.useState(false);
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ProductsSection showAllProducts={showAllProducts} setShowAllProducts={setShowAllProducts} />
            <SupportSection />
        </ScrollView>
    );
};

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Dolap" component={DolapScreen} options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }} />
                <Tab.Screen name="Keşfet" component={DolapScreen} options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="search" color={color} size={size} />
                    ),
                }} />
                <Tab.Screen name="Favoriler" component={DolapScreen} options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="favorite" color={color} size={size} />
                    ),
                }} />
                <Tab.Screen name="Hesabım" component={DolapScreen} options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="person" color={color} size={size} />
                    ),
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingTop: 40,

    },
    sectionContainer: {
        marginBottom: 40,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    headerAction: {
        fontSize: 14,
        color: '#1E2AFF',
        fontWeight: 'bold',
    },
    productList: {
        paddingVertical: 10,

    },
    productItem: {
        marginRight: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        padding: 6,
    },
    productImage: {
        width: 100,
        height: 100,



    },
    supportTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },
    supportButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        marginBottom: 10,
    },
    supportButtonText: {
        fontSize: 14,
        color: 'black',
        marginLeft: 10,
    },
});

export default App;
