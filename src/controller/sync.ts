import fetch from 'node-fetch'
import { Record } from '../model/Record'

export const sync = async (req: any, res: any) => {
  const data = await retreive()
  if (!data) {
    return res.status(500).json({
      message: 'Server Error',
    })
  }
  const createRecord = await Record.create({
    date: Date.now(),
    record: JSON.stringify(data),
  })
  if (!createRecord) {
    return res.status(500).json({
      message: 'Server Error',
    })
  }
  return res.status(200).json({
    message: 'Done',
  })
}

const retreive = async () => {
  const data = await fetch('https://nepstockapi.herokuapp.com/')
  if (!data) {
    return false
  }
  return data.json()
}
