import bg from "@/assets/bg.jpg"
import HoverSlideText from "@/components/hover-slide-text"

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <section className="absolute bottom-0 left-0 p-3 sm:p-5 md:p-7  z-1 transition-all">
        <div className="text-4xl text-white font-bold">
          PHILOSOPHY
        </div>
        <div className="text-4xl text-gray-300 mix-blend-difference bg-blend-difference font-bold">
          SEE HOW I DO STUFF
        </div>
      </section>

      <section className="absolute text-4xl left-0 bottom-1/2 text-white p-5 font-serif">
        <HoverSlideText text={`[ 01 ]`} />
      </section>
    </section>
  )
}
