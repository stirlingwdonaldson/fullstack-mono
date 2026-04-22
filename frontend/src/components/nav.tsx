import { useState } from "react"

const items = [
  { text: "Philosophy", link: "Philosophy" },
  { text: "Data", link: "Data" },
  { text: "Contact", link: "Contact" },
]


export default function Nav() {

  return (
    <div className={` w-full max-w-225 p-5 z-50`}>
      <section className="bg-black text-white p-5 flex flex-row justify-between items-center border-4 rounded-3xl tracking-tighter">
        <a
          href="/"
          className={`text-2xl font-black rounded-2xl hover:text-blue-500 transition-all`}
        >
          Stirling's!
        </a>


        <section className="flex flex-row  gap-5">
          {items.map((item, index) => (
            <a
              key={index}
              href={`/${item.link}`}
              className="hover:scale-105 origin-center rounded-xl hover:bg-white hover:text-black p-2 transition-all"
            >
              {item.text}
            </a>
          ))}
        </section>
      </section>
    </div>
  )
}
