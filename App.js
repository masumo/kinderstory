import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text, Button } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './navigation.component';
import { default as theme } from './theme.json'; // <-- Import app theme

export default () => (
  <>
  <IconRegistry icons={EvaIconsPack}/>
  <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <AppNavigator/>
  </ApplicationProvider>
  </>
);