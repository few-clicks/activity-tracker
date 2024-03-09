const path = require('path');

const getManifest = (pathToIcons) => {
  return {
    name: 'Activity tracker',
    short_name: 'Activity',
    description: 'Activity tracker for few clicks team',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    start_url: '/activity/',
    scope: '/activity/',
    display: 'standalone',
    fingerprints: false,
    publicPath: '.',
    icons: [
      {
        src: path.join(pathToIcons, 'logo-android-512x512.png'),
        sizes: [36, 48, 72, 96, 144, 192, 512],
        destination: path.join('icons', 'android'),
      },
      {
        src: path.join(pathToIcons, 'logo-apple-1024x1024.png'),
        sizes: [36, 48, 72, 96, 144, 192, 512, 1024],
        destination: path.join('icons', 'ios'),
        ios: true,
      },
    ],
  };
};

module.exports = getManifest;
