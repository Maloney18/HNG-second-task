import './movieCard.css'
import { useSelector, useDispatch } from 'react-redux'
import favoriteIcon from '../../Assets/Favorite.png'
import imbdIcon from '../../Assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png'
import tomatoIcon from '../../Assets/PngItem_1381056 1.png'
import { useState, useEffect } from 'react'
import { populateFavorite } from '../../redux toolkit/features/db'

const MovieCard = ( { movieInfo } ) => {
    const dispatch = useDispatch()
    const { genres } = useSelector( store => store.db)
    const { original_title, vote_average, vote_count, release_date, poster_path, popularity, genre_ids } = movieInfo.movie !== undefined ? movieInfo.movie : movieInfo

    // console.log(  movieInfo.idx !== undefined ? movieInfo.idx : movieInfo )

    const [ movieGen, setMovieGen ] = useState([])
    // console.log(topRated)
    // console.log(genre_ids)

    const addToFavorite = () => {
        movieInfo.movie !== undefined ? dispatch(populateFavorite(movieInfo.movie)) :  dispatch(populateFavorite(movieInfo))
    }
    
    const findGenre = () => {
        let arr = []
        genre_ids?.map(id => {
            genres.data.map(gen => 
                gen.id === id && arr.push(gen.name)
            ) 

            return arr
        })

        setMovieGen(arr)
    }
    // setMovieGen([...movieGen, gen.name])
    useEffect(() => {
        findGenre()
    }, [])

    // console.log(original_title, movieGen)

    

    const bgImage = {
        background: `linear-gradient(to top, #00000080, #00000080), url(https://image.tmdb.org/t/p/w500${poster_path}) center / cover`
    }



    return (
        <div className='movie-card' data-testId='movie-card'>
            <div className="movie-up-part" style={bgImage} data-testId='movie-poster'>
                <div className="category" >
                    <p className="series"></p>

                    <div className="favorite" >
                        <img src={favoriteIcon} alt="favorite icon" onClick={() => addToFavorite()}/>
                    </div>
                </div>
            </div>

            <div className="bottom-part">
                <p className="movie-location" data-testId='movie-release-date'>{new Date(release_date).toDateString()}</p>

                <p className="movie-title" data-testId='movie-title'>{`${movieInfo.idx !== undefined ? movieInfo.idx + 1 : ''}   ${original_title}`}</p>

                <div className="movie-rating">
                    <div className="left">
                        <div className="imdb-icon">
                            <img src={imbdIcon} alt="imbd icon" />
                        </div>

                        <p className="rating-score">{Math.floor(popularity)}/{vote_count}</p>
                    </div>

                    <div className="right">
                        <div className="tomato-icon">
                            <img src={tomatoIcon} alt="tomato icon" />
                        </div>

                        <p className="movie-rating-percent">{Math.floor((vote_average / 10) * 100)}%</p>
                    </div>
                </div>

                <p className="movie-genre">{movieGen.map(itm => `${itm}  `)}</p>
            </div>
        </div>
    )
}

export default MovieCard