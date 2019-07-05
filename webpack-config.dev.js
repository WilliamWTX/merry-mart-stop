/**
 * Created by 12718 on 2019/7/5 11:35
 * Develop by 12718 on 2019/7/5 11:35
 */
const addSassLoader = (loaderOptions = {}) => (config) => {
  const mode = process.env.NODE_ENV === 'development' ? 'dev' : 'prod';
  const publicPath = require('react-scripts/config/paths').servedPath;
  const shouldUseRelativeAssetPaths = publicPath === './';
  const shouldUseSourceMap = mode === 'prod' && process.env.GENERATE_SOURCEMAP !== 'false';
  const scssRegex = /\.scss$/;
  const scssModuleRegex = /\.module\.scss$/;
  const localIdentName = '[path]__[name]__[local]--[hash:base64:5]';
  const getScssLoader = cssOptions => [
    mode === 'dev' ? require.resolve('style-loader')
      : {
        loader: require('mini-css-extract-plugin').loader,
        options: Object.assign(
          {},
          shouldUseRelativeAssetPaths ? { publicPath: '../../' } : undefined,
        ),
      },
    {
      loader: require.resolve('css-loader'),
      options: cssOptions,
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          require('postcss-preset-env')({
            autoprefixer: {
              flexbox: 'no-2009',
            },
            stage: 3,
          }),
        ],
        sourceMap: shouldUseSourceMap,
      },
    },
    {
      loader: require.resolve('sass-loader'),
      options: Object.assign(loaderOptions, {
        source: shouldUseSourceMap,
      }),
    },
  ];

  const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf))
    .oneOf;
  loaders.splice(5, 2,
    {
      test: scssRegex,
      exclude: scssModuleRegex,
      use: getScssLoader({
        importLoaders: 2,
        modules: true,
        localIdentName,
      }),
      sideEffects: mode === 'prod',
    },
    {
      test: scssModuleRegex,
      use: getScssLoader({
        importLoaders: 2,
        modules: false,
        localIdentName,
      }),
    });
  return { ...config };
};

module.exports = {
  addSassLoader
};
