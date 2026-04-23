const items = [
  { id: 1, title: "Cream Cap", image: "/images/cap-1.jpg" },
  { id: 2, title: "Brown Cap", image: "/images/cap-2.jpg" },
  { id: 3, title: "Black Cap", image: "/images/cap-3.jpg" },
]

const loopItems = [...items, ...items]
export default function Carousel() {
  return (
    <section className="overflow-hidden py-12">
      <div className="mb-6 text-center font-serif text-4xl">( Featured Products )</div>
      <div className="relative overflow-hidden">
        <div className="carousel-track flex w-max gap-4">
          {loopItems.map((item, index) => (
            <article
              key={`${item.id}-${index}`}
              className="flex-none w-[320px] sm:w-[420px] bg-neutral-100"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
