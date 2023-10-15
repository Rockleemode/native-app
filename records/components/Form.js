import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, Button } from "react-native";

export default Form = ({ handleAdd }) =>{

    const [text, setText] = useState("");
    return(
        <View>
            <TextInput
            style={styles.form}
            onChangeText={(val) => setText(val)}
            placeholder="todos..."
            />
            <Button title="submit" color={"grey"} onPress={() => handleAdd(text) }/>
        </View>
    )
}

const styles = StyleSheet.create({
    form:{
        borderBottomWidth:1,
        borderColor:"black",
        padding:10,
        marginBottom:10,
        paddingTop:10
    }
})