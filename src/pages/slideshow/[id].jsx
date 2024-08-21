import React, { useState, useEffect, useRef } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import Base from '../../components/base'
import blogService from '../../services/blog'
import { Error } from '../../components/common'

export default function Slideshow () {
  const [animate, setAnimate] = useState(0)
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  const [searchParams] = useSearchParams()
  const image = useRef(null)
  const title = 'Заставочка'
  const { id } = useParams()

  function getRandomImage () {
    const i = getRandomNumber(0, data.images_list.length - 1)
    return `/store/${data.images_list[i]}`
  }

  function getRandomNumber (min, max) {
    return parseInt(Math.random() * ((max + 1) - min) + min)
  }

  function getRotate () {
    const x = getRandomNumber(-10, 10)
    const y = getRandomNumber(-10, 10)
    return `rotateX(${x}deg) rotateY(${y}deg)`
  }

  useEffect(() => {
    blogService.getArticle(id).then((r) => setData(r.data)).catch(() => setError(true))
  }, [id])

  useEffect(() => {
    if (!data || !data.images_list.length) {
      return
    }
    image.current.style.transform = getRotate()
    let changeInterval = setInterval(() => {
      const src = getRandomImage()
      if (image.current.src === src) {
        image.current.src = getRandomImage()
      } else {
        image.current.src = src
      }
    }, 30 * 1000)
    let rotateInterval = setInterval(() => {
      image.current.style.transform = getRotate()
    }, 5 * 1000)
    setAnimate(1)
    return () => {
      clearInterval(changeInterval)
      clearInterval(rotateInterval)
      changeInterval = null
      rotateInterval = null
    }
  }, [data])

  if (error) {
    return <Base error />
  } else if (!data) {
    return <Base title='Загрузка' />
  } else if (!data.images_list.length) {
    return (
      <Base title={title}>
        <Error message='Нет картинок для показа.' />
      </Base>
    )
  }

  return (
    <Base title={title} isEmpty>
      <div className='slideshow'>
        <div className='image' animate={animate}>
          <img alt='' ref={image} src={getRandomImage()} />
        </div>
        <div className='text'>{searchParams.get('text')}</div>
      </div>
    </Base>
  )
}
