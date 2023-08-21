import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, ScrollView, Dimensions } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.city}>
        <Text style={styles.cityName}>Busan</Text>
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
