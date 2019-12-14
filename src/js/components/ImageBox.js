import React from 'react';
import {
  Platform,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { styles } from '../../styles/ImageBoxStyles';
import * as ImageHelpers from '../constants/ImageHelpers'
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { connectActionSheet } from '@expo/react-native-action-sheet';
import Firebase from '../constants/Firebase';
import { uploadImage } from '../redux/store/actions/imageActions';





class ImageBox extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      image: null
    }  
  }

  uploadImage = async (image) => {
  const { currentUser } = Firebase.auth(); 
  const ref = Firebase.storage().ref('images/')

  try{
    const blob= await ImageHelpers.prepareBlob(image.uri)
    const snapshop = await ref.put(blob)

    let downloadUrl = await ref.getDownloadURL()
    await Firebase.database().ref(`/users/${currentUser.uid}/economyLists`).update({image:downloadUrl})
    blob.close();
    return dowunloadUrl
  }catch(error){
    console.log(error)
  }
}

  openImageLibray = async () => {
    const result = await ImageHelpers.openImageLibrary()
    console.log('result', result.uri)
    if(result)
    {
      const downloadUrl = await this.uploadImage(result)
      this.setState({
        image: result.uri
      })
    }
    console.log('result', this.state)
  }

  openCamera = async () => {
    const result = await ImageHelpers.openCamera()
    if(result)
    {
      alert('Image Clicked successfully');
      this.setState({
        image: result.uri
      })   
      
    }

  }


  addImage = () => {
    const options = ['Select from Phots', 'Camera', 'Cancel'];
    const cancelButtonIndex = 2;

    this.props.showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex
      },
      buttonIndex => {
        if(buttonIndex == 0){
          this.openImageLibray()
        } else if(buttonIndex == 1){
          this.openCamera()
        }

      }
    )
  }

  render(){

    return (
      <TouchableOpacity
        // disabled={!editable}
        style={styles.addImage}
        onPress={()=> this.addImage()}  
      >
        <View style={styles.imageInput}>
          <Image
          source={{uri: this.state.image}}/>
        </View>
      </TouchableOpacity>
    )
  }            
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     uploadImage: (image) => dispatch(uploadImage(image))
//   }
// }

const wrapper = compose(
  // connect(
  //   null, 
  //   mapDispatchToProps
  // ), 
  connectActionSheet
)

export default wrapper(ImageBox)
// export default ImageBox;