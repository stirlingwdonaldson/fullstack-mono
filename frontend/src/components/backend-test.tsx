import { useEffect, useState } from 'react'

type Person = {
  id: number
  name: string
  age: number
}

export default function BackEndTest() {


  const [people, setPeople] = useState<Person[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  useEffect(() => {
    async function loadPeople() {
      try {
        const response = await fetch('http://localhost:4000/api/people')
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }
        const data: Person[] = await response.json()
        setPeople(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }
    loadPeople()
  }, [])

  return (
    <div className="">

      {people.map((person) => (
        <ul>
          <li>{person.id}</li>
          <li>{person.name}</li>
          <li>{person.age}</li>
        </ul>
      ))}

    </div>
  )
}
