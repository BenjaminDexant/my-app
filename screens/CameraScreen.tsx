import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImageManipulator from "expo-image-manipulator";

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const cameraRef = useRef(null);

  const handlePress = async () => {
    if (cameraRef.current) {
      const pictureMetadata = await cameraRef.current.takePictureAsync();
      console.log("pictureMetadata", pictureMetadata);
      console.log(
        await ImageManipulator.manipulateAsync(pictureMetadata.uri, [
          { resize: { width: 800 } },
        ])
      );
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      <Camera style={styles.camera} type={type} ref={cameraRef} />
      <Button
        title='Take picture'
        onPress={handlePress}
        color="grey"
        accessibilityLabel="Take a photo"
      />
    </>
  );
};

const styles = StyleSheet.create({
  camera: {flex: 1}
}); 
