import './movieCard.css'
import favoriteIcon from '../../Assets/Favorite.png'
import imbdIcon from '../../Assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png'
import tomatoIcon from '../../Assets/PngItem_1381056 1.png'

const MovieCard = ( movie ) => {
    const { original_title, location, vote_average, vote_count, release_date, poster_path } = movie 

    return (
        <div className='movie-card'>
            <div className="movie-up-part">
                <div className="category">
                    <p className="series"></p>

                    <div className="favorite">
                        <img src={favoriteIcon} alt="favorite icon" />
                    </div>
                </div>

                <div className="bottom-part">
                    <p className="movie-location"></p>

                    <p className="movie-title"></p>

                    <div className="movie-rating">
                        <div className="left">
                            <div className="movie-imdb-icon">
                                <img src={imbdIcon} alt="imbd icon" />
                            </div>

                            <p className="rating-score"></p>
                        </div>

                        <div className="right">
                            <div className="movie-tomato-icon">
                                <img src={tomatoIcon} alt="tomato icon" />
                            </div>

                            <p className="movie-rating-percent"></p>
                        </div>
                    </div>

                    <p className="movie-genre"></p>
                </div>
            </div>
        </div>
    )
}

export default MovieCard