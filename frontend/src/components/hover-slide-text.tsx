import { useState } from "react"

type HoverSlideTextProps = {
  text: string
  hoverText?: string
  className?: string
  textClassName?: string
}

export default function HoverSlideText({
  text,
  hoverText,
  className = "",
  textClassName = "",
}: HoverSlideTextProps) {
  const [isRevealed, setIsRevealed] = useState(false)
  const nextText = hoverText ?? text

  return (
    <span
      className={`inline-grid overflow-hidden cursor-pointer ${className}`.trim()}
      onMouseEnter={() => setIsRevealed(true)}
    >
      <span
        aria-hidden="true"
        className={`invisible col-start-1 row-start-1 ${textClassName}`.trim()}
      >
        {text}
      </span>

      <span
        aria-hidden="true"
        className={`col-start-1 row-start-1 transition-transform duration-300 ease-out ${isRevealed ? "translate-y-full" : "translate-y-0"} ${textClassName}`.trim()}
      >
        {text}
      </span>

      <span
        aria-hidden="true"
        className={`col-start-1 row-start-1 transition-transform duration-300 ease-out ${isRevealed ? "translate-y-0" : "-translate-y-full"} ${textClassName}`.trim()}
      >
        {nextText}
      </span>
    </span>
  )
}
