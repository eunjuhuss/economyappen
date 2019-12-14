import Firebase from './../../../constants/Firebase';
import * as ImageHelpers from './../../../constants/ImageHelpers'


export function uploadImage(image) {
  return (dispatch)=>{
    const ref = Firebase.storage().ref();
    const blob= ImageHelpers.prepareBlob(image.uri)
    const snapshop = ref.put(blob)
    const downloadUrl = ref.getDownloadURL()
    Firebase.database().ref(`/users/${currentUser.uid}/economyLists`).update({image: downloadUrl})
    .then(()=>{
      dispatch({ type: 'UPLOAD_IMAGE'});
    })
    blob.close()
    return dowunloadUrl
  }    
 }