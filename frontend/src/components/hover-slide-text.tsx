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
  const [isAnimating, setIsAnimating] = useState(false)

  const nextText = hoverText ?? text

  return (
    <span
      className={`inline-grid overflow-hidden cursor-pointer ${className}`.trim()}
      onMouseEnter={() => {
        setIsAnimating(true)
        setIsRevealed(true)
      }}
      onMouseLeave={() => {
        // disable animation, then reset instantly
        setIsAnimating(false)
        setIsRevealed(false)
      }}
    >
      {/* invisible spacer to preserve layout */}
      <span
        aria-hidden="true"
        className={`invisible col-start-1 row-start-1 ${textClassName}`.trim()}
      >
        {text}
      </span>

      {/* current text */}
      <span
        aria-hidden="true"
        className={`col-start-1 row-start-1 ${
          isAnimating ? "transition-transform duration-300 ease-out" : ""
        } ${isRevealed ? "translate-y-full" : "translate-y-0"} ${textClassName}`.trim()}
      >
        {text}
      </span>

      {/* incoming text */}
      <span
        aria-hidden="true"
        className={`col-start-1 row-start-1 ${
          isAnimating ? "transition-transform duration-300 ease-out" : ""
        } ${isRevealed ? "translate-y-0" : "-translate-y-full"} ${textClassName}`.trim()}
      >
        {nextText}
      </span>
    </span>
  )
}
