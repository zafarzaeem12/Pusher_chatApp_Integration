import { StyleSheet, Text, View , ScrollView } from 'react-native'
import React,{useState , useEffect} from 'react'

const ChatList = (props) => {
  const { chat , hotmessages , name } = props
  const [allchats,Setallchats] = useState([chat]);
  const [userChat,SetuserChat] = useState([]);
  

  const DataBYchat = () => {
    
    const conversation = [];
    Setallchats([chat])
   allchats.map((data) => {
      return conversation.push(data)
    })
    console.log("conversation",conversation)
    SetuserChat( conversation);
  }

  useEffect(() => {
    DataBYchat()
  },[chat])
  return (
    <View>
    {
      userChat.map((data) => {
        return(
          <>
            <Text style={{fontSize:27}}>{data}</Text>
            <Text>{hotmessages+"" +name}</Text>
          </>
        )
      })
    }
        
     
    </View>
  )
}

export default ChatList

const styles = StyleSheet.create({})