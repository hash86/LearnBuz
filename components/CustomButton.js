import React from "react";
import { Platform } from "react-native";
import { StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const CustomButton = ({ style, icon, image, title, onPress, ...props }) => {
  const selectedColor =
    Platform.OS === "android" ? Colors.accent : Colors.primary;
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      {...props}
    >
      {icon && <Ionicons name={icon} size={24} color={selectedColor} />}
      {image && <Image source={image} style={styles.image} />}
      {title && (
        <Text style={[styles.title, { color: selectedColor }]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'center',
    padding: 2
  },
  image: {
    width: 30,
    height: 30
  },
  title: {
    fontSize: 18
  }
});
