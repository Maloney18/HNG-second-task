import MovieCard from "../movie card/movieCard"
import './middle.css'
import seeMore from '../../Assets/Chevron right.png'
import { useSelector } from 'react-redux'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useEffect } from "react"

const Middle = () => {
    const { topRated, upcoming, favorites } = useSelector(store => store.db)
    // console.log(data[0])
    // console.log(upcoming)

    useEffect( () => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    return (
        <div  className="homepage-middle-part">
            <div className="gen-middle-movies-cont">
                <div className="middle-info-nav">
                    <p className="highlight">Top 10</p>
                    <div className="see-more-cont">
                        <p className="see-more">See more</p>

                        <div className="see-more-icon">
                            <img src={seeMore} alt="see more icon" />
                        </div>
                    </div>
                </div>

                {
                    topRated.loading ?
                    (
                        <div className="loading-effect">
                            <AiOutlineLoading3Quarters className="spinner"/>
                        </div>
                    ) : 
                    (
                        <div className="middle-movies-cont">
                            
                            { 
                                topRated.data.slice(0,10).map( (movie, idx) => (
                                    <MovieCard key={movie.id} movieInfo={{movie, idx}}/>
                                ))
                            }
                            
                        </div>
                    )
                }
            </div>

            <div className="gen-middle-movies-cont">
                <div className="middle-info-nav">
                    <p className="highlight">Upcoming</p>
                    <div className="see-more-cont">
                        <p className="see-more">See more</p>

                        <div className="see-more-icon">
                            <img src={seeMore} alt="see more icon" />
                        </div>
                    </div>
                </div>

                 {
                    upcoming.loading ?
                    (
                        <div className="loading-effect">
                            <AiOutlineLoading3Quarters className="spinner"/>
                        </div>
                    ) : 
                    (
                        <div className="middle-movies-cont">
                            
                            { 
                                upcoming.data.slice(0,8).map( (movie) => (
                                    <MovieCard key={movie.id} movieInfo={movie}/>
                                ))
                            }
                            
                        </div>
                    )
                }
            </div>

            <div className="gen-middle-movies-cont">
                <div className="middle-info-nav">
                    <p className="highlight">Favorites</p>
                    <div className="see-more-cont">
                        <p className="see-more">See more</p>

                        <div className="see-more-icon">
                            <img src={seeMore} alt="see more icon" />
                        </div>
                    </div>
                </div>

                {
                    favorites.length === 0 ?
                    (
                        <div className="loading-effect">
                            <h3 className="empty-word">You are yet to add your favorite movie(s).</h3>
                        </div>
                    ) : 
                    (
                        <div className="middle-movies-cont">
                            
                            { 
                                favorites.map( (movie) => (
                                    <MovieCard key={movie.id} movieInfo={movie}/>
                                ))
                            }
                            
                        </div>
                    )
                }
            </div>
        </div>

    )
}

export default Middle