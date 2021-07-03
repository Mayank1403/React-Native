import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [count, setCount] = useState(1);

  return (
    <View style={styles.container}>
      <Text style={styles.number}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="+1"
          onPress={() => setCount(count + 1)}
          style={styles.button}
        />
        <Button title="-1" onPress={() => setCount(count - 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffff",
    alignItems: "center",
    justifyContent: "center",
  },

  number: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
  },

  button: {
    borderColor: "red",
    borderWidth: 1,
    borderStyle: "solid",
  },
});
