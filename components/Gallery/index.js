import React from 'react'
import {
  View,
  StyleSheet,
  CameraRoll
} from 'react-native'

import { Permissions } from 'expo'

import BigPicture from './BigPicture'
import Thumbnails from './Thumbnails'

export default class Gallery extends React.Component {
  constructor(){
    super()
    this.state = {
      status: false,
      rollStatus: false,
      bigPictureUri: null,
      thumbnailsArray: []
    }
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    const { rollStatus } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const getBigPicture = await CameraRoll.getPhotos({first: 1});
    const getPhotos = await CameraRoll.getPhotos({first: 20});

    console.log(getPhotos)

    this.setState({ 
      hasCameraPermission: status === 'granted', 
      hasCameraRollPermission: rollStatus === 'granted',
      bigPictureUri: getBigPicture.edges[0].node.image.uri,
      thumbnailsArray: getPhotos.edges.map(e=> e.node.image.uri).slice(1)
    });
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.fakeHeader}/>
        <BigPicture width='100%' height={300} uri={this.state.bigPictureUri}/>
        <Thumbnails thumbnails={this.state.thumbnailsArray}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  fakeHeader: {
    backgroundColor: '#ededed',
    height: 50,
    width: '100%'
  }
})