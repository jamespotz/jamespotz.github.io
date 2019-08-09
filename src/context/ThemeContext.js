import React, { createContext, useState } from "react"

export const themes = ["light", "dark"]

const ThemeContext = createContext(themes[0])

export const ThemeProvider = props => {
  const [theme, setTheme] = useState("light")

  const changeTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export const ThemeConsumer = ThemeContext.Consumer
