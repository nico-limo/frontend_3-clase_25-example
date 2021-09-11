import React, { useState } from 'react'
import "./styles.css"
import ThemeContext, { themes } from './context'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Layout from './components/Layout'

const App = () => {
  const [theme, setTheme] = useState(themes.light);

  const handleChangeTheme = () => {
    if (theme === themes.dark) setTheme(themes.light)
    if (theme === themes.light) setTheme(themes.dark)
  }

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      <Layout>
        <Navbar />
        <Body />
      </Layout>
    </ThemeContext.Provider>
  )
}

export default App
