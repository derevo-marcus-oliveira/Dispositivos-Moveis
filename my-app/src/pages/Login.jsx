import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import React from "react";
import { useNavigation,  } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';

export default function LoginScreen() {
    

    const navigation = useNavigation();
    const [text, onSetText] = React.useState('');
    const [password, onSetPassword] = React.useState('');

    
    return (

        <View style={styles.container}>
            <Text style={styles.textTitulo}>Login page</Text>

            <View style={styles.area}>
                <View >
                    <Text style={styles.text}>User</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => onSetText(text)}
                        value={text}
                    />
                    
                </View>
                <View >
                    <Text style={styles.text}>Password</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(password) => onSetPassword(password)}
                        value={password}
                    />
                </View>
                <View >
                
                    <TouchableOpacity onPress={() => navigation.navigate("Home", {data: []})} style={styles.button}>
                        <Text style={styles.textButton}>Ir para Home</Text>
                    </TouchableOpacity>
                </View>
          
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    area: {
        height: 260,
        width: 340,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTitulo: {
        color: "#fff",
        backgroundColor: '#029',
        padding: "6px",
        marginTop: "15px",
        fontSize: "2.5em" ,
        width: "100%",
        textAlign: "center"
    },
    text: {
        fontSize: "1.2em" ,
    },
    textButton: {
        fontSize: "1.2em" ,
        color: "#fff",
    },
    input: {
        fontSize: "1.2em",
        borderWidth: 1,
        borderRadius: 5
    },
    button: {
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#029c',
        color: "#fff",
        marginTop: 12,
        padding : 4
    }
  });