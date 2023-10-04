import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Post = () => {
  return (
    <View style={styles.container}>
      <Text>Post</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Post;