import React from 'react'
import {
  View,
  StyleSheet,
  Image
} from 'react-native'

const BigPicture = ({
  width,
  height,
  uri
})=> {

  const fileName = `image!${uri}`

  return (
    <View style={{width, height, backgroundColor: 'black'}}>
      <Image style={{height: '100%', width :'100%'}} source={{uri: 'assets-library://asset/asset.JPG?id=C20285D2-3C1C-483D-BC09-C0D2719FFEE0&ext=JPG'}}/>
    </View>
  )
}

export default BigPicture

