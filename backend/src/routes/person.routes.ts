
import { Router } from 'express'
import { AppDataSource } from '../config/data-source'
import { Person } from '../entities/Person'
const router = Router()
router.get('/', async (_req, res) => {
  try {
    const people = await AppDataSource.getRepository(Person).find()
    res.json(people)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Failed to fetch people' })
  }
})

export default router
