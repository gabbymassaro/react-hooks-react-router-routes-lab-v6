import { Link } from "react-router-dom"

function MovieCard({ title }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>
        <Link to={`/movie/${movies.id}`}>View Movie</Link>
      </p>
    </article>
  )
}

export default MovieCard
