import bg from "@/assets/bg.jpg"

export default function Hero(){
  return (
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bg})` }}
        />
      </section>
  )
}
