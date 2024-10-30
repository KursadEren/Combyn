import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Alert, FlatList,Linking, Image, Button, ScrollView, TextInput, SafeAreaView,Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useState } from 'react';


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
            <TouchableOpacity style={styles.supportButton} onPress={() => { }}>
                <Icon name="support-agent" size={20} color="#000" />
                <Text style={styles.supportButtonText}>Teknik Destek Talebi</Text>
            </TouchableOpacity>
        </View>
    </View>
);
const ProfilePage1 = ({ navigation }) => {
    const handleLogout = () => {
        Alert.alert(
            "Çıkış Yap",
            "Çıkmak istiyor musunuz?",
            [
                {
                    text: "Hayır",
                    onPress: () => console.log("Çıkış yapılmadı"),
                    style: "cancel"
                },
                { 
                    text: "Evet", 
                    onPress: () => navigation.navigate('CikisYap') 
                }
            ]
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>Hesabım</Text>
                </View>
                <View style={styles.menuItemContainer}>
                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ProfilePage2')}>
                        <Icon name="person-outline" size={24} color="black" />
                        <Text style={styles.menuItemText}>Hesap Bilgileri</Text>
                        <Icon name="chevron-right" size={24} color="gray" style={styles.menuItemIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => Linking.openURL('http://combyn.io/gizlilik-politikasi')}>
                        <Icon name="lock-outline" size={24} color="black" />
                        <Text style={styles.menuItemText}>Gizlilik</Text>
                        <Icon name="chevron-right" size={24} color="gray" style={styles.menuItemIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ProfilePage3')}>
                        <Icon name="notifications-none" size={24} color="black" />
                        <Text style={styles.menuItemText}>Bildirimler</Text>
                        <Icon name="chevron-right" size={24} color="gray" style={styles.menuItemIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Yardim')}>
                        <Icon name="help-outline" size={24} color="black" />
                        <Text style={styles.menuItemText}>Yardım</Text>
                        <Icon name="chevron-right" size={24} color="gray" style={styles.menuItemIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
                        <Icon name="logout" size={24} color="black" />
                        <Text style={styles.menuItemText}>Çıkış Yap</Text>
                        <Icon name="chevron-right" size={24} color="gray" style={styles.menuItemIcon} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
const ProfilePage2 = () => {
    return (
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <View style={styles.headerContainer}>
              <Text style={styles.headerTitle}>Hesabım</Text>
            </View>
            <View style={styles.inputContainer2}>
              <TextInput
                style={styles.input2}
                value="Çağrı Küçük"
                editable={false}
              />
              <TextInput
                style={styles.input2}
                value="cagrikucuk"
                editable={false}
              />
              <TextInput
                style={styles.input2}
                value="cagri@combyn.io"
                editable={false}
              />
              <TouchableOpacity style={styles.selectInput}>
                <Text style={styles.selectText}>Erkek giyim</Text>
                <Icon name="arrow-drop-down" size={24} color="gray" />
              </TouchableOpacity>
              <TextInput
                style={styles.input2}
                value="01/01/2024"
                editable={false}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      );
};

const ProfilePage3 = () => {
    const [isAppNotificationEnabled, setIsAppNotificationEnabled] = useState(true);
  const [isMailNotificationEnabled, setIsMailNotificationEnabled] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Bildirimler</Text>
        </View>
        <View style={styles.notificationContainer}>
          <View style={styles.notificationItem}>
            <Text style={styles.notificationText}>Uygulama bildirimleri</Text>
            <Switch
              value={isAppNotificationEnabled}
              onValueChange={setIsAppNotificationEnabled}
            />
          </View>
          <View style={styles.notificationItem}>
            <Text style={styles.notificationText}>Mail bildirimleri</Text>
            <Switch
              value={isMailNotificationEnabled}
              onValueChange={setIsMailNotificationEnabled}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Diğer Sekmeler için Sayfalar
const SearchScreen = () => <Text>Keşfet Page</Text>;
const FavoritesScreen = () => <Text>Favoriler Page</Text>;


// Dolap Stack Navigator
const DolapStack = createStackNavigator();
const ProfileStack = createStackNavigator();

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
function ProfileStackNavigator() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="ProfilePage1" component={ProfilePage1} options={{ headerShown: false }} />
            <ProfileStack.Screen name="ProfilePage2" component={ProfilePage2} options={{ headerShown: false }} />
            <ProfileStack.Screen name="ProfilePage3" component={ProfilePage3} options={{ headerShown: false }} />

        </ProfileStack.Navigator>
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
                <Tab.Screen name="Hesabım" component={ProfileStackNavigator} options={{
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
        marginBottom:10,
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
    inputContainer2: {
        marginBottom: 20,
        marginLeft:10,
        marginRight:10,
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
    menuItemContainer: {
        marginTop: 20,
        marginLeft:10,
        marginRight:10,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#f4f5f6',
        borderRadius: 8,
        marginBottom: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    menuItemText: {
        fontSize: 14,
        color: 'black',
        marginLeft: 10,
        fontWeight: 'bold',
    },
    menuItemIcon: {
        marginLeft: 'auto',
        
    },
    input2: {
        backgroundColor: '#f4f5f6',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 8,
        fontSize: 16,
        color: '#333',
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 2.22,
      },
      selectInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f8f8f8',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 8,
        marginBottom: 15,
      },
      selectText: {
        fontSize: 16,
        color: '#333',
      },
      notificationContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
      },
      notificationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f4f5f6',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 8,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 2.22,
      },
      notificationText: {
        fontSize: 16,
        color: '#000',
        fontWeight:'bold',

      },

});

export default App;

