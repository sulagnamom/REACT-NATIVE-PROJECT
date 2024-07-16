import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCards() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }

    return (
        <View>
            <Text style={styles.headingText}>THEORIES</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingcontainer}>
                    <Text style={styles.headertext}>
                        What do we have here ?????
                    </Text>
                </View>
                <Image
                    source={{
                        uri: 'https://tse2.mm.bing.net/th?id=OIP.hJPZ_YTu94rKsBK7YsMFygAAAA&pid=Api&P=0&h=180',
                    }}
                    style={styles.cardimage}
                />
                <View style={styles.bodycontainer}>
                    <Text numberOfLines={2}>
                    Do Spider-Man and venom have a relationship?.
                    Will venom be in a Spider-Man movie?
                    </Text>
                </View>
                <View style={styles.cardfooter}>
                    <TouchableOpacity onPress={() => openWebsite('https://fictionhorizon.com/venom-movies-in-order-how-many-are-there/')}>
                        <Text style={styles.socialLinks}>READ ME</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openWebsite('https://www.looper.com/616313/the-history-of-venoms-relationship-with-spider-man-explained/')}>
                        <Text style={styles.socialLinks}>FOLLOW ME</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        color:'#000000',
        paddingHorizontal: 8,
        textDecorationLine:'underline'
    },
    card: {
        width:350,
        height:400,
        borderRadius:5,
        marginHorizontal:30,
        marginVertical:12
        
    },
    elevatedCard: {
        backgroundColor:'#D0A4E5',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#333',
        shadowOpacity:0.4

    },
    headingcontainer: {
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headertext: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#000'
    },
    cardimage: {
        height: 200,
        marginTop: 10,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    bodycontainer: {
        padding: 10,
        marginTop: 10,
    },
    cardfooter: {
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    socialLinks:{
        fontSize:15,
        color:'#000000',
        backgroundColor:'#FFF',
        padding:20,
        borderRadius:4
    }
})

