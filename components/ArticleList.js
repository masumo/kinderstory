import React, { Component } from 'react';
import {  Button, Icon, Text, Layout, ListItem, List, Avatar  } from '@ui-kitten/components';
import {
  ImageBackground,
  ListRenderItemInfo,
  StyleSheet,
  TouchableOpacity,
  View, ImageStyle 
} from 'react-native';

import styles from '../styles/stories.style';
import {MUSA} from '../static/entries';
import SlideShow from './SlideShow';

const HeartIcon = (style) => (
  <Icon {...style} name='heart'/>
);

const MessageCircleIcon = (style) => (
  <Icon {...style} name='message-circle-outline'/>
);


export default class ArticleList  extends Component {
   
    //renderItem = ({ item, index }) => (
     // <ListItem title={`${item.title} ${index + 1}`}/>
   // );

    isItemReverse = (index) => {
    return index % 2 === 1;
    };

    onItemPress = (index) => {
      //navigation && navigation.navigate('Article3');
    };
    renderArticleItem = ({item, index}) => (
      <TouchableOpacity
        style={[styles.item, this.isItemReverse(index) && styles.itemReverse]}
        activeOpacity={0.95}
        onPress={() => this.onItemPress(index + 1)}>
        <ImageBackground
          style={styles.itemSection}
          source={{uri:item.image}}
        />
        <View style={styles.itemSection}>
          <Text
            style={styles.itemTitle}
            category='h6'>
            {item.title}
          </Text>
          <View style={styles.activityContainer}>
            <Avatar 
             source={require('../assets/image-profile.jpg')}/>
            <View style={styles.authoringInfoContainer}>
              <Text>
                {"cerita ayah"}
              </Text>
              <Text
                appearance='hint'
                category='p2'>
                {"20 Sept 2021"}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );

    // LIST ARTIKEL MASIH KEPOTONG, BELUM BISA TAMPIL SEMUA
    // BEBERAPA ARTIKEL, GAMBARNYA TIDAK TAMPIL

    render () {
      
      return (
        <List
          style={styles.container}
          data={MUSA}
          renderItem={this.renderArticleItem}
          ListHeaderComponent={SlideShow}
        />
      )
    }
}