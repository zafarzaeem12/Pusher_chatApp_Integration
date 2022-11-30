import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState} from 'react'
import ChatList from './ChatList';
import ChatInput from './ChatInput';
import ChatHeader from './ChatHeader';




const ChatScreen = (props) => {
    const { route } = props;
    const {  name } = route.params;
    const [chat , Setchat] = useState([]);
    const [conn,Setconn] = useState("")

    const [hotmessages,Sethotmessages] = useState("");
    useEffect(() => {
        const PusherConnection = async ( ) => {
            try{
                const pusher = Pusher.getInstance();
                await pusher.init({
                    apiKey: "ec15901129ab9156bc9d",
                    cluster: "ap2",
                    onEvent
                });
    
                await pusher.connect();
                const y = await pusher.subscribe({
                    channelName: "my-channel"
                });
                return Setconn(y);
            }catch(err){
                console.log("Conection not connected")
            }
        }


        PusherConnection()
    },[])
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
                    conn={conn}
                    />
            </View>
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({})