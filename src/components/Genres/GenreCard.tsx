import styles from './Genre.module.css';
import imageNotFound from '../../assets/NoImageFound.jpg';
import { Link } from 'react-router-dom';
import { IGenreCardProps } from './genre.model';
import { API_ASSETS_URL } from '../../configs/config';

const genreImagePath: string = API_ASSETS_URL + 'genres/';

function GenreCard(genreCardProps: IGenreCardProps) {
    return (
        <Link 
            to={`/genres/${genreCardProps.genre._id}`}
            className={styles.genreLink}
        >
            <article className={styles.genreCard} key={genreCardProps.genre._id}>
                <figure>
                    <img className={styles.genreImage} 
                        src={(genreCardProps.genre.image !== undefined) ? (genreImagePath + genreCardProps.genre.image) : imageNotFound} 
                        alt={genreCardProps.genre.name} />
                </figure>
                <section>
                    <p className={styles.genreName}>
                        {genreCardProps.genre.name}
                    </p>
                </section>
            </article>
        </Link>
    )
}

export default GenreCard