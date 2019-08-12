import React from "react"

export const Emoji = ({ symbol, label, ...rest }) => (
  <span
    role="img"
    aria-label={label ? label : ""}
    aria-hidden={label ? false : true}
    {...rest}
  >
    {symbol}
  </span>
)
