import HoverSlideText from "./hover-slide-text"

const items = [
  { id: 1, title: "Cream Cap", image: "/images/cap-1.jpg" },
  { id: 2, title: "Brown Cap", image: "/images/cap-2.jpg" },
  { id: 3, title: "Black Cap", image: "/images/cap-3.jpg" },
]

const loopItems = [...items, ...items]
export default function Carousel() {
  return (
    <section className="overflow-hidden py-12">

      <div className="mb-6 text-center font-serif text-2xl text-gray-500 font-light uppercase">
        <a className="hover:underline underline-offset-8">
          ( Featured Items )
        </a>
      </div>

      <div className="relative overflow-hidden">
        <div className="carousel-track flex w-max gap-4">
          {loopItems.map((item, index) => (
            <article
              key={`${item.id}-${index}`}
              className="flex-none w-[320px] sm:w-105 bg-neutral-100 transition-all duration-200 hover:bg-black"
            >
              <div className="aspect-4/5 overflow-hidden">
                <img
                // src={`src/assets/bg.jpg`}
                />
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-black font-bold uppercase">
        <a className="hover:underline underline-offset-8">
          <HoverSlideText text="( View All Items )" />
        </a>
      </div>

    </section>
  )
}
