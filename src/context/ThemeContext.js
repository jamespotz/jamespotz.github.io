import React, { createContext, useState, useEffect, useContext } from "react"

const ThemeContext = createContext({
  theme: "light",
  checked: false,
  loaded: false,
})

const useEffectTheme = () => {
  const [themeState, setThemeState] = useState({
    theme: "light",
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

  return [themeState, setThemeState]
}

export const ThemeProvider = props => {
  const [themeState, setThemeState] = useEffectTheme()

  if (!themeState.loaded) {
    return <div />
  }

  const changeTheme = value => {
    const theme = value === true ? "dark" : "light"
    localStorage.setItem("jamespotz_theme", theme)
    setThemeState({
      theme,
      checked: value,
      loaded: true,
    })
  }

  return (
    <div className={`transition-ease-in ${themeState.theme}`}>
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

export const useTheme = () => useContext(ThemeContext)
export const ThemeConsumer = ThemeContext.Consumer
