import { View, Text } from 'react-native';

/* eslint-disable-next-line */
export interface ComponentsProps {}

function Welcome(props: ComponentsProps) {
  return (
    <View style={{ padding: 16, borderColor: 'red', borderWidth: 1, borderRadius: 16, }}>
      <Text style={{ color: 'darkblue' }}>Welcome to component!</Text>
    </View>
  );
}

export default Welcome;
