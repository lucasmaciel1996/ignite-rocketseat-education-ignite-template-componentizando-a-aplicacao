import { MovieCard } from '../components/MovieCard';

interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentPros {
  titleGender: string
  movies: MovieProps[]
}

export function Content({titleGender,movies}:ContentPros) {
 return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {titleGender}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
 )
}