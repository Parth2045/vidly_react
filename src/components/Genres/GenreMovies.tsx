import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IGenreParams, IGenreMoviesParams, IGenreMovies } from './genre.model';
import { getGenreMovies } from '../../services/Genres.service';
import imageNotFound from '../../assets/NoImageFound.jpg';
import styles from './Genre.module.css';
import { API_ASSETS_URL } from '../../configs/config';

const movieImagePath: string = API_ASSETS_URL + 'movies/';

function GenreMovies() {
  const { genreId } = useParams<IGenreParams>(); // READ URL PARAMS
  const [genreMovies, setGenreMovies] = useState<IGenreMoviesParams>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGenreMovies = async () => {
      try {
        const data = await getGenreMovies(genreId ?? "");
        setGenreMovies(data);
        setLoading(false);
      } catch(err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadGenreMovies(); // Call the API when the component mounts
  }, [genreId])

  if(loading) return <p>Loading..</p>;
  if(error) return <p>Error: {error}</p>;

  return (
    <div>
      <section style={{fontWeight: 600, textAlign: 'center', margin: '20px 0'}}> GENRE: {genreMovies?.name}</section>
        <div className={styles.genreMovies}>
        {
        (genreMovies?.movies !== undefined && genreMovies?.movies.length > 0) ?
          genreMovies?.movies.map((movie: IGenreMovies) => (
            <article className={styles.genreMoviesCard} key={movie._id}>
              <figure>
                <img className={styles.genreMoviesImage} src={(movie.image !== undefined) ? (movieImagePath + movie.image) : imageNotFound} alt={movie.title} />
              </figure>
              <section>
                  <h3 className={styles.title}>
                    {movie.title}
                  </h3>
                  <button className={styles.rentButton}>
                    {movie.dailyRentalRate}
                  </button>
              </section>
            </article>
            )) :
          <section style={{fontWeight: 600, margin: '20px 0'}}>Movies not found in this genre</section>
        }
        </div>
    </div>
  )
}

export default GenreMovies