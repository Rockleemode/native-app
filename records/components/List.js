import React from "react";
import { StyleSheet, FlatList, Text, View, TouchableOpacity } from "react-native";


export default List = ( {item, handleDelete} ) =>{
    return(
        <View>
            <FlatList 
            data={item}
            renderItem={({ item }) => ( 
            <TouchableOpacity onPress={() => handleDelete(item.key)}>
                <Text style={styles.list}>{item.name}</Text>
            </TouchableOpacity>
            )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    list:{
        borderWidth:1,
        borderColor:"grey",
        marginHorizontal:10,
        marginTop:10,
        padding:10,
        fontSize:25,
        borderRadius:6
    }
})