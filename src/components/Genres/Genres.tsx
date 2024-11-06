import { useLoaderData } from 'react-router-dom';
import GenreCard from './GenreCard';
import styles from './Genre.module.css';
import { IGenre } from './genre.model';

const Genres = () => {

    // const { genreId } = useParams(); // READ URL PARAMS
    // TODO:
    // By using this genreId GenreMovie component
    // console.log(genreId)
    const genres = useLoaderData() as IGenre[];

    return (
        <>
        <section style={{fontWeight: 600, textAlign: 'center', margin: '20px 0'}}> GENRES </section>
        <div className={styles.genres} key="">
            {
            (genres !== undefined && genres.length > 0) ?
                genres.map((genre) => <GenreCard genre={genre} key={genre._id} />) :
                <section style={{fontWeight: 600, margin: '20px 0'}}>Movies not found in this genre</section>
            }
        </div>
        </>
    )
}

export default Genres