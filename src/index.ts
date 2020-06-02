import express from 'express'
import { initDatabase } from './initializer/initDatabase'
import { APP_PORT } from './initializer/config'
import { sync } from './controller/sync'
import { getLatestData } from './controller/getLatestData'

// initialize database
initDatabase().catch((err: Error) => {
  process.exit(1)
})

const app = express()

app.get('/', async (req, res) => {
  await getLatestData(req, res)
})

app.get('/sync', async (req, res) => {
  await sync(req, res)
})

app.listen(APP_PORT, () => {
  console.log(`server started at port ${APP_PORT}`)
})
