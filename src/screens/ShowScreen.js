import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";

const ShowScreen = ({ route, navigation }) => {
  const { state } = useContext(Context);
  // console.log(route.params);
  // console.log(state);
  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);
  // console.log(blogPost);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Edit", { id: blogPost.id });
        }}
      >
        <EvilIcons name="pencil" style={styles.icon}></EvilIcons>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: { fontSize: 70, marginLeft: 300, marginTop: 570 },
});

export default ShowScreen;
