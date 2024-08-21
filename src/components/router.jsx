import { createBrowserRouter } from 'react-router-dom'

import Article from '../pages/articles/[id]'
import Articles from '../pages/articles'
import Slideshow from '../pages/slideshow/[id]'

const router = createBrowserRouter([
  { path: '/', element: <Articles /> },
  { path: '/articles/:id', element: <Article /> },
  { path: '/slideshow/:id', element: <Slideshow /> }
])

export default router
