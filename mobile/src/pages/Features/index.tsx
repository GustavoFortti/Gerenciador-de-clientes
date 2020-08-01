import React, { useState, useEffect } from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity, Text, Image, TextInput, Keyboard } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api'

interface Data {
    id: number;
    name: string;
    email: string;
    password: string;
    cpf: string;
    image: string;
    // level: string;
    // enable: boolean;
}

const Features = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const id = route.params;
    const [user, setUsers] = useState(null);

    function handleNavigationBack() {
        navigation.goBack();
    }

    useEffect(() => {
        api.get(`api/users/show/${id}`).then(response => {
            setUsers(response.data);
        });
    }, []);

    return (

        <ImageBackground 
            style={styles.container} 
            source={require('../../assets/background.png')}  
        >
            <View style={styles.header}>
                <TouchableOpacity onPress={handleNavigationBack}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.midle}>
                <View style={styles.photo}>
                    <Image source={{uri: 'http://192.168.15.6:3333/uploads/perfil.jpeg'}} style={styles.imageUrl} />
                    <TouchableOpacity onPress={() => {}} style={styles.sum}>
                        <AntDesign name="pluscircle" size={24} color="#3A0E86" />
                    </TouchableOpacity> 
                </View>
                <RectButton style={styles.button} onPress={() => {}}>
                    <Text style={styles.buttonText}>Editar</Text>
                </RectButton>
            </View>
            <View style={styles.tail}>
                <View style={styles.containerInput}>
                    <Text style={styles.normalText}>
                        Nome
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome" //{`${user}`}
                    />
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.normalText}>
                        CPF
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email ou CPF" 
                    />
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.normalText}>
                        Email
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email ou CPF" 
                    />
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.normalText}>
                        Senha
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email ou CPF" 
                    />
                </View>
                <View style={styles.containerInput}>
                    <Text style={styles.normalText}>
                        Level
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email ou CPF" 
                    />
                </View>
                <View style={styles.containerInput}>
                    <Text style={styles.normalText}>
                        Estado
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email ou CPF" 
                    />
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 48,
        backgroundColor: '#E4E4E4'
    },

    header: {
        justifyContent: 'flex-start',
        left: '-12%',
        top: '3%'
    }, 

    photo: {},

    sum: {
        marginTop: "-5%",
        left: 80,
        top: -15,
    },

    title: {
        fontSize: 18,
        fontFamily: 'Ubuntu_700Bold',
        color: '#3A0E86',
        textAlign: 'right',
        marginStart: '42%'
    },

    normalText: {
        color: '#6D6D6D',
        fontFamily: 'Roboto_400Regular',
        textAlign: 'center',
        fontSize: 18,
    },

    midle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    tail: {
        marginTop: '10%',
    },

    imageUrl: {
        marginTop: 30,
        height: 105,
        width: 105,
        borderRadius: 100,
    },

    containerInput: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginLeft: -48,
        backgroundColor: '#FFF',
        height: 48,
        marginBottom: 8,
        width: 400,
    },

    input: {
        width: 200,
        height: 48,
        marginLeft: "20%",
        backgroundColor: '#FFF',
        borderRadius: 0,
        paddingHorizontal: 8,
        fontSize: 16,
      },

      button: {
        backgroundColor: '#3C0D8B',
        height: 30,
        width: 90,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
      },
 
      buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
      }
});

export default Features;