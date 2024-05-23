import { Text, TextProps } from 'react-native';

export default function AdjustableText(props: TextProps) {
  return (
    <Text className="text-8xl font-extrabold uppercase text-white" numberOfLines={1} {...props} />
  );
}
