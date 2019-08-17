import React, { createContext, useState, useEffect } from "react"

const ThemeContext = createContext("light")

export const ThemeProvider = props => {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const localTheme = localStorage.getItem("jamespotz_theme")
    setTheme(!!localTheme ? localTheme : "light")
  }, [])

  const changeTheme = value => {
    localStorage.setItem("jamespotz_theme", value === true ? "dark" : "light")
    setTheme(value === true ? "dark" : "light")
  }

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
