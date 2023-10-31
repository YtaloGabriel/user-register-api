import dotenv from 'dotenv'
import { Sequelize } from 'sequelize'

dotenv.config()

export const db = new Sequelize(process.env.MYSQL_URL!, {
  dialect: 'mysql',
})
