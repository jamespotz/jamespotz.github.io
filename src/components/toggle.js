import React from "react"

const ToggleBtn = props => (
  <label className="toggle-switch" aria-label="theme toggle">
    <input
      type="checkbox"
      className="h-0 w-0 appearance-none"
      defaultChecked={props.checked}
      onChange={e => props.onToggle.call(null, e.target.checked)}
    />
    <span className="slider round" />
  </label>
)

export default ToggleBtn
