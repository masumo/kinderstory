import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, Text, View, TopNavigation, ListItem, List } from '@ui-kitten/components';
import SlideShow from './components/SlideShow';
import ArticleList from './components/ArticleList';
const React = require('react');


export const HomeScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Divider/>
      <Layout style={{ flex: 1 }}>
        <ArticleList/>
      </Layout>
    </SafeAreaView>
  );
};