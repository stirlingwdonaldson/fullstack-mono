import Nav from "@/components/nav"
import bg from "@/assets/bg.jpg"

function App() {
  return (
    <div className="min-h-screen">
      <section className="relative h-screen overflow-hidden">

        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bg})` }}
        />
        <Nav />

      </section>
      <main className="h-500" />
    </div>
  )
}

export default App
