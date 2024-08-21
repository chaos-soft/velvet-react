import { Link } from 'react-router-dom'

export default function Pagination ({ page, count }) {
  const range = Array.from({ length: Math.ceil(count / 10) }, (_, i) => i + 1)
  page = +page

  return (
    <nav>
      <ul>
        {range.map((p) => {
          if (p === page) {
            return <li key={p}>{p}</li>
          } else {
            return <li key={p}><Link to={`?page=${p}`}>{p}</Link></li>
          }
        })}
      </ul>
    </nav>
  )
}
