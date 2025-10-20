import  React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions, Text, TouchableOpacity, Alert } from 'react-native';
import Swiper from 'react-native-swiper';
import PersonalInfo from './components/PersonalInfo';
import MovieBooking from './components/MovieBooking';


export default function App() {
  const [booking, setBooking] = useState({
      bookDate: "2000-02-02",
      movieTitle: "",
      numberOfSeats: 0,
      balcony: 0,
  });

  async function saveData() {
    const uuid = Crypto.randomUUID();
    await AsyncStorage.setItem(uuid, JSON.stringify(booking));
    alert("Saved with UUID: " + uuid);
    Alert.alert("Saved with UUID: " + uuid);
  }

  return (
    <View style={styles.screencontainer}>
      <View style={styles.imgview}><Image source={require('./assets/moviesV3.png')}/></View>
      <Swiper showsButtons={true}>
          <PersonalInfo screenstyle={styles.screen}/>
          <MovieBooking screenstyle={styles.screen}/>
      </Swiper>
    </View>
  )
}
var width = Dimensions.get('window');
const styles = StyleSheet.create({
  imgview: {
    flexDirection: "row",
    justifyContent: "center",
    flex: .5,
    marginTop: "8%"
  }, 
  screencontainer: {
    flexDirection:"column",
    flex: 1,
    padding: "1%",
    backgroundColor: "lightgrey"
  },
  screen: {
    flex: 1,
    alignItems: "start",
    padding: "10%"
  }

});
