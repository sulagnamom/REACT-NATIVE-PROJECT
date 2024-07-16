import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View>
      <Text style={styles.headingText}>MAIN LEADS</Text>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <View style={[styles.card]}>
            <Image
              source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.qkWCSPjMFqOUiVk4763uRwHaEo&pid=Api&P=0&h=180' }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.text}>Peter Parker/SpiderMan</Text>
          </View>
          <View style={[styles.card]}>
            <Image
              source={{ uri: 'https://s-media-cache-ak0.pinimg.com/originals/58/bd/89/58bd89fe7c60dcae7d4976b774e7c6f4.jpg' }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.text}>Marry Jane</Text>
          </View>
          <View style={[styles.card]}>
            <Image
              source={{ uri: 'https://www.comingsoon.net/wp-content/uploads/sites/3/2023/03/willem-dafoe-goblin-header.png' }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.text}>Norman Osborne</Text>
          </View>
          <View style={[styles.card]}>
            <Image
              source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.QbCNpMbX49LD4mUEYDsdIAHaEK&pid=Api&P=0&h=180' }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.text}>Doctor OCK</Text>
          </View>
          <View style={[styles.card]}>
            <Image
              source={{ uri: 'https://images.immediate.co.uk/production/volatile/sites/3/2020/12/Thomas_Haden_Church_spider_man_3-1f08225.jpg?quality=90&resize=620%2C413' }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.text}>SandMan</Text>
          </View>
          <View style={[styles.card]}>
            <Image
              source={{ uri: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/09/venom-spider-man-3-topher-grace-2477583.jpg?itok=idfhz_j2' }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.text}>Venom</Text>
          </View>
          <View style={[styles.card]}>
            <Image
              source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.NWNd0vZo7Yir_zBWJiOxoAHaLF&pid=Api&rs=1&c=1&qlt=95&w=79&h=118' }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.text}>Hary Osborne</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    paddingHorizontal: 8,
    textDecorationLine: 'underline',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 160,
    borderRadius: 2,
    margin: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  text: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    paddingVertical: 4,
    position: 'absolute',
    bottom: 0,
  },
});

export default App;