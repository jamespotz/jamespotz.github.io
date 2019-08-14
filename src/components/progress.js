import React from "react"
import { useSpring, animated } from "react-spring"

const Progress = ({ value }) => {
  const newVal = value || 0
  const props = useSpring({
    to: { width: `${newVal}%` },
    from: { width: "0%" },
    delay: 1000,
  })

  return (
    <div className="progress-bar">
      <animated.span
        className={`propgress-bar--track ${newVal === 100 ? "full" : ""}`}
        style={props}
      />
    </div>
  )
}

export default Progress
