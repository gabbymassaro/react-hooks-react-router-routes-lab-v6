import { Link } from "react-router-dom"

function MovieCard({ title, movie }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>
        <Link to={`/movie/${movie.id}`}>View Info</Link>
      </p>
    </article>
  )
}

export default MovieCard
