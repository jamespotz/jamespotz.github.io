import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Icon = ({ name, ...rests }) => <FontAwesomeIcon icon={name} {...rests} />

export default Icon
