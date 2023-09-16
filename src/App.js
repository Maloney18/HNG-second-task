import './App.css';
import Homepage from './components/homepage/homepage';
import MovieDetails from './components/movie details page/movieDetails';
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom';
import { useGenres, useFetch } from './components/hook/requests';
import { populateGenres, populateUpcoming, populateTopRated, populatePopular  } from './redux toolkit/features/db';
// import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch()
  const popular = useFetch('popular')
  const topRated = useFetch('top_rated')
  const upcoming = useFetch('upcoming')
  const genres = useGenres()

  dispatch(populateGenres(genres))
  dispatch(populateUpcoming(upcoming))
  dispatch(populateTopRated(topRated))
  dispatch(populatePopular(popular))

  // https://image.tmdb.org/t/p/w500
  // movie/550?api_key=aeeb8b9b83f045665715eae02f466f61
  // font family DM sans poppins
  // #666666
  // #E8E8E8
  // #BE123C
  // main page font-family: DM Sans;
  // font-size: 48px;
  // font-weight: 700;
  // line-height: 56px;
  // letter-spacing: 0em;
  // text-align: left;
  // featured app font-size: 36px;
  // card font-size: 18px; color: #111827; font-weight: 700;
  // card location font-size: 12px; color: #9CA3AF; font-weight: 700;
  // card tomato percent color:#111827; font-weight: 400;

  //card container
  // width: Hug (250px)
  // height: Hug (490px)
  // border-radius: 6px
  // gap: 12px


  // card image
  // width: 250px
  // height: 370px


  // TV series
  // width: Hug (74px)
  // height: Hug (22px)
  // top: 3.605255126953125px
  // padding: 3px 8px 3px 8px
  // border-radius: 12px
  // gap: 10px

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />

        <Route path='/movie-details' element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
