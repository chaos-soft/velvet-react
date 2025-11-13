export default function Rutube ({ code }) {
  return (
    <div className='rutube'>
      {code.map((id, i) => (
        <iframe
          allow='clipboard-write; autoplay'
          allowFullScreen
          key={i}
          src={`https://rutube.ru/play/embed/${id}`}
        />
      ))}
    </div>
  )
}
