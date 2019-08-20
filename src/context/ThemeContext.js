import React, { createContext, useState, useEffect } from "react"

const ThemeContext = createContext("light")

export const ThemeProvider = props => {
  const [theme, setTheme] = useState("light")
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const localTheme = localStorage.getItem("jamespotz_theme")
    if (!!localTheme) {
      setTheme(localTheme)
      setChecked(localTheme === "dark")
    }
  }, [])

  const changeTheme = value => {
    localStorage.setItem("jamespotz_theme", value === true ? "dark" : "light")
    setTheme(value === true ? "dark" : "light")
    setChecked(value)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        checked,
        changeTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export const ThemeConsumer = ThemeContext.Consumer
