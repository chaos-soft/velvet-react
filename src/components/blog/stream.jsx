import React, { useState, useEffect, useRef } from 'react'

import { toggleFullscreen } from '../common'

export default function Stream ({ code }) {
  const [chat, setChat] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)
  const [gc, setGc] = useState(false)
  const [gp, setGp] = useState(false)
  const [mc, setMc] = useState(false)
  const [sc, setSc] = useState(false)
  const [tc, setTc] = useState(false)
  const [tp, setTp] = useState(false)
  const [vp, setVp] = useState(false)
  const [yc, setYc] = useState(false)
  const [yp, setYp] = useState(false)
  const stream = useRef(null)
  const [gcUrl, setGcUrl] = useState('')
  const [gpUrl, setGpUrl] = useState('')
  const [mcUrl, setMcUrl] = useState('')
  const [scUrl, setScUrl] = useState('')
  const [tcUrl, setTcUrl] = useState('')
  const [tpUrl, setTpUrl] = useState('')
  const [vpUrl, setVpUrl] = useState('')
  const [ycUrl, setYcUrl] = useState('')
  const [ypUrl, setYpUrl] = useState('')

  function fullscreenchange () {
    if (document.fullscreenElement) {
      setChat(true)
      setFullscreen(true)
    } else {
      setChat(false)
      setFullscreen(false)
    }
  }

  function keyup (e) {
    if (e.code === 'KeyF') {
      onClickFullscreen()
    }
  }

  function onClickFullscreen () {
    toggleFullscreen(stream.current)
  }

  useEffect(() => {
    setChat(false)
    setFullscreen(false)
    setGc(false)
    setGp(false)
    setMc(false)
    setSc(false)
    setTc(false)
    setTp(false)
    setYc(false)
    setYp(false)
    setGcUrl(`https://goodgame.ru/chat/${code.g}`)
    setGpUrl(`https://goodgame.ru/player?${code.g}`)
    setMcUrl(code.m)
    setScUrl(`https://sc2tv.ru/${code.s}/chat`)
    setTcUrl(`https://www.twitch.tv/embed/${code.t}/chat?parent=${import.meta.env.VITE_HOST}`)
    setTpUrl(`https://player.twitch.tv/?channel=${code.t}&parent=${import.meta.env.VITE_HOST}`)
    setVpUrl(`https://vkplay.live/app/embed/${code.v}`)
    setYcUrl(`https://www.youtube.com/live_chat?v=${code.y}&embed_domain=${import.meta.env.VITE_HOST}`)
    setYpUrl(`https://www.youtube-nocookie.com/embed/${code.y}`)
  }, [code])

  useEffect(() => {
    document.addEventListener('fullscreenchange', fullscreenchange)
    document.addEventListener('keyup', keyup)
    return () => {
      document.removeEventListener('fullscreenchange', fullscreenchange)
      document.removeEventListener('keyup', keyup)
    }
  }, [])

  return (
    <div className='stream' style={code.i ? { backgroundImage: `url(${code.i})` } : {}} ref={stream}>
      <div className={`panel ${chat ? 'hidden' : ''}`}>
        <div className='chats'>
          {gc && <iframe src={gcUrl} title='gc' />}
          {mc && <iframe src={mcUrl} title='mc' />}
          {yc && <iframe src={ycUrl} title='yc' />}
          {sc && <iframe src={scUrl} title='sc' />}
          {tc && <iframe src={tcUrl} title='tc' />}
        </div>
        <div className='controls'>
          <span>плееры:</span>
          {code.g && <a href={gpUrl} className={gp ? 'active' : ''} onClick={(e) => { setGp(!gp); e.preventDefault() }}>gg</a>}
          {code.t && <a href={tpUrl} className={tp ? 'active' : ''} onClick={(e) => { setTp(!tp); e.preventDefault() }}>tw</a>}
          {code.v && <a href={vpUrl} className={vp ? 'active' : ''} onClick={(e) => { setVp(!vp); e.preventDefault() }}>vk</a>}
          {code.y && <a href={ypUrl} className={yp ? 'active' : ''} onClick={(e) => { setYp(!yp); e.preventDefault() }}>yt</a>}

          <span>чаты:</span>
          {code.g && <a href={gcUrl} className={gc ? 'active' : ''} onClick={(e) => { setGc(!gc); e.preventDefault() }}>gg</a>}
          {code.m && <a href={mcUrl} className={mc ? 'active' : ''} onClick={(e) => { setMc(!mc); e.preventDefault() }}>miranda</a>}
          {code.s && <a href={scUrl} className={sc ? 'active' : ''} onClick={(e) => { setSc(!sc); e.preventDefault() }}>sc2</a>}
          {code.t && <a href={tcUrl} className={tc ? 'active' : ''} onClick={(e) => { setTc(!tc); e.preventDefault() }}>tw</a>}
          {code.y && <a href={ycUrl} className={yc ? 'active' : ''} onClick={(e) => { setYc(!yc); e.preventDefault() }}>yt</a>}

          <span
            className={`material-symbols-outlined ${chat ? 'active' : ''}`}
            onClick={() => setChat(!chat)}
            title='Показать, скрыть панель'
          >
            chat
          </span>
          <span
            className={`material-symbols-outlined ${fullscreen ? 'dn' : ''}`}
            onClick={onClickFullscreen}
            title='Полноэкранный режим (f)'
          >
            open_in_full
          </span>
          <span
            className={`material-symbols-outlined ${fullscreen ? 'active' : 'dn'}`}
            onClick={onClickFullscreen}
            title='Выйти из полноэкранного режима (f)'
          >
            close_fullscreen
          </span>
        </div>
      </div>
      {gp && <iframe src={gpUrl} title='gp' />}
      {tp && <iframe src={tpUrl} title='tp' />}
      {vp && <iframe src={vpUrl} title='vp' />}
      {yp && <iframe src={ypUrl} title='yp' />}
    </div>
  )
}
