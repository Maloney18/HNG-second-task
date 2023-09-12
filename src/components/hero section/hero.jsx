import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import menuIcon from '../../Assets/Menu.png';
import imdbIcon from '../../Assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png'
import tomatoIcon from '../../Assets/PngItem_1381056 1.png'
import playIcon from '../../Assets/Play (1).png'
import logoIcon from '../../Assets/tv.png'
import './hero.css'

const Hero = () => {
    const { allData } = useSelector( store => store.db)
    const movieInfo = allData.slice(0,5)
    const [ current, setCurrent ] = useState({...allData[0]})
    console.log(current);
    // console.log(bgImages.length);

    const activeChecker = (no) => {
        if (movieInfo[no]?.id === current?.id) return true
    } 

    const infoChanger = (no) => {
        setCurrent({...movieInfo[no]})
    }

    const backImg = {
        background: `linear-gradient(to top, #00000080, #00000080), url(https://image.tmdb.org/t/p/w500${current?.poster_path}) center / cover`
    }

    return(
        <section className="hero-section" style={backImg}>
            <div className="up-part">
                <div className="logo-cont"> 
                    <img src={logoIcon} alt="movie box icon" />
                    <p className="movie-box">MovieBox</p>
                </div>

                <div className="search-bar"></div>

                <div className="sign-in">
                    <p className="sign">Sign in</p>
                    <div className="menu-icon">
                        <img src={menuIcon} alt="menu icon" />
                    </div>
                </div>
            </div>

            <div className="middle-part">

                <div className="hero-info">
                    <h1 className="title">
                        {current?.original_title}
                    </h1>

                    <div className="rating">
                        <div className="rating-left">
                            <div className="imdb-icon">
                                <img src={imdbIcon} alt="IMDb" />
                            </div>

                            <p className="rating-score">
                                {current?.vote_average}/{current?.vote_count} 
                            </p>
                        </div>

                        <div className="rating-percentage">
                            <div className="tomato-icon">
                                <img src={tomatoIcon} alt="tomato icon" />
                            </div>

                            <p className="percent">{Math.floor(current?.popularity)}%</p>
                        </div>
                    </div>

                    <p className="description">
                        {current?.overview}
                    </p>

                    <div className="watch-trailer-btn">
                        <button className="click-to-watch">
                            <div className="play-icon">
                                <img src={playIcon} alt="play icon" />
                            </div>
                            WATCH TRAILER
                        </button>
                    </div>
                </div>

                <div className="current-movie-display">
                    <span className={`back-img-no ${activeChecker(0) && 'active'}`} onClick={() => infoChanger(0)}>1</span>
                    <span className={`back-img-no ${activeChecker(1) && 'active'}`} onClick={() => infoChanger(1)}>2</span>
                    <span className={`back-img-no ${activeChecker(2) && 'active'}`} onClick={() => infoChanger(2)}>3</span>
                    <span className={`back-img-no ${activeChecker(3) && 'active'}`} onClick={() => infoChanger(3)}>4</span>
                    <span className={`back-img-no ${activeChecker(4) && 'active'}`} onClick={() => infoChanger(4)}>5</span>
                </div>
            </div>

        </section>
    )
}

export default Hero;