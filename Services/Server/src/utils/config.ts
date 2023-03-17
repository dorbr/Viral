import dotenv from 'dotenv'
import { CookieOptions } from 'express'

dotenv.config()

const NODE_ENV = process.env.NODE_ENV as string

const PORT = (process.env.PORT ? process.env.PORT : 4000) as number

const MONGODB_URI = (
  NODE_ENV === 'test' ? process.env.TEST_MONGODB_URI : process.env.MONGODB_URI
) as string

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET as string
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET as string
const PASSWORD_SALT = process.env.PASSWORD_SALT as string

const COOKIE_CONFIG: CookieOptions = {
  httpOnly: true,
  sameSite: 'none',
  secure: NODE_ENV === 'production' ? true : false,
  maxAge: 24 * 60 * 60 * 1000,
}

const CLEAR_COOKIE_CONFIG: CookieOptions = {
  httpOnly: true,
  sameSite: 'none',
  secure: NODE_ENV === 'production' ? true : false,
}

const ALLOWED_ORIGINS: string[] = ['http://localhost:3000']

const SERVICES_URLS = {
  analyzer: 'https://richaroo-analysis.onrender.com',
}
export default {
  NODE_ENV,
  PORT,
  MONGODB_URI,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  PASSWORD_SALT,
  COOKIE_CONFIG,
  CLEAR_COOKIE_CONFIG,
  ALLOWED_ORIGINS,
  SERVICES_URLS,
}