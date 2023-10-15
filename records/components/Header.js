import React from "react"
import { StyleSheet, View, Text } from "react-native"

export default Header = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.head}>Todo List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:50,
        backgroundColor:"grey",
        borderRadius:6
    },
    head:{
        color:"white",
        display:"flex",
        justifyContent:"center",
        textAlign:"center",
        fontSize:20,
        marginTop:10,
        fontWeight:"bold"
        
    }
})