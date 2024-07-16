
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';

export default function ElevatedCards() {
  const handlePress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View>
      <Text style={styles.headingText}>MOVIES</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <TouchableOpacity onPress={() => handlePress('https://en.wikipedia.org/wiki/Spider-Man_(2002_film)')}>
          <View style={[styles.card, styles.cardElevated]}>
            <Image source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.nFq7C7jViULVyUq0n5KekwHaLH&pid=Api&P=0&h=180' }} style={styles.image} resizeMode="cover" />
            <Text style={styles.cardTitle}>SpiderMan-1(2002)</Text>
            <Text style={styles.cardSubtitle}>Tap to know more</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('https://en.wikipedia.org/wiki/Spider-Man_2')}>
          <View style={[styles.card, styles.cardElevated]}>
            <Image source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.B6BERbch8EADOMekTF1LpwHaI3&pid=Api&P=0&h=180' }} style={styles.image} resizeMode="cover" />
            <Text style={styles.cardTitle}>SpiderMan-2 (2004)</Text>
            <Text style={styles.cardSubtitle}>Tap to know more</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('https://en.wikipedia.org/wiki/Spider-Man_3')}>
          <View style={[styles.card, styles.cardElevated]}>
            <Image source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.jJXQKqWnNth6g8fscC-6SgHaKx&pid=Api&P=0&h=180' }} style={styles.image} resizeMode="cover" />
            <Text style={styles.cardTitle}>SpiderMan-3 (2007)</Text>
            <Text style={styles.cardSubtitle}>Tap to know more</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          You can watch these movies on{' '}
          <TouchableOpacity onPress={() => handlePress('www.netflix.com › in')}>
            <Text style={styles.footerLink}>Netflif</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    color: '#000000',
    fontWeight: 'bold',
    paddingHorizontal: 8,
    textDecorationLine: 'underline'
  },
  container: {
    padding: 10
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 300,
    borderRadius: 2,
    margin: 8,
  },
  cardElevated: {
    elevation: 10,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowColor: '#000000',
    shadowOpacity: 100,
    shadowRadius: 2
  },
  image: {
    width: '100%',
    height: '70%',
    borderRadius: 2,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  cardSubtitle: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  footer: {
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
  },
  footerLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
