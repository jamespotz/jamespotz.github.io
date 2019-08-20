import React, { createContext, useState, useEffect } from "react"

const ThemeContext = createContext("light")

export const ThemeProvider = props => {
  const [themeState, setThemeState] = useState({
    theme: "",
    checked: false,
    loaded: false,
  })

  useEffect(() => {
    const theme = localStorage.getItem("jamespotz_theme")
    setThemeState({
      theme: theme === "dark" ? "dark" : "light",
      checked: theme === "dark",
      loaded: true,
    })
  }, [])

  const changeTheme = value => {
    const theme = value === true ? "dark" : "light"
    localStorage.setItem("jamespotz_theme", theme)
    setThemeState({
      theme,
      checked: value,
      loaded: true,
    })
  }

  if (!themeState.loaded) {
    return <div />
  }

  return (
    <div className={themeState.theme}>
      <ThemeContext.Provider
        value={{
          theme: themeState.theme,
          checked: themeState.checked,
          changeTheme,
        }}
      >
        {props.children}
      </ThemeContext.Provider>
    </div>
  )
}

export const ThemeConsumer = ThemeContext.Consumer
