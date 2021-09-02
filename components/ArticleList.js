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

const HeartIcon = (style) => (
  <Icon {...style} name='heart'/>
);

const MessageCircleIcon = (style) => (
  <Icon {...style} name='message-circle-outline'/>
);
const data = [
    {
        title: 'Hapal lagu gara-gara nonton youtube',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        image: 'https://i2.lensdump.com/i/ZPmRsM.jpg'
    },
    {
        title: 'Menangis terus-terusan',
        subtitle: 'Lorem ipsum dolor sit amet',
        image: 'https://i3.lensdump.com/i/ZPmJ5x.jpg'
    },
    {
        title: 'Makan lahap pake kentang dan ayam',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        image: 'https://i1.lensdump.com/i/ZPm4Wm.jpg'
    },
    {
        title: 'Jalan jalan depan rumah',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        image: 'https://i.lensdump.com/i/ZPm9H1.jpg'
    },
    {
        title: 'Petik daun kering',
        subtitle: 'Lorem ipsum dolor sit amet',
        image: 'https://i2.lensdump.com/i/ZPmK9i.jpg'
    },
    {
      title: 'Seharian di rumah nenek',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      image: 'https://i3.lensdump.com/i/ZPmpvo.jpg'
  },
];

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
          data={data}
          renderItem={this.renderArticleItem}
        />
      )
    }
}