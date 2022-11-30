import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'

const ChatList = (props) => {
  const { chat, hotmessages, name } = props
  const noname = "typing ... "
  const [allchat, Setallchat] = useState([]);
  const [userChat, SetuserChat] = useState([]);


  const DataBYchat = () => {
    Setallchat(allchat)
    allchat.push(chat)
    const conversation = [];
    allchat.map((data) => {
      if (data === []) {
        return null
      } else {
        return conversation.push(data)
      }
    })
    SetuserChat([...conversation]);
  }

  useEffect(() => {
    DataBYchat()
  }, [chat])
  return (
    <View style={{ paddingTop: 20 }}>
      {
        userChat.map((data) => {
          return (
            <>
              <Text style={{ fontSize: 27 }}>{data}</Text>
              <Text>{ hotmessages + " " + name}</Text>
              
            </>
          )
        })
      }


    </View>
  )
}

export default ChatList

const styles = StyleSheet.create({})