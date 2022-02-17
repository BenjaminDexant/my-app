import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const handlePress = () => {
    console.log('pressed');
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
      <Camera style={styles.camera} type={type} />
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
