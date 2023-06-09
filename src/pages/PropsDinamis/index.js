import { Image, PanResponder, ScrollView, ScrollViewBase, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Story = (props) => {
  return (
    <View style={styles.storyProps}>
      <Image
        source={props.imageStory} style={{ width: 70, height: 70, borderRadius: 50, marginBottom: 5 }} />
      <Text style={{maxWidth: 70}}>{props.judul}</Text>
    </View>
  )
}

const PropsDinamis = () => {
  return (
    <View style={styles.Container}>
      <Text>Materi Component Props Dinamis</Text>
      <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      >
      <View style={styles.story}>
        <Story judul='Gunung' imageStory={require('./gunung.jpg')} />
        <Story judul='Pantai' imageStory={require('./pantai.jpg')} />
        <Story judul='Gunung' imageStory={require('./gunung.jpg')} />
        <Story judul='Pantai' imageStory={require('./pantai.jpg')} />
        <Story judul='Gunung' imageStory={require('./gunung.jpg')} />
        <Story judul='Pantai' imageStory={require('./pantai.jpg')} />
      </View>
      </ScrollView>
    </View>
  )
}

export default PropsDinamis

const styles = StyleSheet.create({
  Container: {
    padding: 20,
  },
  story: {
    flexDirection: 'row',
  },
    storyProps: {
    alignItems: 'center',
    marginRight: 10,
  }
})