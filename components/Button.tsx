import { Text, TouchableOpacity, View } from 'react-native';

interface Props {
  text: string;
  onPress: () => void;
}

export default function Button({ text, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="items-center justify-center rounded-xl bg-white p-4">
        <Text className="text-lg font-bold text-black">{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
