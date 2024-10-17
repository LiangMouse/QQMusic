module.exports = {
  parser: '@typescript-eslint/parser', // 使用 TypeScript 解析器
  extends: [
    'eslint:recommended', // ESLint 的推荐规则
    'plugin:react/recommended', // React 的推荐规则
    'plugin:@typescript-eslint/recommended' // TypeScript 的推荐规则
  ],
  env: {
    browser: true, // 启用浏览器环境，支持浏览器中的全局变量
    es2021: true, // 启用最新的 ECMAScript 规范支持
    node: true // 对node环境支持,如module
  },
  plugins: ['react', '@typescript-eslint'], // 启用 React 和 TypeScript 插件
  settings: {
    react: {
      version: 'detect' // 自动检测 React 版本
    }
  },
  rules: {
    'no-unused-vars': 'warn', // 未使用变量的警告
    'no-undef': 'warn', // 未定义变量的警告
    '@typescript-eslint/no-unused-vars': 'warn', // TypeScript 未使用变量的警告
    'react/prop-types': 'off' // 如果你使用 TypeScript，可以关闭 PropTypes 检查
  }
};
