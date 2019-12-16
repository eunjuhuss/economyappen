import React from 'react';
import {
  Platform,
  View,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';
import { styles } from '../../styles/ImageBoxStyles';
import * as ImageHelpers from '../constants/ImageHelpers'
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { connectActionSheet } from '@expo/react-native-action-sheet';
import { uploadImage } from '../redux/store/actions/imageActions';
import Firebase from '../constants/Firebase';

class ImageBox extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      picture: ''
    }  
  }


  uploadImage = async (image, result) => {
    const { currentUser } = Firebase.auth(); 
    const { picture } = this.state;
    const ref = Firebase.storage().ref('images/').child(result.uri)
    const { userId } = this.props;

    try{
      const blob = await ImageHelpers.prepareBlob(image.uri)
      const snapshop = await ref.put(blob)

      let downloadUrl = await ref.getDownloadURL()
      await Firebase.database().ref(`/users/${currentUser.uid}/economyLists/${userId}/`).update({image: downloadUrl})
      blob.close();
      return downloadUrl
      }catch(error){
        console.log(error)
      }
  }

  openImageLibray = async () => {
    const result = await ImageHelpers.openImageLibrary()
    const source = { uri:result.uri }
    const {userId} = this.props;
    if(result)
    {
      const downloadUrl = await this.uploadImage(result, source)
  
        this.setState({
        picture: source
      })
    }
    console.log('(result)', this.state.picture)
  }

  openCamera = async () => {
    const result = await ImageHelpers.openCamera()
    const source = {uri:result.uri}
    const {userId} = this.props;
    if(result)
    {
      const downloadUrl = await this.uploadImage(result, source)
    
        this.setState({
        picture: source
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
    const { picture }= this.state;
    return (
      <TouchableOpacity
        // disabled={!editable}
        style={styles.addImage}
        onPress={()=> this.addImage()}  
      >
        
        <View style={styles.imageAddButton}>
          <Image
            style={styles.recieptImage}
            source={{uri: picture.uri}}/>
          
            <Text style={styles.imageButtonText}>
              +
            </Text>
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