import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-paper';
import React, { useState } from 'react'

const UserInput = ({ navigation }) => {
    
    const [userName, setUserName] = useState("");


    const handleChanged = (e) => {
        e.preventDefault();
        if ( userName.length !== 0) {
            setUserName(userName)
            navigation.navigate("ChatScreen", {  name: userName })
        } else {
            setUserName("")

        }
    }

    return (
        <View style={{ paddingTop: 100 }}>
            <View style={{ height: 155, width: 330, paddingTop: 30 }}>
                <Text style={styles.logintxt}>User Name ***</Text>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <TextInput
                        placeholder="Enter UserName"
                        keyboardType="email-address"
                        value={userName}
                        onChangeText={(userName) => setUserName(userName)}
                    />
                </View>
                <Divider />
                <Divider />
                <Divider />
            </View>

            <TouchableOpacity style={styles.googleBtn} onPress={(e) => handleChanged(e)}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontSize: 20, color: "#fff" }}   >Join</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default UserInput

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundimage: {
        width: '100%',
        height: '100%',
        opacity: 1
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: "contain",
        alignSelf: "center"
    },
    logospace: {
        paddingTop: 40

    },
    googleBtn: {
        textAlign: "center",
        height: 65,
        width: 330,
        borderRadius: 35,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#F28C28",
        borderWidth: 2.5,
        borderColor: "white"

    },
    logintxt: {
        color: "white",
        fontSize: 16,
        paddingLeft: 40

    },
    lineStyle: {
        borderWidth: 4,
        borderColor: 'black',
        margin: 10,
    }

})
