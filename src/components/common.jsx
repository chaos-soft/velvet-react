function Error ({ message }) {
  return (
    <main className='error wrapper'>
      <h1>Ошибочка</h1>
      <p>{message}</p>
      <p><img src='/store/images/20080915-182019.png' alt='' /></p>
    </main>
  )
}

function toggleFullscreen (element) {
  if (!document.fullscreenElement) {
    element.requestFullscreen()
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
}

export { toggleFullscreen, Error }
