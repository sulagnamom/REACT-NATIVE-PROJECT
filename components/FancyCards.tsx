
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>DREAM PLACE</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image source={{
            uri:'https://tse1.mm.bing.net/th?id=OIP.qV3Wg2A9JrrhidZAM_vH0gHaEo&pid=Api&P=0&h=180'
        }} 
        style={styles.cardImage}
        />

        <View style={styles.cardBody}>

        <Text style={styles.cardTitle}>New York</Text>
        <Text style={styles.cardLabel}>Peter Parker/SpiderMan</Text>
        <Text style={styles.cardDescription}>Spider Powers are special abilities, beyond what normal humans possess, 
            that are usually somewhat related to Spiders. They are used by many characters in the Marvel universe. 
            
         </Text>
         



        </View>

        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        color:'#000000',
        paddingHorizontal:8,
        textDecorationLine:'underline'
    },
    card:{
        width:350,
        height:400,
        borderRadius:5,
        marginVertical:12,
        marginHorizontal:30
    },
    cardElevated:{
        backgroundColor:"#AA9C9C",
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardImage:{
        height:200,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
        padding:8
    },
    cardTitle:{
        color:"#000000",
        fontSize:20,
        fontWeight:'bold',
        textDecorationLine:'underline',
        marginBottom:4
        
    },
    cardLabel:{
        color:"#000000",
        fontWeight:'bold',
        textDecorationLine:'underline',
        marginBottom:4

    },
    cardDescription:{
        color:"#000000",
        marginBottom:12

    },
    cardFooter:{
        color:"#000000",
        fontWeight:'bold',
        marginTop:4
    }
})
