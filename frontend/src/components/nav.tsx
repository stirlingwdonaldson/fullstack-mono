const items = [
  { text: "Philosophy", link: "Philosophy" },
  { text: "Data", link: "Data" },
  { text: "Contact", link: "Contact" },
]

export default function Nav() {
  return (
    <div className="z-10 w-full px-5 py-2 text-white sticky top-0">
      <nav className="flex flex-row items-baseline justify-between">
        <div className="text-2xl font-semibold tracking-tighter">
          stirling[s].
        </div>

        <div className="w-20">
          <div className="h-[1.5px]  flex-1 bg-white/80" />
          <div className="h-[1.5px] -translate-y-2 flex-1 bg-white/80" />

        </div>
        <div className="text-sm flex flex-row gap-5 uppercase font-semibold tracking-tighter ">
          {items.map((item, index) => (
            <div key={index}>
              {item.text}
            </div>
          ))}
        </div>
      </nav>
    </div>
  )
}
