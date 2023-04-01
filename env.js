const env = {
    dev: {
      host: {
        dummyJson: 'https://dummyjson.com'
      },
    }
  }
  
  const DEV = 'dev'
  
  export const config = () => {
    switch (__ENV.STAGE) {
    case DEV:
      return env.dev
    default:
      throw `Stage ${__ENV.STAGE} not found`
    }
  }