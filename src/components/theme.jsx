/* global localStorage */
import React, { useState, useEffect } from 'react'

export default function Theme () {
  const [theme, setTheme] = useState('light')

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
      {theme === 'light' &&
        <span className='material-symbols-outlined dark' onClick={() => switchTheme('dark')} title='Тёмная тема'>
          dark_mode
        </span>}
      {theme === 'dark' &&
        <span className='material-symbols-outlined light' onClick={() => switchTheme('light')} title='Светлая тема'>
          light_mode
        </span>}
    </>
  )
}
