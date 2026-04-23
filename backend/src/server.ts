import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import { AppDataSource } from './config/data-source'
import personRoutes from './routes/person.routes'
config()
const app = express()
const port = Number(process.env.PORT ?? 4000)
app.use(cors())
app.use(express.json())
app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})
app.use('/api/people', personRoutes)
AppDataSource.initialize()
  .then(() => {
    app.listen(port, () => {
      console.log(`API running on http://localhost:${port}`)
    })
  })
  .catch((error) => {
    console.error('Database connection failed:', error)
  })
