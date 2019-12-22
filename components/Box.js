import React from 'react';
import {View, StyleSheet} from 'react-native';

import Colors from '../constants/Colors';
import {normalize} from '../utils';

const Box = ({children, style}) => (
  <View style={[styles.box, style]}>{children}</View>
);

export default Box;

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 30,
    marginHorizontal: '10%',
    flexDirection: 'row',
    minHeight: normalize(60),
  },
});
