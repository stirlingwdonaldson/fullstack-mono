import 'reflect-metadata'
import { config } from 'dotenv'
import { DataSource } from 'typeorm'
import { Person } from '../entities/Person'

config()

function getEnv(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`)
  }
  return value
}

export const AppDataSource = new DataSource({
  type: 'mssql',
  host: getEnv('DB_HOST'),
  port: Number(process.env.DB_PORT ?? 1433),
  username: getEnv('DB_USERNAME'),
  password: getEnv('DB_PASSWORD'),
  database: getEnv('DB_NAME'),
  entities: [Person],
  synchronize: false,
  options: {
    encrypt: process.env.DB_ENCRYPT === 'true',
    trustServerCertificate: process.env.DB_TRUST_SERVER_CERTIFICATE === 'true',
  },
})
