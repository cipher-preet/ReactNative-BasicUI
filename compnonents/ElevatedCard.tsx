import React, { Component } from 'react'
import { ScrollView, Text, View, StyleSheet } from 'react-native'

export default class ElevatedCard extends Component {
  render() {
    return (
      <View>
        <Text  style={styles.headingText}> Elevated Component </Text>
        <ScrollView horizontal={true} style={styles.container}
        showsHorizontalScrollIndicator={false}
        >
            <View style={[styles.cards, styles.elevatedCard]}>
                <Text>elevated</Text>
            </View>
            <View style={[styles.cards, styles.elevatedCard]}>
                <Text>elevated1</Text>
            </View>
            <View style={[styles.cards, styles.elevatedCard]}>
                <Text>elevated2</Text>
            </View>
            <View style={[styles.cards, styles.elevatedCard]}>
                <Text>elevated3</Text>
            </View>
            <View style={[styles.cards, styles.elevatedCard]}>
                <Text>elevated4</Text>
            </View>
            <View style={[styles.cards, styles.elevatedCard]}>
                <Text>elevated5</Text>
            </View>
        </ScrollView>
      </View>
    )
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
      padding:8
    },
    cards:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:4,
        width:100,
        height:100,
        margin:5,
    },
    elevatedCard: {
        backgroundColor:'#CAD5E2',
        elevation:4
    }
  });
  
