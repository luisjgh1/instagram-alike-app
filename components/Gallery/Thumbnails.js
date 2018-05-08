import React from 'react'
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'

const Thumbnails = ({thumbnails})=>
  <ScrollView style={{position: 'absolute', marginTop: 355}} scrollEnabled={true} contentContainerStyle={styles.flex}>
    {thumbnails.map(thumbnail=> 
      <TouchableOpacity style={styles.thumbnailWrapper}>
        <Image style={styles.thumbnails} source={{uri: thumbnail}} />
      </TouchableOpacity>
    )}
  </ScrollView>

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  thumbnails: {
    width: '100%',
    height: 100
  },
  thumbnailWrapper: {
    width: '33%'
  }
})

export default Thumbnails