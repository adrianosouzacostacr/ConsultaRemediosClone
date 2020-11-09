import {Platform} from 'react-native';

const envs = {
  stage: {
    DEV_API: 'http://staging.api.com',
    SOUNDS: Platform.OS === 'android' || false,
  },
  prod: {
    DEV_API: 'http://prod.api.com',
    SOUNDS: Platform.OS === 'android' || false,
  },
  dev: {
    DEV_API: 'http://dev.api.com',
    SOUNDS: Platform.OS,
  },
};

export default envs.dev;
