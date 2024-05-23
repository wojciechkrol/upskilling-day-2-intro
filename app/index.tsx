import MaskedView from '@react-native-masked-view/masked-view';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { MotiView } from 'moti';
import { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import AdjustableText from '~/components/AdjustableText';
import Button from '~/components/Button';

export default function Home() {
  const [visible, setVisible] = useState<boolean>(false);
  const [cameraReady, setCameraReady] = useState<boolean>(false);
  const [permission, requestPermission] = useCameraPermissions();
  const isCameraLoading = visible && !cameraReady;

  const handleCameraOn = async () => {
    await requestPermission();
    setVisible(true);
  };

  const handleCameraOff = async () => {
    if (isCameraLoading) {
      return;
    }

    setTimeout(() => {
      setVisible(false);
    }, 1000);

    setCameraReady(false);
  };

  return (
    <View className="flex-1 bg-black px-5">
      <SafeAreaView className="flex-1">
        <MaskedView
          className="flex-1"
          maskElement={
            <MotiView
              animate={{ scale: cameraReady ? 1.3 : 1 }}
              transition={{ type: 'timing', duration: 1000 }}
              className="flex-1 items-center justify-center">
              <AdjustableText>Expo</AdjustableText>
              <AdjustableText>is</AdjustableText>
              <AdjustableText>cool</AdjustableText>
            </MotiView>
          }>
          {permission && permission.granted && visible && (
            <CameraView
              pointerEvents="none"
              className="absolute h-full w-full"
              onCameraReady={() => setCameraReady(true)}
              facing="back"
            />
          )}
          <MotiView
            from={{ opacity: 0 }}
            animate={{ opacity: cameraReady ? 0 : 1 }}
            transition={{ duration: 700 }}
            className="absolute h-full w-full bg-white"
          />
        </MaskedView>
        <View className="mb-5 mt-5 flex-col">
          <Button
            text={(() => {
              if (isCameraLoading) {
                return 'Loading Camera...';
              } else if (cameraReady) {
                return 'Hide Camera';
              }

              return 'Show Camera';
            })()}
            onPress={visible ? handleCameraOff : handleCameraOn}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
