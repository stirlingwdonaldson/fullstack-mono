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
  const nextText = hoverText ?? text

  return (
    <span className={`group inline-grid overflow-hidden cursor-pointer ${className}`.trim()}>
      <span
        aria-hidden="true"
        className={`invisible col-start-1 row-start-1 ${textClassName}`.trim()}
      >
        {text}
      </span>

      <span
        aria-hidden="true"
        className={`col-start-1 row-start-1 translate-y-0 transition-transform duration-300 ease-out group-hover:translate-y-full ${textClassName}`.trim()}
      >
        {text}
      </span>

      <span
        aria-hidden="true"
        className={`col-start-1 row-start-1 -translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 ${textClassName}`.trim()}
      >
        {nextText}
      </span>
    </span>
  )
}
