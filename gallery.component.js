import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, Divider, Layout, Icon, OverflowMenu, TopNavigationAction, Text, View, TopNavigation, ListItem, List } from '@ui-kitten/components';
import MediaGallery from './components/MediaGallery';
const React = require('react');
//import * as ImagePicker from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';

const photos = ["https://picsum.photos/400", "https://picsum.photos/400", "https://picsum.photos/400", "https://picsum.photos/400", "https://picsum.photos/400", "https://picsum.photos/400", "https://picsum.photos/400"];

const PlusIcon = (props) => (
  <Icon {...props} name='plus'/>
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
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  }

  const renderRightActions = () => (
    <React.Fragment>
      <Button
          style={{
            borderRadius: 24,
            marginHorizontal: 8, width: 24,
            height: 24,
          }}
          accessoryLeft={PlusIcon}
          onPress={showImagePicker}
      />
      <TopNavigationAction icon={PlusIcon}/>
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