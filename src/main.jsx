/* global articleType */
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import Album from './components/blog/album'
import Rutube from './components/blog/rutube'
import Stream from './components/blog/stream'
import Theme from './components/theme'

if (articleType === 4) {
  const images = JSON.parse(document.getElementById('data').textContent)
  createRoot(document.getElementById('album')).render(
    <Album images={images}>
      <StrictMode />
    </Album>
  )
} else if (articleType === 5) {
  const code = JSON.parse(document.getElementById('data').textContent)
  createRoot(document.getElementById('stream')).render(
    <Stream code={code}>
      <StrictMode />
    </Stream>
  )
} else if (articleType === 6) {
  const code = JSON.parse(document.getElementById('data').textContent)
  createRoot(document.getElementById('rutube')).render(
    <Rutube code={code}>
      <StrictMode />
    </Rutube>
  )
}
createRoot(document.getElementById('theme')).render(
  <Theme>
    <StrictMode />
  </Theme>
)
