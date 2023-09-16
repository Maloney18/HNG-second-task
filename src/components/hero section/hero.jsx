import { useState } from "react";
import { useSelector } from 'react-redux';
import menuIcon from '../../Assets/Menu.png';
import imdbIcon from '../../Assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png'
import tomatoIcon from '../../Assets/PngItem_1381056 1.png'
import playIcon from '../../Assets/Play (1).png'
import logoIcon from '../../Assets/tv.png'
import './hero.css'
import SearchBox from "../search box/searchBox";
import { IoIosClose } from 'react-icons/io'

const Hero = () => {
    const { popular } = useSelector( store => store.db)
    const movieInfo = popular.data.slice(0,5)
    const [ isOpen, setIsOpen ] = useState(false)
    const [ current, setCurrent ] = useState({...movieInfo[0]})
    console.log(current);
    // console.log(bgImages.length);

    const activeChecker = (no) => {
        if (movieInfo[no]?.id === current?.id) return true
    } 

    const infoChanger = (no) => {
        setCurrent({...movieInfo[no]})
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const backImg = {
        background: `linear-gradient(to top, #00000080, #00000080), url(https://image.tmdb.org/t/p/w500${current?.poster_path}) center / cover`
    }

    return(
        <div className="hero-section" style={backImg}>
            <div className="up-part">
                <div className="logo-cont"> 
                    <div className="movie-icon">
                        <img src={logoIcon} alt="movie box icon" />
                    </div>
                    <p className="movie-box">MovieBox</p>
                </div>
                
                <div className={`search-cont ${isOpen ? 'open' : 'close'}`}>
                    <SearchBox />
                </div>

                <div className="sign-in">
                    <p className="sign">Sign in</p>
                    <div className="menu-icon">
                        {   isOpen ?
                            <IoIosClose className="controller" onClick={() => toggleMenu()}/>:
                            <div className="controller" onClick={() => toggleMenu()}></div>
                        }
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
                                {Math.floor(current?.popularity)}/{current?.vote_count} 
                            </p>
                        </div>

                        <div className="rating-percentage">
                            <div className="tomato-icon">
                                <img src={tomatoIcon} alt="tomato icon" />
                            </div>

                            <p className="percent">{Math.floor((current?.vote_average /10) * 100)}%</p>
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

        </div>
    )
}

export default Hero;