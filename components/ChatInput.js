import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react';



const ChatInput = (props) => {

    const { Setchat , Sethotmessages,conn } = props
    const [message, Setmessages] = useState("");
   
   

    const handleChanged = async (e) => {
        e.preventDefault();
        try {
            const cha = conn.channelName
            const payload = {
                message: message
            }

            const datas = await fetch(`http://10.0.4.79:4000/message?channel=${cha}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            const resp = await datas.json();
            console.log("dataeeeeeeeeeee", resp);
            Setchat(resp?.data)
            Sethotmessages(resp.message)

        } catch (err) {
            console.log(err);
        }

    }

    
    return (
        <View style={{ display: "flex", flexDirection: "row" }}>
            <View style={{ width: 250, left: 10 }}>
                <TextInput
                    placeholder="Type Messages"
                    keyboardType="email-address"
                    value={message}
                    onChangeText={(message) => Setmessages(message)}
                />
            </View>
            <View style={{ alignSelf: "flex-end", alignItems: "center" }}>
                <TouchableOpacity style={styles.googleBtn} onPress={(e) => handleChanged(e)}>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: 20, color: "#fff" }}   >Send</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default ChatInput

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

        height: 65,
        width: 140,
        borderRadius: 35,
        alignItems: "center",
        justifyContent: "center",
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
