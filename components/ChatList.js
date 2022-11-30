import { StyleSheet, Text, View , ScrollView } from 'react-native'
import React,{useState , useEffect} from 'react'

const ChatList = (props) => {
  const { chat , hotmessages , name } = props
  const [allchat,Setallchat] = useState([]);
  const [userChat,SetuserChat] = useState([]);
  

  const DataBYchat = () => {
    
    const conversation = [];
    conversation.push(chat)
    // allchat.map((data) => console.log("77777777",data))
  //   Setallchat(chat)
  //  console.log("allchat",allchat)
  

  //  allchats.map(data => {
  //   console.log("hhhhhhhhh",data)
  //     return conversation.push(data)
  //   })
    console.log("conversation",conversation)
    SetuserChat( conversation);
  }

  useEffect(() => {
    DataBYchat()
  },[chat])
  return (
    <View style={{paddingTop:20}}>
    {
      userChat.map((data) => {
        return(
          <>
            <Text style={{fontSize:27}}>{data}</Text>
            <Text>{hotmessages+" "+name}</Text>
          </>
        )
      })
    }
        
     
    </View>
  )
}

export default ChatList

const styles = StyleSheet.create({})