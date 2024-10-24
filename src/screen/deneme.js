import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, Button,ScrollView ,TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

const products = [
    { id: '1', image: require('../assets/pngwing.com.png') },
    { id: '2', image: require('../assets/pngwing.com.png') },
    { id: '3', image: require('../assets/pngwing.com.png') },
    { id: '4', image: require('../assets/pngwing.com.png') },
    { id: '5', image: require('../assets/pngwing.com.png') },
    { id: '6', image: require('../assets/pngwing.com.png') },
    { id: '7', image: require('../assets/pngwing.com.png') },
    { id: '8', image: require('../assets/pngwing.com.png') },
    { id: '9', image: require('../assets/pngwing.com.png') },
    { id: '10', image: require('../assets/pngwing.com.png') },
    { id: '11', image: require('../assets/pngwing.com.png') },
    { id: '12', image: require('../assets/pngwing.com.png') },
 
];

const renderProduct = ({ item }) => (
    <View style={styles.productItem}>
        <Image source={item.image} style={styles.productImage} />
    </View>
);

// Dolap Sayfaları
const DolapPage1 = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.firstContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Ürünlerim</Text>
                <TouchableOpacity onPress={() => navigation.navigate('DolapPage2')}>
                    <Text style={styles.headerAction}>TÜMÜ</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={products}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.productList}
            />
        </View>
        <View style={styles.secondContainer}>
            <Text style={styles.supportTitle}>Destek Araçları</Text>

            <TouchableOpacity style={styles.supportButton} onPress={() => navigation.navigate('DolapPage3')}>
                <Icon name="support-agent" size={20} color="#000" />
                <Text style={styles.supportButtonText}>Teknik Destek Talebi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.supportButton} onPress={() => navigation.navigate('DolapPage4')}>
                <Icon name="verified-user" size={20} color="#000" />
                <Text style={styles.supportButtonText}>Garanti Kapsamı</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.supportButton} onPress={() => navigation.navigate('DolapPage5')}>
                <Icon name="add-box" size={20} color="#000" />
                <Text style={styles.supportButtonText}>Ürün Tanımla</Text>
            </TouchableOpacity>
        </View>
    </View>

);

const DolapPage2 = ({ navigation }) => (
    <ScrollView>
    <View style={styles.container}>
        <View style={styles.firstContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Tüm Ürünlerim</Text>
                
            </View>

            <FlatList
                data={products}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.productList}
            />
        </View>
        
        <View style={styles.secondContainer}>
            <Text style={styles.supportTitle}>Destek Araçları</Text>

            <TouchableOpacity style={styles.supportButton} onPress={() => navigation.navigate('DolapPage3')}>
                <Icon name="support-agent" size={20} color="#000" />
                <Text style={styles.supportButtonText}>Teknik Destek Talebi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.supportButton} onPress={() => navigation.navigate('DolapPage4')}>
                <Icon name="verified-user" size={20} color="#000" />
                <Text style={styles.supportButtonText}>Garanti Kapsamı</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.supportButton} onPress={() => navigation.navigate('DolapPage5')}>
                <Icon name="add-box" size={20} color="#000" />
                <Text style={styles.supportButtonText}>Ürün Tanımla</Text>
            </TouchableOpacity>
        </View>
    </View>
    </ScrollView>
);

const DolapPage3 = () => (
    <View style={styles.pageContainer}>
        <Text style={styles.pageTitle}>Teknik Destek Talebi</Text>
        <View style={styles.supportFormContainer}>
            <View style={styles.productInfoContainer}>
                <Image source={require('../assets/pngwing.com.png')} style={styles.productThumbnail} />
                <View style={styles.productDetails}>
                    <Text style={styles.productTitle}>ZARA T-SHIRT</Text>
                    <Text style={styles.productSubtitle}>XL</Text>
                    <Text style={styles.productSubtitle}>%90 Pamuk, %2 Polyester</Text>
                </View>
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Destek Konusu*" style={styles.input} />
                <TextInput placeholder="Açıklama*" style={[styles.input, styles.textArea]} multiline />
                <TouchableOpacity style={styles.uploadButton}>
                    <Icon name="cloud-upload" size={30} color="#9E9E9E" />
                    <Text style={styles.uploadText}>Görsel Yükle *</Text>
                </TouchableOpacity>
            </View>
            <Button title="Gönder" color="#1E2AFF" />
        </View>
    </View>
);

const DolapPage4 = () => (
    <View style={styles.pageContainer}>
        <Text style={styles.pageTitle}>Garanti Kapsamı</Text>
        <View style={styles.supportFormContainer}>
            <View style={styles.productInfoContainer}>
                <Image source={require('../assets/pngwing.com.png')} style={styles.productThumbnail} />
                <View style={styles.productDetails}>
                    <Text style={styles.productTitle}>Zara T-shirt</Text>
                    <Text style={styles.productSubtitle}>Zara Erkek Siyah Desenli Tişört XL</Text>
                    <Text style={styles.productSubtitle}>ID No: 12322356</Text>
                    <Text style={styles.productLink}>https://combyn.io/22356/ID:12322356</Text>
                </View>
            </View>
            <View style={styles.warrantyContainer}>
                <Text style={styles.warrantyTitle}>Garanti Kapsamı</Text>
                <Text style={styles.warrantyDetails}>Satın alınma tarihi: 14.10.2024</Text>
                <View style={styles.pdfContainer}>
                    <Icon name="picture-as-pdf" size={30} color="#1E2AFF" />
                    <View style={styles.pdfDetails}>
                        <Text style={styles.pdfTitle}>Fatura.pdf</Text>
                        <Text style={styles.pdfSize}>120 KB</Text>
                    </View>
                    <Icon name="cloud-download" size={24} color="#1E2AFF" />
                </View>
            </View>
        </View>
    </View>
);

const DolapPage5 = () => (
    <View style={styles.pageContainer}>
        <Text style={styles.pageTitle}>Ürün Bilgisi</Text>
        <View style={styles.productInfoContainerFull}>
            <Image source={require('../assets/pngwing.com.png')} style={styles.productImageLarge} />
            <View style={styles.productDetailsFull}>
                <Text style={styles.productTitle}>Zara T-shirt</Text>
                <Text style={styles.productSubtitle}>Zara Erkek Siyah Desenli Tişört XL</Text>
                <Text style={styles.productSubtitle}>ID No: 12322356</Text>
                <Text style={styles.productLink}>https://combyn.io/22356/ID:12322356</Text>
            </View>
        </View>
        <View style={styles.supportSectionContainer}>
            <Text style={styles.supportTitle}>Destek Araçları</Text>
            <TouchableOpacity style={styles.supportButton} onPress={() => {}}>
                <Icon name="support-agent" size={20} color="#000" />
                <Text style={styles.supportButtonText}>Teknik Destek Talebi</Text>
            </TouchableOpacity>
        </View>
    </View>
);

// Diğer Sekmeler için Sayfalar
const SearchScreen = () => <Text>Keşfet Page</Text>;
const FavoritesScreen = () => <Text>Favoriler Page</Text>;
const ProfileScreen = () => <Text>Hesabım Page</Text>;

// Dolap Stack Navigator
const DolapStack = createStackNavigator();

function DolapStackNavigator() {
    return (
        <DolapStack.Navigator>
            <DolapStack.Screen name="DolapPage1" component={DolapPage1} options={{ headerShown: false }} />
            <DolapStack.Screen name="DolapPage2" component={DolapPage2} options={{ headerShown: false }} />
            <DolapStack.Screen name="DolapPage3" component={DolapPage3} options={{ headerShown: false }} />
            <DolapStack.Screen name="DolapPage4" component={DolapPage4} options={{ headerShown: false }} />
            <DolapStack.Screen name="DolapPage5" component={DolapPage5} options={{ headerShown: false }} />
        </DolapStack.Navigator>
    );
}

// Tab Navigator
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
                <Tab.Screen name="Keşfet" component={SearchScreen} options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="search" color={color} size={size} />
                    ),
                }} />
                <Tab.Screen name="Favoriler" component={FavoritesScreen} options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="favorite" color={color} size={size} />
                    ),
                }} />
                <Tab.Screen name="Hesabım" component={ProfileScreen} options={{
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
    scrollContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingTop: 40,
    },
    sectionContainer: {
        marginBottom: 20,
        padding: 16,
        borderRadius: 10,
    },
    productsSection: {
        backgroundColor: '#f5f5f5',
    },
    supportSection: {
        backgroundColor: '#f5f5f5',
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
        margin: 10,
        backgroundColor: '#e6e6e6',
        borderRadius: 8,
        padding: 6,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    productImage: {
        width: 100,
        height: 100,
    },
    productImageLarge: {
        width: '100%',
        height: 200,
        marginBottom: 20,
        borderRadius: 8,
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
        backgroundColor: '#e6e6e6',
        borderRadius: 8,
        marginBottom: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    supportButtonText: {
        fontSize: 14,
        color: 'black',
        marginLeft: 10,
    },
    pageContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    pageTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
    },
    supportFormContainer: {
        backgroundColor: '#f5f5f5',
        padding: 20,
        borderRadius: 10,
    },
    productInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    productInfoContainerFull: {
        alignItems: 'center',
        marginBottom: 20,
    },
    productThumbnail: {
        width: 60,
        height: 60,
        marginRight: 15,
    },
    productDetails: {
        flex: 1,
    },
    productDetailsFull: {
        alignItems: 'center',
    },
    productTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    productSubtitle: {
        fontSize: 14,
        color: '#757575',
    },
    productLink: {
        fontSize: 14,
        color: '#1E2AFF',
        textDecorationLine: 'underline',
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        marginBottom: 10,
    },
    textArea: {
        height: 100,
    },
    uploadButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        marginBottom: 20,
    },
    uploadText: {
        fontSize: 14,
        color: '#757575',
        marginLeft: 10,
    },
    warrantyContainer: {
        marginTop: 20,
    },
    warrantyTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    warrantyDetails: {
        fontSize: 14,
        color: '#757575',
        marginBottom: 20,
    },
    pdfContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    pdfDetails: {
        flex: 1,
        marginLeft: 10,
    },
    pdfTitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    pdfSize: {
        fontSize: 12,
        color: '#757575',
    },
});

export default App;

