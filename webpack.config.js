module.exports = {
  mode: 'production',
  entry: {
    firebaseConfig: './firebaseConfig.js',
    login: './authentication/login.js',
    signup: './authentication/signup.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist/',
  },
  watch: true,
};

// npx webpack --config webpack.config.js