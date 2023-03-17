const logger = {
  info: {
    all: (...params: any[]) => console.log(...params),
    limited: (...params: any[]) => {
      if (!isProductionEnvironment()) console.log(...params)
    },
    dev: (...params: any[]) => {
      if (isDevelopmentEnvironment()) console.log(...params)
    },
    test: (...params: any[]) => {
      if (isTestingEnvironment()) console.log(...params)
    },
    prod: (...params: any[]) => {
      if (isProductionEnvironment()) console.log(...params)
    },
  },
  warn: {
    all: (...params: any[]) => console.warn(...params),
    limited: (...params: any[]) => {
      if (!isProductionEnvironment()) console.warn(...params)
    },
    dev: (...params: any[]) => {
      if (isDevelopmentEnvironment()) console.warn(...params)
    },
    test: (...params: any[]) => {
      if (isTestingEnvironment()) console.warn(...params)
    },
    prod: (...params: any[]) => {
      if (isProductionEnvironment()) console.warn(...params)
    },
  },
  error: {
    all: (...params: any[]) => console.error(...params),
    limited: (...params: any[]) => {
      if (!isProductionEnvironment()) console.error(...params)
    },
    dev: (...params: any[]) => {
      if (isDevelopmentEnvironment()) console.error(...params)
    },
    test: (...params: any[]) => {
      if (isTestingEnvironment()) console.error(...params)
    },
    prod: (...params: any[]) => {
      if (isProductionEnvironment()) console.error(...params)
    },
  },
}

const isDevelopmentEnvironment = () => process.env.NODE_ENV === 'DEVELOPMENT'
const isTestingEnvironment = () => process.env.NODE_ENV === 'TESTING'
const isProductionEnvironment = () => process.env.NODE_ENV === 'PRODUCTION'

export default logger