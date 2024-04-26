import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class FancyCard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}> Trending Places </Text>
        <View style={[styles.cards, styles.elevatedcards]}>
          <Image
            source={{
              uri: 'https://www.fabhotels.com/blog/wp-content/uploads/2018/09/Red-Fort.jpg',
            }}
            style={styles.Cardimage}></Image>
          <View style={styles.cardBody}>
            <Text style={styles.title}>New Delhi, NCR</Text>
            <Text style={styles.lable}>
              List of Best Places to Visit in North India in 2024
            </Text>
            <Text style={styles.discription}>
              Red Fort, Purana Qila, Qutub Minar, Humayun’s Tomb, Lodhi Gardens,
              India Gate, Rashtrapati Bhavan, Akshardham Temple, Jama Masjid,
              Jantar Mantar, Lotus Temple, Agrasen ki Baoli, National Rail
              Museum, National Gallery of Modern Art, Chandhi Chowk, and
              Connaught Place. Learn more about Delhi tourism
            </Text>
            <Text style={styles.eta}>12, min away</Text>
          </View>
        </View>
        <View style={[styles.cards, styles.elevatedcards]}>
          <Image
            source={{
              uri: 'https://i0.wp.com/www.zingbus.com/blog/wp-content/uploads/2023/03/rowan-heuvel-sAB4BWrQ4Y4-unsplas.jpg?resize=1024%2C597&ssl=1',
            }}
            style={styles.Cardimage}></Image>
          <View style={styles.cardBody}>
            <Text style={styles.title}>New Delhi, NCR</Text>
            <Text style={styles.lable}>
              List of Best Places to Visit in North India in 2024
            </Text>
            <Text style={styles.discription}>
              Red Fort, Purana Qila, Qutub Minar, Humayun’s Tomb, Lodhi Gardens,
              India Gate, Rashtrapati Bhavan, Akshardham Temple, Jama Masjid,
              Jantar Mantar, Lotus Temple, Agrasen ki Baoli, National Rail
              Museum, National Gallery of Modern Art, Chandhi Chowk, and
              Connaught Place. Learn more about Delhi tourism
            </Text>
            <Text style={styles.eta}>12, min away</Text>
          </View>
        </View>
        <View style={[styles.cards, styles.elevatedcards]}>
          <Image
            source={{
              uri: 'https://www.touropia.com/gfx/b/2011/09/hawa_mahal.jpg',
            }}
            style={styles.Cardimage}></Image>
          <View style={styles.cardBody}>
            <Text style={styles.title}>New Delhi, NCR</Text>
            <Text style={styles.lable}>
              List of Best Places to Visit in North India in 2024
            </Text>
            <Text style={styles.discription}>
              Red Fort, Purana Qila, Qutub Minar, Humayun’s Tomb, Lodhi Gardens,
              India Gate, Rashtrapati Bhavan, Akshardham Temple, Jama Masjid,
              Jantar Mantar, Lotus Temple, Agrasen ki Baoli, National Rail
              Museum, National Gallery of Modern Art, Chandhi Chowk, and
              Connaught Place. Learn more about Delhi tourism
            </Text>
            <Text style={styles.eta}>12, min away</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  cards: {
    width: 390,
    borderRadius:5,
    marginHorizontal:10,
    marginBottom:10,
    alignItems:'center',
  },
  elevatedcards: {
    backgroundColor:'#FFFFFF',
    elevation:3,
    shadowOffset:{
        width:1,
        height:1,
    }
  },
  Cardimage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginBottom:10,
  },
  cardBody: {
    flex: 1,
    flexGrow:1,
    paddingHorizontal: 15,
  },
  title: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  lable: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  discription: {
    fontSize: 15,
  },
  eta:{
    color: '#CF352E',
    fontSize: 15,
    fontWeight: 'bold',
    paddingVertical: 4,
    marginBottom: 5,
  }
});
