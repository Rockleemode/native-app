import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import Header from "./components/Header";
import List from "./components/List";
import Form from "./components/Form";

export default function App() {
  const [todo, setTodo] = useState([
    { name: "brush my teeth", key: 1 },
    { name: "eat breakfast", key: 2 },
    { name: "watch anime :)", key: 3 },
  ]);

  const handleDelete = (key) => {
    setTodo((prev) => prev.filter((item) => item.key !== key));
  };

  const handleAdd = (data) => {
    if (data.length) {
      setTodo([{ name: data, key: Math.random() }, ...todo]);
    } else {
      Alert.alert("the field is empty!");
    }
  };
  return (
    <TouchableWithoutFeedback
    onPress={() => Keyboard.dismiss()}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          {/* Header */}
          <Header />
          <View style={styles.form}>
            {/* Form */}
            <Form handleAdd={handleAdd} />
          <View style={styles.list}>
            {/* List of items */}
            <List item={todo} handleDelete={handleDelete} />
            </View>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  list:{

  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginTop: 30,
  },
  content:{
    flex:1
  },
  form:{
    flex:1,
  },
  list:{
    flex:1,
    
  }
});
