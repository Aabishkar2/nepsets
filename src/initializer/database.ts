import { Sequelize as SequelizeTypescript, SequelizeOptions } from 'sequelize-typescript'
import { Transaction, Op } from 'sequelize'
import mysql2 from 'mysql2'

import { MYSQL_DB, MYSQL_HOST, MYSQL_PORT, MYSQL_PASS, MYSQL_USER, MYSQL_POOL_MAX } from './config'

// tslint:disable-next-line: no-var-requires

export const sequelizeTypescript = new SequelizeTypescript({
  database: MYSQL_DB,
  dialect: 'mysql',
  dialectModule: mysql2,
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  username: MYSQL_USER,
  password: MYSQL_PASS,
  pool: {
    max: MYSQL_POOL_MAX,
  },
  benchmark: true,
  isolationLevel: Transaction.ISOLATION_LEVELS.SERIALIZABLE,
  define: {
    timestamps: true,
    paranoid: true,
    underscored: true,
  },
  quoteIdentifiers: false,
  logQueryParameters: true,
  operatorsAliases: {
    $in: Op.in,
  },
} as SequelizeOptions)
