import './searchBox.css'
import searchIcon from '../../Assets/Search.png'
import axios from 'axios'
import { useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import { error } from '../utils/toast'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import MovieCard from '../movie card/movieCard'

const SearchBox = () => {
    const [ text, setText ] = useState('')
    const [ visible, setVisible ] = useState(false)
    const [ searchResult, setSearchResult ] = useState({
        data: [],
        loading: false
    })

    
    const searchFunc = async () => {
        setVisible(true)
        setSearchResult(prevState => ({...prevState, loading: true}))
        try {
            const response = await axios.get(`https://api.themoviedb.org/3//search/movie?query=${text}&include_adult=false&language=en-US&page=1';&api_key=${process.env.REACT_APP_TMDB_KEY}`)
    
            console.log(response.data.results)
            setSearchResult(prevState => ({...prevState, data: [...response.data.results]}))
            setSearchResult(prevState => ({...prevState, loading: false}))
        } 
        catch (err) {
            error(err)
            setSearchResult(prevState => ({...prevState, loading: false}))
        }
    }

    console.log(searchResult);

    return (
        <div className='search-box'>
            <input 
                type="text" 
                className='search'
                name='search'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='what do you want to watch?'
            />

            <div className="search-icon" onClick={() => searchFunc()}>
                <img src={searchIcon} alt="search icon" />
            </div>

            { 
                visible &&
                <div className="search-result">
                    <IoIosClose className='close-icon' onClick={() => 
                        {
                            setVisible(false)
                            setSearchResult({ data: [] , loading: false})
                        }}
                    />

                    { 
                        searchResult.loading ? 
                        (
                            <div className="loading-effect">
                                <AiOutlineLoading3Quarters className="spinner"/>
                            </div>
                        ) :
                        (
                            <div className="all-results">
                                {
                                    searchResult.data?.map( movie => (
                                        <MovieCard key={movie.id} movieInfo={movie} />
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            }
        </div>
    )
}

export default SearchBox