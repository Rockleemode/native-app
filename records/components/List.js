import React from "react";
import { StyleSheet, FlatList, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

export default List = ( {item, handleDelete} ) =>{
    return(
        <View style={styles.container}>
            <FlatList 
            data={item}
            renderItem={({ item }) => ( 
            <TouchableOpacity onPress={() => handleDelete(item.key)}>
                <View style={styles.list}>
                <Text style={styles.listText}>{item.name}</Text>
                <MaterialIcons style={styles.icon} name="delete-outline" size={24} color="black" />
                </View>
            </TouchableOpacity>
            )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    },
    list:{
        flexDirection:"row",
        borderWidth:1,
        borderColor:"grey",
        marginHorizontal:10,
        marginTop:10,
        padding:10,
        borderRadius:6,
        justifyContent:"space-between"
    },
    listText:{
        fontSize:25,
    }
})