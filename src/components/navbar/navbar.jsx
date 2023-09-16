import logoIcon from '../../Assets/tv.png'
import movieProjectorIcon from '../../Assets/Movie Projector.png'
import logoutIcon from '../../Assets/Logout.png'
import homeIcon from '../../Assets/Home.png'
import calendarIcon from '../../Assets/Calendar.png'
import tvIcon from '../../Assets/TV Show.png'


const NavBar = () => {
  return (
    <div className="nav-bar">
        <div className="logo-cont">
            <div className="movie-icon">
                <img src={logoIcon} alt="" />
            </div>

            <p className="movie-box">MovieBox</p>
        </div>


        <div className="nav-items-cont">
            <div className="nav-item">
                <div className="nav-icon-cont">
                    <img src={homeIcon} alt="" />
                </div>

                <p className="route">Home</p>
            </div>

            <div className="nav-item">
                <div className="nav-icon-cont">
                    <img src={movieProjectorIcon} alt="" />
                </div>

                <p className="route current-route">Movies</p>
            </div>

            <div className="nav-item">
                <div className="nav-icon-cont">
                    <img src={tvIcon} alt="" />
                </div>

                <p className="route">TV Series</p>
            </div>

            <div className="nav-item">
                <div className="nav-icon-cont">
                    <img src={calendarIcon} alt="" />
                </div>

                <p className="route">Upcoming</p>
            </div>
        </div>

        <div className="movie-ad">
            <p className="bold">Play movie quizes and earn free tickets</p>
            <p className="tiny">50k people are playing now</p>

            <div className="play-now-btn">
                <button>Start playing</button>
            </div>
        </div>

        <div className="logout">
            <div className="nav-item">
                <div className="nav-icon-cont">
                    <img src={logoutIcon} alt="" />
                </div>

                <p className="route">Logout</p>
            </div>
        </div>
    </div>
  )
}

export default NavBar