import React from 'react';
import { Feather as Icon } from '@expo/vector-icons'
import { View, Image, ImageBackground, StyleSheet, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'


const Home = () => {
  const navigation = useNavigation();
  function handleNavigateToAdministrator() {
    navigation.navigate('Administrator')
  }

  return (
    <ImageBackground 
        source={require('../../assets/background.png')}  
        style={styles.container}
    >
      <View style={styles.main}>
        <Image source={require('../../assets/Logo.png')} />
        <Text style={styles.title}>Gerencie seus nogócios</Text>
        <Text style={styles.description}>A melhor plataforma de gerenciamento é aqui</Text>
      </View>
      

      <View style={styles.footer}>
          <TextInput
            style={styles.input}
            placeholder="Email ou CPF" 
          />
          <TextInput 
            style={styles.input}
            placeholder="Senha" 
          />
        <RectButton style={styles.button} onPress={handleNavigateToAdministrator}>
          <View style={styles.buttonIcon}>
            <Text>
              <Icon name="arrow-right" color="#FFF" size={24} />
            </Text>
          </View>
          <Text style={styles.buttonText}>Login</Text>
        </RectButton>
      </View>
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 48,
        backgroundColor: '#E4E4E4'
    },
  
    main: {
      flex: 1,
      justifyContent: 'flex-start',
      marginTop: 64,
    },
  
    title: {
      color: '#322153',
      fontSize: 32,
      fontFamily: 'Ubuntu_700Bold',
      maxWidth: 260,
      marginTop: 64,
    },
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 16,
      fontFamily: 'Roboto_400Regular',
      maxWidth: 260,
      lineHeight: 24,
    },
  
    inputBody: {
      height: 250,
    },

    footer: {},
  
    select: {},
  
    input: {
      height: 50,
      top: 45,
      backgroundColor: '#FFF',
      borderRadius: 4,
      marginBottom: 8,
      paddingHorizontal: 24,
      fontSize: 16,
    },
  
    button: {
      backgroundColor: '#3C0D8B',
      height: 60,
      top: 40,
      flexDirection: 'row',
      borderRadius: 10,
      overflow: 'hidden',
      alignItems: 'center',
      marginTop: 8,
    },
  
    buttonIcon: {
      height: "100%",
      borderRadius: 10,
      width: 60,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    buttonText: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      color: '#FFF',
      fontFamily: 'Roboto_500Medium',
      fontSize: 16,
    }
  });

export default Home;