import React, { Component } from 'react';
import SliderEntry from './SliderEntry';
import {  Text, Layout } from '@ui-kitten/components';
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';
import styles, { colors } from '../styles/index.style';
import Carousel from 'react-native-snap-carousel';
import { ENTRIES1, ENTRIES2 } from '../static/entries';

export default class SlideShow extends Component {
_renderItem ({item, index}) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  }

  _renderLightItem ({item, index}) {
    return <SliderEntry data={item} even={false} />;
}

layoutExample (title, subtitle, type) {
    const isTinder = type === 'tinder';
    return (
        <Layout style={[styles.exampleContainer, isTinder ? styles.exampleContainerDark : styles.exampleContainerLight]}>
            <Text style={[styles.title, isTinder ? {} : styles.titleDark]}>{title}</Text>
            <Text style={[styles.subtitle, isTinder ? {} : styles.titleDark]}>{subtitle}</Text>
            <Carousel
              data={isTinder ? ENTRIES2 : ENTRIES1}
              renderItem={isTinder ? this._renderLightItem : this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              containerCustomStyle={styles.slider}
              contentContainerCustomStyle={styles.sliderContentContainer}
              layout={type}
              loop={true}
            />
        </Layout>
    );
  }

  render () {
    const example3 = this.layoutExample('Musa Fawzan Karim', 'Ceritafoto', 'stack');
    return (
      <>
        { example3 }
      </>
    )
  }

}