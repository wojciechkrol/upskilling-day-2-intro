import MaskedView from '@react-native-masked-view/masked-view';
import { CameraView } from 'expo-camera';
import { cssInterop } from 'nativewind';

cssInterop(MaskedView, {
  className: 'style',
});

cssInterop(CameraView, {
  className: 'style',
});
