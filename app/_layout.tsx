import { GestureHandlerRootView } from 'react-native-gesture-handler';
import '~/config/tailwind';
import '../global.css';

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { flex: 1, backgroundColor: 'transparent' },
        }}
      />
    </GestureHandlerRootView>
  );
}
