import React from 'react'
import { Root, Routes } from 'react-static'
import { ThemeProvider } from 'styled-components'
import theme from 'theme'
// import { Link } from '@reach/router'

import './app.css'

function App() {
  return (
    <Root>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav> */}
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Root>
  )
}

export default App
