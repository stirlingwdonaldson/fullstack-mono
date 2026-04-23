import Nav from "@/components/nav"
import bg from "@/assets/bg.jpg"

function App() {
  return (
    <div className="isolate min-h-screen bg-white">
      <Nav />

      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bg})` }}
        />
      </section>
      <main className="relative z-0 h-[2000px] bg-white" />
    </div>
  )
}

export default App
