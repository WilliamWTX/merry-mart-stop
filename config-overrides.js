/**
 * Created by william on 2019/7/1 16:52
 * Develop by william on 2019/7/1 16:52
 */

const { override, fixBabelImports, useEslintRc } = require('customize-cra');
const { Profile } = require('./profile');
const { addSassLoader } = require('./webpack-config.dev.js');

// env变量
process.env.Profile = Profile;

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  useEslintRc(),
  addSassLoader(),
);
