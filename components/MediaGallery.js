import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {GALLERYDATA} from '../static/entries';
import ImageLayout from "react-native-image-layout";

export default class MediaGallery  extends Component {
   
    onItemPress = (index) => {
      //navigation && navigation.navigate('Article3');
    };
    
    render () {
      
      return (
        
          <ImageLayout
          images={GALLERYDATA}
          />

      )
    }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 50,
    paddingHorizontal: 50,
  },
});