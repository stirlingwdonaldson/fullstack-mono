import Nav from "@/components/nav"
import Rambling from "./components/rambling"
import Hero from "./components/hero"
import Carousel from "./components/carousel"

function App() {
  return (
    <div className="isolate min-h-screen bg-white">
      <Nav />
      <Hero />
      <Rambling />
      <Carousel />
    </div>
  )
}

export default App
