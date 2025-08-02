export default function Album ({ images }) {
  return (
    <div className='album'>
      {images.map((image) => (
        <a href={`/store/${image}`} key={image}>
          <img src={`/store/thumbnails/${image}`} alt={image} title={image} />
        </a>
      ))}
    </div>
  )
}
