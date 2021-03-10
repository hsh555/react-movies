import MovieCard from "../../components/common/movie-card";
import MoviesListLayout from "../../components/layouts/common/movies-list-layout";
import AddMeta from "../../components/tools/add-meta";
import styles from "./style.module.css";

const Favorites = () => {
    const favorites = JSON.parse(localStorage.getItem("reactMovieData")) || [];

    const renderEmpty = () => {
        return <div className={styles.emptyMessage}>favorites list is empty!</div>;
    }

    return (
        <MoviesListLayout>
            <AddMeta title={"Favorites"} />
            <h2>Favorites</h2>
            <div className="moviesArea">
                {!favorites.length ? renderEmpty() : favorites.map((item, index) => (
                    <MovieCard
                        key={index}
                        id={item.id}
                        release_date={item.release_date}
                        title={item.title}
                        poster={item.poster_path}
                        vote={item.vote_average}
                    />
                ))}
            </div>
        </MoviesListLayout>
    );
}

export default Favorites;