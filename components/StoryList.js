import React from 'react';
import {
  ImageBackground,
  ListRenderItemInfo,
  StyleSheet,
  TouchableOpacity,
  View, ImageStyle 
} from 'react-native';
import { Button, List, Text, Icon, IconElement, ListItem  } from '@ui-kitten/components';
import { Article } from '../static/articles';

const HeartIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='heart'/>
);

const MessageCircleIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='message-circle-outline'/>
);

const data: Article[] = [
  Article.whyWorkoutImportant(),
  Article.morningWorkouts(),
  Article.howToEatHealthy(),
  Article.whyWorkoutImportant(),
];
const [headingArticle, ...listArticles] = data;

const dataArt = [
    {
        title: 'Usia: delapan bulan',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        image: 'https://i2.lensdump.com/i/ZPmRsM.jpg'
    },
    {
        title: 'Usia: 18 bulan',
        subtitle: 'Lorem ipsum dolor sit amet',
        image: 'https://i3.lensdump.com/i/ZPmJ5x.jpg'
    },
    {
        title: 'Usia: enam bulan',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        image: 'https://i.lensdump.com/i/ZPm9H1.jpg'
    },
    {
        title: 'Usia: 15 bulan',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i1.lensdump.com/i/ZPm4Wm.jpg'
    },
    {
        title: 'Usia: 10 bulan',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i2.lensdump.com/i/ZPmK9i.jpg'
    },
    {
        title: 'Usia: 1 tahun',
        subtitle: 'Lorem ipsum dolor sit amet',
        image: 'https://i3.lensdump.com/i/ZPmpvo.jpg'
    }
];


export default ({ navigation }): React.ReactElement => {

  const isItemReverse = (index: number): boolean => {
    return index % 2 === 1;
  };

  const onItemPress = (index: number): void => {
    //navigation && navigation.navigate('Article3');
  };

  const renderArticleItem = ({item, index}) => (
    <TouchableOpacity
      style={[styles.item, isItemReverse(index) && styles.itemReverse]}
      activeOpacity={0.95}
      onPress={() => onItemPress(index + 1)}>
      <ImageBackground
        style={styles.itemSection}
        source={item.image}
      />
      <View style={styles.itemSection}>
        <Text
          style={styles.itemTitle}
          category='h5'>
          {item.title}
        </Text>
        <View style={styles.itemReactionsContainer}>
          <Button
            style={styles.iconButton}
            appearance='ghost'
            status='basic'
            accessoryLeft={MessageCircleIcon}>
          </Button>
          <Button
            style={styles.iconButton}
            appearance='ghost'
            status='danger'
            accessoryLeft={HeartIcon}>
          </Button>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item, index }) => (
    <ListItem title={`${item.title} ${index + 1}`}/>
  );

  return (
    <List
      style={styles.list}
      data={dataArt}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    minHeight: 188,
  },
  itemReverse: {
    flexDirection: 'row-reverse',
  },
  itemSection: {
    flex: 1,
    padding: 16,
  },
  itemReactionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
    marginHorizontal: -8,
  },
  itemTitle: {
    flex: 1,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
});
