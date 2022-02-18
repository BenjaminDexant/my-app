import React, { useEffect, useState } from "react";
import axios from "axios";
import { FlatList, Image, StyleSheet } from "react-native";

export default function FeedScreen() {

  const [gallery, setGallery] = useState<string[]>([""]);

  useEffect(() => {
    (async () => {
      const remoteFiles = await axios.get(
        "https://wildstagram.nausicaa.wilders.dev/list"
      );
      console.log("Remote files", remoteFiles.data);
      setGallery(remoteFiles.data);
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
              "https://wildstagram.nausicaa.wilders.dev/files/" + image.item,
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
