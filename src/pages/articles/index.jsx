import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

import Base from '../../components/base'
import blogService from '../../services/blog'
import Pagination from '../../components/blog/pagination'

export default function Articles () {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  const [page, setPage] = useState('1')
  const [searchParams] = useSearchParams()

  function getCover (object) {
    if (object.cover) {
      return object.cover
    } else if (object.images_list.length) {
      return `/store/thumbnails/${object.images_list.slice(-1)}`
    }
    return null
  }

  useEffect(() => {
    const p = searchParams.get('page') || '1'
    setPage(p)
    blogService.getArticles(p).then((r) => setData(r.data)).catch(() => setError(true))
  }, [searchParams])

  if (error) {
    return <Base error />
  } else if (!data) {
    return <Base title='Загрузка' />
  }

  return (
    <Base>
      <main className='articles wrapper'>
        {data.results.map((object) => (
          <article key={object.id}>
            <h2><Link to={`/articles/${object.id}`}>{object.title}</Link></h2>
            <p>{object.get_intro}</p>
            {getCover(object) &&
              <p>
                <Link to={`/articles/${object.id}`}>
                  <img src={getCover(object)} alt={object.title} />
                </Link>
              </p>}
          </article>
        ))}
        <Pagination page={page} count={data.count} />
      </main>
    </Base>
  )
}
