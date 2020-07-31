import React from 'react';
import { View, StyleSheet, Image, ImageBackground, TouchableOpacity, Text, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';

const Administrator = () => {
    const navigation = useNavigation();
    function handleNavigationBack() {
        navigation.goBack();
    }

    function handleNavigationToFeatures() {
        navigation.navigate('Features');
    }

    return (
        <ImageBackground 
            style={styles.container} 
            source={require('../../assets/background.png')}  
        >
            <View style={styles.header}>
                <TouchableOpacity onPress={handleNavigationBack}>
                    <AntDesign name="close" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Administrador</Text>
            </View>
            <TouchableOpacity style={styles.containerAdministrator}>
                <View style={styles.sliceElements}>
                    <Image source={{uri: 'http://192.168.15.6:3333/uploads/perfil.png'}} style={styles.imageUrl} />
                    <View style={styles.text}>
                        <Text style={styles.description}>Gustavo</Text>
                        <Text style={styles.description}>gustavofortti@gmail.com</Text>
                    </View>
                </View>
            </TouchableOpacity>
            
            <View style={styles.midle}>
                <Text style={styles.itemTitle}>Usuarios</Text>
            </View>

            <ScrollView style={styles.scroll}>
                <TouchableOpacity style={styles.containerUser} onPress={handleNavigationToFeatures}>
                    <View style={styles.sliceElements}>
                        <Image source={{uri: 'http://192.168.15.6:3333/uploads/perfil.png'}} style={styles.imageUrl} />
                        <View style={styles.text}>
                            <Text style={styles.description}>Gustavo</Text>
                            <Text style={styles.description}>gustavofortti@gmail.com</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerUser} onPress={handleNavigationToFeatures}>
                    <View style={styles.sliceElements}>
                        <Image source={{uri: 'http://192.168.15.6:3333/uploads/perfil.png'}} style={styles.imageUrl} />
                        <View style={styles.text}>
                            <Text style={styles.description}>Gustavo</Text>
                            <Text style={styles.description}>gustavofortti@gmail.com</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerUser} onPress={handleNavigationToFeatures}>
                    <View style={styles.sliceElements}>
                        <Image source={{uri: 'http://192.168.15.6:3333/uploads/perfil.png'}} style={styles.imageUrl} />
                        <View style={styles.text}>
                            <Text style={styles.description}>Gustavo</Text>
                            <Text style={styles.description}>gustavofortti@gmail.com</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerUser} onPress={handleNavigationToFeatures}>
                    <View style={styles.sliceElements}>
                        <Image source={{uri: 'http://192.168.15.6:3333/uploads/perfil.png'}} style={styles.imageUrl} />
                        <View style={styles.text}>
                            <Text style={styles.description}>Gustavo</Text>
                            <Text style={styles.description}>gustavofortti@gmail.com</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerUser} onPress={handleNavigationToFeatures}>
                    <View style={styles.sliceElements}>
                        <Image source={{uri: 'http://192.168.15.6:3333/uploads/perfil.png'}} style={styles.imageUrl} />
                        <View style={styles.text}>
                            <Text style={styles.description}>Gustavo</Text>
                            <Text style={styles.description}>gustavofortti@gmail.com</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerUser} onPress={handleNavigationToFeatures}>
                    <View style={styles.sliceElements}>
                        <Image source={{uri: 'http://192.168.15.6:3333/uploads/perfil.png'}} style={styles.imageUrl} />
                        <View style={styles.text}>
                            <Text style={styles.description}>Gustavo</Text>
                            <Text style={styles.description}>gustavofortti@gmail.com</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerUser} onPress={handleNavigationToFeatures}>
                    <View style={styles.sliceElements}>
                        <Image source={{uri: 'http://192.168.15.6:3333/uploads/perfil.png'}} style={styles.imageUrl} />
                        <View style={styles.text}>
                            <Text style={styles.description}>Gustavo</Text>
                            <Text style={styles.description}>gustavofortti@gmail.com</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                
               
            </ScrollView>
        </ImageBackground>        
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20 + Constants.statusBarHeight,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 0,
        marginTop: 20,
    }, 

    text: {
        justifyContent: 'space-evenly',
    },

    sliceElements: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginLeft: '-5%',
        alignItems: 'center',
    },

    scroll: {
        marginTop: 10,
    },

    containerAdministrator: {
        backgroundColor: '#FFFFFF',
        height: 100,
        marginTop: 50,
        justifyContent: 'center',
    },

    containerUser: {
        backgroundColor: '#FFFFFF',
        height: 100,
        marginTop: 5,
        justifyContent: 'center',
    },

    imageUrl: {
        height: 75,
        width: 75,
        borderRadius: 100,
    },

    title: {
        fontSize: 18,
        fontFamily: 'Ubuntu_700Bold',
        color: '#3A0E86',
        textAlign: 'right',
        marginStart: '42%'
    },

    midle: {
        marginTop: 25,
    }, 
    
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 4,
      fontFamily: 'Roboto_400Regular',
    },
  
    itemsContainer: {
      flexDirection: 'row',
      marginTop: 16,
      marginBottom: 32,
    },
  
    item: {
      backgroundColor: '#fff',
      borderWidth: 2,
      borderColor: '#eee',
      height: 120,
      width: 120,
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingTop: 20,
      paddingBottom: 16,
      marginRight: 8,
      alignItems: 'center',
      justifyContent: 'space-between',
  
      textAlign: 'center',
    },
  
    selectedItem: {
      borderColor: '#34CB79',
      borderWidth: 2,
    },
  
    itemTitle: {
      fontFamily: 'Roboto_400Regular',
      textAlign: 'center',
      fontSize: 18,
    },
  });

export default Administrator;