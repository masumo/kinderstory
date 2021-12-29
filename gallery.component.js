import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, Divider, Layout, Icon, OverflowMenu, MenuItem, TopNavigationAction, Text, View, TopNavigation, ListItem, List } from '@ui-kitten/components';
import MediaGallery from './components/MediaGallery';
const React = require('react');
//import * as ImagePicker from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';

const photos = ["https://picsum.photos/400", "https://picsum.photos/400", "https://picsum.photos/400", "https://picsum.photos/400", "https://picsum.photos/400", "https://picsum.photos/400", "https://picsum.photos/400"];

const PlusIcon = (props) => (
  <Icon {...props} name='plus'/>
);

const CameraIcon = (props) => (
  <Icon {...props} name='camera'/>
);

const ImageIcon = (props) => (
  <Icon {...props} name='image'/>
);

export const GalleryScreen = ({ navigation }) => {

  // This function is triggered when the "Select an image" button pressed
  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library 
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      //setPickedImagePath(result.uri);
      console.log(result.uri);

      let base64Img = `data:image/jpg;base64,${result}`;
      let apiUrl =
        'https://api.cloudinary.com/v1_1/masumo/image/upload';
      let data = {
        file: base64Img,
        upload_preset: 'masumocloud'
      };
      fetch(apiUrl, {
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST'
      })
        .then(async response => {
          let data = await response.json();
          if (data.secure_url) {
            alert('Upload successful');
            console.log('OKKKKK');
          }
        })
        .catch(err => {
          alert('Cannot upload');
        });

      /*const uri = result.uri;
        const type = result.type;
        const name = 'musa';
        const source = {
          uri,
          type,
          name,
        }
      cloudinaryUpload(source)
      */
    }
  }

  // This function is triggered when the "Open camera" button pressed
  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      //setPickedImagePath(result.uri);
      console.log(result.uri);
      const source = data.base64;
      let base64Img = `data:image/jpg;base64,${source}`;
      let apiUrl =
        'https://api.cloudinary.com/v1_1/masumo/image/upload';
      let data = {
        file: base64Img,
        upload_preset: 'masumocloud'
      };

      fetch(apiUrl, {
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST'
      })
        .then(async response => {
          let data = await response.json();
          if (data.secure_url) {
            alert('Upload successful');
            console.log('OKEEE');
          }
        })
        .catch(err => {
          alert('Cannot upload');
        });
    }
  }

  const cloudinaryUpload = (photo) => {
    const data = new FormData()
    data.append('file', photo)
    data.append('upload_preset', 'masumocloud')
    data.append("cloud_name", "masumocloud")
    fetch("https://api.cloudinary.com/v1_1/masumo/image/upload", {
      method: "post",
      body: data
    }).then(res => res.json()).
      then(data => {
        setPhoto(data.secure_url)
      }).catch(err => {
        alert("An Error Occured While Uploading")
      })
  }

  const renderPlusButton = () => (
    <Button
          style={{
            borderRadius: 24,
            marginHorizontal: 8, width: 24,
            height: 24,
          }}
          accessoryLeft={PlusIcon}
          onPress={() => setVisible(true)}
      />
  );

  const [visible, setVisible] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const onSelect = (index) => {
    setSelectedIndex(index);
    setVisible(false);
    console.log('index terpilih adalah... '+selectedIndex+'  index adalah '+index);
    (index==1)? openCamera() : showImagePicker();
  };
  
  const renderRightActions = () => (
    <React.Fragment>
      <OverflowMenu
        anchor={renderPlusButton}
        backdropStyle={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
        visible={visible}
        placement={'left start'}
        selectedIndex={selectedIndex}
        onSelect={onSelect}
        onBackdropPress={() => setVisible(false)}>
        <MenuItem title='Camera' accessoryLeft={CameraIcon} />
        <MenuItem title='Galery' accessoryLeft={ImageIcon}/>
      </OverflowMenu>
    </React.Fragment>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1 }}>
      <TopNavigation
        alignment='center'
        title='All button, filter placed here'
        accessoryRight={renderRightActions}
      />
          <MediaGallery/>
      </Layout>
    </SafeAreaView>
  );
};