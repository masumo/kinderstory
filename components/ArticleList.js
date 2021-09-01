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

const HeartIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='heart'/>
);

const MessageCircleIcon = (style: ImageStyle): IconElement => (
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
        image: 'https://i.lensdump.com/i/ZPm9H1.jpg'
    },
    {
        title: 'Beli sepeda bareng Ayah',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i3.lensdump.com/i/ZPmJ5x.jpg'
    }
];

export default class ArticleList  extends Component {
   
    //renderItem = ({ item, index }) => (
     // <ListItem title={`${item.title} ${index + 1}`}/>
   // );

    isItemReverse = (index: number): boolean => {
    return index % 2 === 1;
    };

    onItemPress = (index: number): void => {
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