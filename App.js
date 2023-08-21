import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.city}>
        <Text style={styles.cityName}>Busan</Text>
      </View>
      <View style={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>31℃</Text>
          <Text style={styles.description}>맑음</Text>
        </View>
      </View>
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
    flex: 2
  },
  day: {
    flex: 1,
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
