import { View } from 'react-native';
import Welcome from './Welcome';

export default {
  title: 'Welcome',
  parameters: {
    notes: `
      Welcome component story
    `,
  },
};

export const _Welcome = () => {
  return (
    <View style={{ padding: 16 }}>
      <Welcome />
    </View>
  );
};
