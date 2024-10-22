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
        
    ];
    // Dolap İçindeki Sayfalar
const DolapPage1 = ({ navigation }) => (
    <View>
        <Text>Dolap Page 1</Text>
        <Button title="Go to Page 2" onPress={() => navigation.navigate('DolapPage2')} />
    </View>
);

const DolapPage2 = ({ navigation }) => (
    <View>
        <Text>Dolap Page 2</Text>
        <Button title="Go to Page 3" onPress={() => navigation.navigate('DolapPage3')} />
    </View>
);

const DolapPage3 = ({ navigation }) => (
    <View>
        <Text>Dolap Page 3</Text>
        <Button title="Go to Page 4" onPress={() => navigation.navigate('DolapPage4')} />
    </View>
);

const DolapPage4 = ({ navigation }) => (
    <View>
        <Text>Dolap Page 4</Text>
        <Button title="Go to Page 5" onPress={() => navigation.navigate('DolapPage5')} />
    </View>
);

const DolapPage5 = () => (
    <View>
        <Text>Dolap Page 5</Text>
    </View>
);
// Dolap Stack Navigator
const DolapStack = createStackNavigator();

function DolapStackNavigator() {
    return (
        <DolapStack.Navigator>
            <DolapStack.Screen name="DolapPage1" component={DolapPage1} />
            <DolapStack.Screen name="DolapPage2" component={DolapPage2} />
            <DolapStack.Screen name="DolapPage3" component={DolapPage3} />
            <DolapStack.Screen name="DolapPage4" component={DolapPage4} />
            <DolapStack.Screen name="DolapPage5" component={DolapPage5} />
        </DolapStack.Navigator>
    );
}


    const renderProduct = ({ item }) => (
        <View style={styles.productItem}>
            <Image source={item.image} style={styles.productImage} />
        </View>
    );

    return (
        <View style={styles.sectionContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Ürünlerim</Text>
                <TouchableOpacity onPress={() => setShowAllProducts(!showAllProducts)}>
                    <Text style={styles.headerAction}>{showAllProducts ? 'KÜÇÜLT' : 'TÜMÜ'}</Text>
                </TouchableOpacity>
            </View>

            <FlatList numColumns={showAllProducts ? 3 : 1} horizontal={!showAllProducts} key={showAllProducts ? 'grid' : 'list'}
                data={products}

                renderItem={renderProduct}
                keyExtractor={(item) => item.id}
                                
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

const ProductsScreen = () => {
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
                <Tab.Screen name="Dolap" component={DolapStackNavigator} options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }} />
                <Tab.Screen name="Keşfet" component={ProductsScreen} options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="search" color={color} size={size} />
                    ),
                }} />
                <Tab.Screen name="Favoriler" component={ProductsScreen} options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="favorite" color={color} size={size} />
                    ),
                }} />
                <Tab.Screen name="Hesabım" component={ProductsScreen} options={{
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
        paddingTop: 10,
    },
    sectionContainer: {
        marginBottom: 20,
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
        marginRight: 7,
        marginBottom: 7,
        padding:10,
        backgroundColor: 'gray',
        borderRadius: 8,
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
