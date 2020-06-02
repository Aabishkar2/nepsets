import dotenv from 'dotenv'

dotenv.config()

export const MYSQL_HOST = process.env.MYSQL_HOST || ''
export const MYSQL_PORT = process.env.MYSQL_PORT || 3306
export const MYSQL_USER = process.env.MYSQL_USER || ''
export const MYSQL_PASS = process.env.MYSQL_PASS || ''
export const MYSQL_DB = process.env.MYSQL_DB || ''
export const MYSQL_POOL_MAX = +(process.env.MYSQL_POOL_MAX || 20)
export const APP_PORT = process.env.APP_PORT || 5000
