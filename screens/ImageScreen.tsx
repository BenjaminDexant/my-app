import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';
import * as FileSystem from 'expo-file-system';

export default function ImageScreen() {
    const [gallery, setGallery] = useState([""]);

    useEffect(() => {
        (async () => {
          const images = await FileSystem.readDirectoryAsync(
            FileSystem.cacheDirectory + "ImageManipulator"
          );
          setGallery(images);
        })();
      }, []);

  return (
    <FlatList
      data={gallery}
      keyExtractor={(gallery) => gallery}
      renderItem={(image) => {
        return (
          <Image
            style={styles.image}
            source={{
              uri:
                FileSystem.cacheDirectory + "ImageManipulator/" + image.item,
            }}
          />
        );
      }}
    />);
};

const styles = StyleSheet.create({
    image: {
      resizeMode: "cover",
      height: 500,
    },
  });
