import { StyleSheet, Text, View, Button,Image } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-elements';
const ChatHeader = ({  navigation }) => {
  return (
    <>
    
      <View style={{ width: 79, height: 80, marginTop: 30 }}>
        <Button title="SignOut" onPress={() => navigation.navigate("UserInput")} />
      </View>
      
      <Image source={{ uri: `https://robohash.org/f409d95c607d449691862a91edfc0d24?set=set3&bgset=&size=200x200`}} style={styles.image} />
      
    </>
  )
}

export default ChatHeader

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
    borderWidth: 10,
    borderRadius: 200,
    borderColor: "#F28C28",

  },
})