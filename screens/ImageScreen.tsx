import React, { useState, useEffect } from 'react';
import { Button, Image, StyleSheet, FlatList } from 'react-native';
import * as FileSystem from 'expo-file-system';
import singleFileUploader from "single-file-uploader";

export default function ImageScreen() {
    const [gallery, setGallery] = useState<string[]>([""]);

    const handlePress = async (item: string) => {
      try {
        singleFileUploader(
            {
               distantUrl:"https://wildstagram.nausicaa.wilders.dev/upload",
               filename: item,
               filetype: "image/jpeg",
               formDataName: "fileData",
               localUri: FileSystem.cacheDirectory + "ImageManipulator/" + item,
        });
        alert("Image uploaded successfully");
      } catch (error) {
        alert("Error while uploading image");
      }
    };    

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
            <>
                <Image
                    style={styles.image}
                    source={{
                        uri:
                        FileSystem.cacheDirectory + "ImageManipulator/" + image.item,
                    }}
                />
                <Button
                    title='Upload image'
                    onPress={() => handlePress(image.item)}
                    color="grey"
                    accessibilityLabel="Upload image"
                />

            </>
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
