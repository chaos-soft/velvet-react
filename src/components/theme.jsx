/* global localStorage */
import React, { useState, useEffect } from 'react'

export default function Theme () {
  const [, setTheme] = useState('light')

  function scroll () {
    window.scroll(0, 0)
  }

  function switchTheme (theme) {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
    setTheme(theme)
  }

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme) {
      setTheme(theme)
      document.documentElement.dataset.theme = theme
    }
  }, [])

  return (
    <>
      <div>© 2008–2024 57st.net</div>
      <div>2024–2057 <a href='/'>57st.su</a></div>
      <div><a href='/articles/79'>О сайте</a></div>
      <div><a onClick={scroll}>Наверх</a></div>
      <div>
        Темы:{' '}
        <a onClick={() => switchTheme('base16-mocha')}>Base16 Mocha</a>{', '}
        <a onClick={() => switchTheme('catppuccin-mocha')}>Catppuccin Mocha</a>{', '}
        <a onClick={() => switchTheme('light')}>Светлая</a>{', '}
        <a onClick={() => switchTheme('nord')}>Nord</a>
      </div>
    </>
  )
}
