import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }){
  const [darkMode, setDarkMode] = useState(() => {
    try{
      const v = localStorage.getItem('darkMode')
      return v ? JSON.parse(v) : false
    }catch(e){
      return false
    }
  })

  useEffect(() => {
    try{
      localStorage.setItem('darkMode', JSON.stringify(darkMode))
      if(darkMode) document.documentElement.classList.add('dark')
      else document.documentElement.classList.remove('dark')
    }catch(e){}
  },[darkMode])

  const toggleTheme = () => setDarkMode(v => !v)

  return <ThemeContext.Provider value={{ darkMode, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme(){ return useContext(ThemeContext) }
export default ThemeContext
