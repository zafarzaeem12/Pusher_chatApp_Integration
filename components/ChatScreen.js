import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState} from 'react'
import ChatList from './ChatList';
import ChatInput from './ChatInput';
import ChatHeader from './ChatHeader';




const ChatScreen = (props) => {
    const { route } = props;
    const {  name } = route.params;
    const [chat , Setchat] = useState([]);
    const [hotmessages,Sethotmessages] = useState("");
    return (
        <View>
            <View style={{  height: 100 }}>
                <ChatHeader  />
            </View>
            <View style={{ backgroundColor: "green", height: 600 }}>
                <ChatList 
                     chat={chat}  
                     hotmessages={hotmessages} 
                     name={name}
                />
            </View>
            <View style={{ backgroundColor: "#fff", height: 68 }}>
                <ChatInput 
                    Setchat={Setchat} 
                    Sethotmessages={Sethotmessages}  
                    />
            </View>
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({})