import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1, backgroundColor: "tomato" }}></View>
      <View style={{ flex: 1, backgroundColor: "teal" }}></View>
      <View style={{ flex: 1, backgroundColor: "orange" }}></View>
    </View>
  );
}

/***************************************************************************************************
 * 2.4 layout system
 *
 * - Flexbox 는 다양한 스크린 크기에서 일관된 레이아웃을 제공하도록 설계되었다
 * - View 컴포넌트는 기본적으로 Flexbox 이다
 * - 따로 container 를 지정하지 않아도, 상위 컴포넌트는 container 역할을 수행한다
 ***************************************************************************************************/
