import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";


export default function HomeScreen({route}){
    
    const navigation = useNavigation();
    const Data = route.params.data;

debugger
    return (
        <View>
            <Text> Home page </Text>           

                <Text>Quatidade de Itens: {Data ? Data.length : 0}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Service")}>
                <Text>Ir Para Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    container : {
        flex: 1,     
        alignItems: 'center',
    },
    form : {
        width: 300,
        borderWidth: 1,
        borderColor: "blue",    
        margin: 2,
        borderRadius: 5,
    },
    input : {
        fontSize: "1.2em",
        padding: 4, 
        width: "100%"
    },
    active_danger: {
        fontSize: "1.4em",
        backgroundColor: "red",
        padding: 6,
        borderRadius: 5,
    },
    form_danger: {
        width: 300, 
        borderRadius: 5, 
        textAlign: "center"
    },
    active_danger: {
        fontSize: "1.4em",
        backgroundColor: "red",
        padding: 6,
        borderRadius: 5,
    },
    divider: {
        width: "100%", 
        borderWidth: 1,
        borderColor: "black",    
    },
    item: {
        display: "flex",
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "black",
        width: 600, 
        margin: 2,
    },
    title: {
        margin: 4,
        flex: 0.5
    }
})
