import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import { Header, Item, Input, Icon, Button, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native'


export default function Maps() {
  const { goBack } = useNavigation();

  function handlerNavigateInLanding() {
    goBack();
  }
  return (
    <View style={styles.container}>
      <Header style={{ marginTop: 50 }} searchBar rounded>
        <Item style={{backgroundColor: '#ddd', borderRadius: 50}}>
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={handlerNavigateInLanding}
        >
          <Icon style={{ color: 'black' }} name="ios-arrow-back" />
        </TouchableOpacity>
          <Input />
          <Icon name="ios-search" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
      <MapView
        style={styles.mapStyle}
        region={{
          latitude: -27.210753,
          longitude: -49.644183,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});