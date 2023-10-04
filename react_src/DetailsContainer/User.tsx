import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const User = () => {
  return (
    <View style={styles.container}>
      <Text>User</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default User;
