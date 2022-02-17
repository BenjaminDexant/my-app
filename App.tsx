import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.globalcontainer}>
      <View style={styles.containera}>
        <Text style={styles.text}>Hello, world!</Text>
        <Text style={styles.text}>Hello, world!</Text>
        <Text style={styles.text}>Hello, world!</Text>
        <Button title="This is a button" />
      </View>
      <View style={styles.containerb}>
        <Text style={styles.text}>Hello, world!</Text>
        <Text style={styles.text}>Hello, world!</Text>
        <Text style={styles.text}>Hello, world!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
  containera: {
    backgroundColor: "grey",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerb: {
    backgroundColor: "lightgreen",
    alignItems: "flex-end",
  },
  globalcontainer: {
    flex: 1,
  },
});