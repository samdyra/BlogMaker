import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost, getBlogPosts } =
    useContext(Context);
  // console.log(navigation);

  useEffect(() => {
    getBlogPosts();

    const unsuscribe = navigation.addListener("focus", () => {
      getBlogPosts();
    });

    return unsuscribe;
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(data) => data.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Show", { id: item.id });
              }}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.icon} name="trash"></Feather>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
};

// IndexScreen.navigationOption = () => {
//   return {
//     headerRight: () => {
//       return (
//         <TouchableOpacity>
//           <Feather name="plus" size={30}></Feather>
//         </TouchableOpacity>
//       );
//     },
//   };
// };

const styles = StyleSheet.create({
  row: {
    borderTopWidth: 1,
    borderColor: "gray",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: { fontSize: 18 },
  icon: { fontSize: 24 },
});

export default IndexScreen;
