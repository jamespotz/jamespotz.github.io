import React from "react"
import BorderSvg from "../images/border.svg"

const Avatar = ({ children }) => (
  <div className="avatar">
    {children}
    <img src={BorderSvg} className="avatar-border" />
  </div>
)

export default Avatar
