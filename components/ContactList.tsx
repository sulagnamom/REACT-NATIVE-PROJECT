import { Image, ScrollView, StyleSheet, Text, View,Linking, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts=[{
        uid:1,
        name:'SULAGNA MANDAL',
        status:'JAVA||React Native App Developer',
        imageUrl:'https://tse2.mm.bing.net/th?id=OIP.voVmH_P-WhYnjVZYb-WUhwAAAA&pid=Api&P=0&h=180',
        linkedin:'https://www.linkedin.com/in/sulagna-mandal-56a447273/'}
        
    ];
    const handlePress = (url: string) => {
        Linking.openURL(url);};
        
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView  scrollEnabled={false}>
        {contacts.map(({uid,name,status,imageUrl,linkedin})=>(
            <View key={uid} style={styles.card}>
                <Image 
                source={{
                    uri:imageUrl
                }}  
                style={styles.image}   
                />
                <View>
                    <TouchableOpacity onPress={() => handlePress(linkedin)}>
                    <Text style={styles.name}>{name}</Text>
                    </TouchableOpacity>
                <Text style={styles.status}>{status}</Text>
                </View>
                
            </View>
            
        ))}       
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        color: '#000000',
        fontWeight: 'bold',
        paddingHorizontal: 8,
        textDecorationLine: 'underline'
      
      
      },
      card: {
        flex:1,
        flexDirection:'row',
        height:80,
        marginVertical:20
        
      },
      image: {
        width: 70,
        height: 70,
        marginLeft:8,
        borderRadius:40/2
      },
      name: {
        marginLeft:10,
        color:'#000000',
        fontSize:16,
        fontWeight:'bold',
        marginTop:8
            
      },
      status: {
        marginLeft:10,
        color:'#000000',
        fontSize:16,
        fontWeight:'bold'
                
      },
    })