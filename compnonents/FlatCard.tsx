import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class FlatCard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}> flat cards </Text>
        <View style={styles.container}>
          <View style={[styles.cards, styles.cardOne]}>
            <Text>card Red</Text>
          </View>
          <View style={[styles.cards, styles.cardTwo]}>
            <Text>card Blue</Text>
          </View>
          <View style={[styles.cards, styles.cardThree]}>
            <Text>card Green</Text>
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
  container: {
    flex:1,
    flexDirection: 'row',
    padding:8
  },
  cards: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 4,
    margin:8
  },
  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardTwo: {
    backgroundColor: '#5DA3FA',
  },
  cardThree: {
    backgroundColor: '#50DBB4',
  },
});
