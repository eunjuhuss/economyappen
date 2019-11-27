import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  wp: (percent) => (((percent/100) * width)),
  hp: (percent) => (((percent/100) * height))
};