import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, Text, View, TopNavigation, ListItem, List } from '@ui-kitten/components';
import SliderEntry from './components/SliderEntry';
import { sliderWidth, itemWidth } from './styles/SliderEntry.style';
import styles, { colors } from './styles/index.style';
import { ENTRIES1, ENTRIES2 } from './static/entries';
import Carousel from 'react-native-snap-carousel';
import SlideShow from './components/SlideShow';
import ContentView from './components/StoryList';
import Article from './static/articles'
import ArticleList from './components/ArticleList';



export const HomeScreen = ({ navigation }) => {

  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  const data = new Array(8).fill({
  title: 'Item',
});
const renderItem = ({ item, index }) => (
    <ListItem title={`${item.title} ${index + 1}`}/>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='MyApp' alignment='center'/>
      <Divider/>
      <Layout style={{ flex: 1 }}>
        <SlideShow/>
        <ArticleList/>
      </Layout>
    </SafeAreaView>
  );
};