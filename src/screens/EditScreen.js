import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ route, navigation }) => {
  const id = route.params.id;
  const { state, editBlogPost } = useContext(Context);
  const editPost = state.find((editPost) => editPost.id === route.params.id);

  return (
    <BlogPostForm
      initialValue={{ title: editPost.title, content: editPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => {
          navigation.pop();
        });
      }}
    ></BlogPostForm>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
