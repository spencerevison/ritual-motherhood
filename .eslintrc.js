module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  parser: "babel-eslint",
  extends: ["react-app", "plugin:prettier/recommended", "prettier/react"],
  plugins: ["react", "prettier"],
  rules: {
  },
};
