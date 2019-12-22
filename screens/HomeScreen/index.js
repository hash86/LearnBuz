import React from "react";
import {  View } from "react-native";
import styles from "./styles";
import CustomButton from "../../components/CustomButton";
import UserBoard from "../../components/UserBoard";
import Box from "../../components/Box";
import BottomNavigation from "../../components/BottomNavigation";
const HomeScreen = () => (
  <View style={styles.container}>
    <UserBoard style={styles.section} />

    <View style={styles.section}>
      <View style={styles.section}>
        <Box>
          <CustomButton title="شروع بازی" onPress={() => alert("Go on!")} />
        </Box>
      </View>

      <BottomNavigation />
    </View>
  </View>
);

export default HomeScreen;
