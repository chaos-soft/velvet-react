/* global localStorage */
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Link, ScrollRestoration } from 'react-router-dom'

import { Error } from './common'

export default function Base ({ title, description, keywords, error, isEmpty, ...props }) {
  const [theme, setTheme] = useState('light')

  function getHead () {
    if (import.meta.env.PROD) {
      return (
        <Helmet>
          <script src='/store/js/metrika.js' />
        </Helmet>
      )
    } else {
      return (
        <Helmet>
          <link rel='stylesheet' href='/store/css/reset.css' />
          <link rel='stylesheet' href='/store/css/album.css' />
          <link rel='stylesheet' href='/store/css/articles.css' />
          <link rel='stylesheet' href='/store/css/rutube.css' />
          <link rel='stylesheet' href='/store/css/slideshow.css' />
          <link rel='stylesheet' href='/store/css/stream.css' />
          <link rel='stylesheet' href='/store/css/style.css' />
        </Helmet>
      )
    }
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
      <ScrollRestoration />
      <Helmet>
        <title>{title || '57 Street — статьи, стримы, Linux, лас плагас'}</title>
        {description && <meta name='description' content={description} />}
        {keywords && <meta name='keywords' content={keywords} />}
      </Helmet>
      {getHead()}
      {!isEmpty &&
        <>
          <header className='header wrapper'>
            <h1><Link to='/'><span>5</span><span>7</span> Street</Link></h1>
            <nav>
              <Link to='/articles/57'>Мой маленький стрим</Link>
              {theme === 'light' &&
                <span className='material-symbols-outlined dark' onClick={() => switchTheme('dark')} title='Тёмная тема'>
                  dark_mode
                </span>}
              {theme === 'dark' &&
                <span className='material-symbols-outlined light' onClick={() => switchTheme('light')} title='Светлая тема'>
                  light_mode
                </span>}
            </nav>
          </header>
          <div className='line mb40' />
        </>}
      {props.children}
      {error && <Error message='Не получилось загрузить страницу. Может, позже?' />}
      {!isEmpty &&
        <>
          <div className='line mb20' />
          <footer>
            <p>© 2008–2024 57st.net, 2024–2057 <Link to='/'>57st.su</Link></p>
            <p><Link to='/articles/79'>О сайте</Link></p>
          </footer>
        </>}
    </>
  )
}
