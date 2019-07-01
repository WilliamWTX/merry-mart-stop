/**
 * Created by william on 2019/7/1 16:52
 * Develop by william on 2019/7/1 16:52
 */
const { override, fixBabelImports } = require('customize-cra');
const { Profile } = require('./profile');

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

  const rules = config.module.rules.map(r =>
    r.use && r.use.some(u => u.options && u.options.useEslintrc !== void 0)
      ? eslintRule
      : r
  );
  config.module.rules = rules;

  return config;
};

// env变量

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  useEslintRc(),
);
