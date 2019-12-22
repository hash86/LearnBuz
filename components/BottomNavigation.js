import React from 'react';
import {View, StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton';

const BottomNavigation = () => (
  <View style={styles.bottomTabButtons}>
    <CustomButton icon="md-cog" />
    <CustomButton icon="md-home" />
    <CustomButton icon="md-alert" onPress={() => alert('LearnBuz')} />
  </View>
);

export default BottomNavigation;

const styles = StyleSheet.create({
  bottomTabButtons: {
    marginHorizontal: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
