import { sequelizeTypescript } from './database'
import { Record } from '../model/Record'

const initDbModelsAndSync = async () => {
  sequelizeTypescript.addModels([Record])
  await sequelizeTypescript.sync()
}

export const initDatabase = async () => {
  await initDbModelsAndSync()
}
