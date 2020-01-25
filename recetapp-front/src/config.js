const envConfig = {
  development: {
    apiUrl: 'http://localhost:5000/api'
  },
  production: {}
};

export default envConfig[process.env.ENV || 'development']