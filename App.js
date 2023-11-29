import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView, Dimensions } from "react-native";
import * as Location from "expo-location";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  const [city, setCity] = useState("Loading...");
  const [location, setLocation] = useState();
  const [ok, setOk] = useState(true);
  const ask = async () => {
    const permission = await Location.requestForegroundPermissionsAsync();
    // console.log(permission);
    if (!permission.granted) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude }
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    // console.log(location);
    setCity(location[0].city);
  };
  useEffect(() => {
    ask();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
      >
        <View style={styles.day}>
          <Text style={styles.temp}>31℃</Text>
          <Text style={styles.description}>맑음</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>31℃</Text>
          <Text style={styles.description}>맑음</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>31℃</Text>
          <Text style={styles.description}>맑음</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>31℃</Text>
          <Text style={styles.description}>맑음</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>31℃</Text>
          <Text style={styles.description}>맑음</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow"
  },
  city: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cityName: {
    fontSize: 80,
    fontWeight: "bold"
  },
  weather: {
    backgroundColor: "orange"
  },
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center"
  },
  temp: {
    marginTop: 10,
    fontSize: 120
  },
  description: {
    fontSize: 60
  }
});
