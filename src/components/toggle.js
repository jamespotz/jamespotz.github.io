import React from "react"
import Icon from "./icon"

const ToggleBtn = props => (
  <label className="toggle-switch" aria-label="theme toggle">
    <div
      className="absolute flex justify-between w-full"
      style={{ padding: "3px" }}
    >
      <Icon name="moon" className="text-yellow-500" />
      <Icon name="sun" className="text-yellow-500" />
    </div>
    <input
      type="checkbox"
      className="h-0 w-0 appearance-none"
      checked={props.checked}
      onChange={e => props.onToggle.call(null, e.target.checked)}
    />
    <span className="slider round" />
  </label>
)

export default ToggleBtn
