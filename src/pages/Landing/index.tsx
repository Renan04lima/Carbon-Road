import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';
import { useNavigation } from '@react-navigation/native'

import BackImg from '../../../assets/background.png';
import Logo from '../../../assets/logo.png';

export default function App() {
  const {navigate} = useNavigation();

  function handlerNavigateInMaps(){
    navigate('Maps');
  }
  
  return (
    <View style={styles.container}>
      <ImageBackground source={BackImg} style={styles.image}>
        <View style={styles.items_container}>
          <View>
            <Image style={styles.logo} source={Logo} />
          </View>

          <View>
            <Text style={styles.subtext}>
              Discover the carbon {"\n"}
              footprints in your daily {"\n"}
              life, city and its {"\n"}
              influences on your {"\n"}
              health.
            </Text>
            <View style={styles.button}>
              <Button 
              full 
              rounded 
              success
              onPress={handlerNavigateInMaps}
              >
                <Text style={styles.buttontext} >Get Started</Text>
              </Button>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  items_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  logo: {
    width: 161,
    height: 171,
  },
  subtext: {
    fontSize: 15,
    color: "#fff",
    fontFamily: "Roboto_400Regular",
    marginBottom: 70
  },
  button: {
    width: 200,
  },
  buttontext: {
    fontSize: 25,
    color: "#fff",
    fontFamily: "Roboto_700Bold"
  },
});
