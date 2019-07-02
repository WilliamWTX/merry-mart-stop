/**
 * Created by william on 2019/7/1 16:52
 * Develop by william on 2019/7/1 16:52
 */
const { override, fixBabelImports } = require('customize-cra');
const { Profile } = require('./profile');

// env变量
process.env.Profile = Profile;

// 使用ESLint
useEslintRc = (configFile) => (config) => {
  const eslintRule = config.module.rules.filter(
    r => r.use && r.use.some(u => u.options && u.options.useEslintrc !== void 0)
  )[0];

  eslintRule.use[0].options.useEslintrc = true;
  eslintRule.use[0].options.ignore = true;
  eslintRule.use[0].options.configFile = configFile;

  delete eslintRule.use[0].options.baseConfig;

  config.module.rules = config.module.rules.map(r =>
    r.use && r.use.some(u => u.options && u.options.useEslintrc !== void 0)
      ? eslintRule
      : r
  );

  return config;
};

// 使用SCSSLoader
addSCSSLoader = () => config => {
  return config;
};

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  useEslintRc(),
  addSCSSLoader(),
);
