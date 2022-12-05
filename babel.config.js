module.exports = function (api) {
  api.cache(true);
  const plugins = [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          constants: './src/constants/',
          routers: './src/routers/',
          screens: './src/screens/',
          utils: './src/utils/',
          store: './src/store/',
          services: './src/store/services/',
          helpers: './src/helpers/',
          hooks: './src/hooks/',
          configs: './src/configs/',
          components: './src/components/',
          assets: './src/assets/',
          model: './src/model/',
        },
      },
    ],
  ];
  return {
    presets: [
      'module:metro-react-native-babel-preset',
      'module:react-native-dotenv',
    ],
    env: {
      production: {
        plugins: plugins.concat('transform-remove-console'),
      },
      development: {
        plugins: plugins,
      },
    },
  };
};
