import { useEffect, useState } from 'react'
import './App.css'
type Person = {
  id: number
  name: string
  age: number
}
export default function App() {
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
    <main className="app-shell">
      <section className="app-card">
        <p className="eyebrow">React + Express + TypeORM + MSSQL</p>
        <h1>People</h1>
        <p className="subtitle">Data is coming from your `Person` table through the backend API.</p>
        {loading && <p className="status">Loading people...</p>}
        {error && <p className="status error">{error}</p>}
        {!loading && !error && (
          <div className="table-wrap">
            <table className="people-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                {people.map((person) => (
                  <tr key={person.id}>
                    <td>{person.id}</td>
                    <td>{person.name}</td>
                    <td>{person.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {people.length === 0 && <p className="status">No rows found in `Person`.</p>}
          </div>
        )}
      </section>
    </main>
  )
}
