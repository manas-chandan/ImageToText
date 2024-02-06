import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'push.notify.test',
  appName: 'ImageToText',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
};
export default config;
