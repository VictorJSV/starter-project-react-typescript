export const getConfig = (key) => {
  const config = {
    dev: {
      API_LOGIN: 'http://localhost:4040/v1/tyc/login',
    },
    pre: {
      API_LOGIN: '',
    },
    prod: {
      API_LOGIN: '',
    }
  }
  return config[process.env.NODE_ENVIRONMENT][key]
}