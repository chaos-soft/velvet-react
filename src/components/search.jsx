import React, { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function Search () {
  const [inputValue, setInputValue] = useState('')
  const [isSearch, setIsSearch] = useState(false)
  const input = useRef(null)

  useEffect(() => {
    if (isSearch) {
      input.current.focus()
    }
  }, [isSearch])

  return (
    <>
      <span onClick={() => setIsSearch(true)}>Поиск</span>
      {createPortal(
        <form action='https://www.google.com/search' method='get' target='_blank'>
          <input type='hidden' name='q' value={`site:57st.su ${inputValue}`} />
          <div id='search' className={`search ${isSearch ? '' : 'dn'}`}>
            <div className='x1'>
              <input
                minLength={3}
                onChange={(e) => setInputValue(e.target.value)}
                onInvalid={(e) => e.preventDefault()}
                placeholder='Минимум 3 символа'
                ref={input}
                required
                type='text'
              />
            </div>
            <button className='x7' type='submit'>Найти</button>
            <span className='x8 material-symbols-outlined' onClick={() => setIsSearch(false)}>close</span>
          </div>
        </form>,
        document.body
      )}
    </>
  )
}
