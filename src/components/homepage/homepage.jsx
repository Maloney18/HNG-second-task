import { useEffect, useState } from 'react'
import Hero from '../hero section/hero';
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { error } from '../../utils/toast'
import { populateGeneral } from '../../redux toolkit/features/db';

const Homepage = () => {
    const dispatch = useDispatch()
    const [looking, setLooking] = useState(false)


    const getInfo = async (route) => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=aeeb8b9b83f045665715eae02f466f61`) 
            
            dispatch(populateGeneral(response.data.results))
            setLooking(true)
        }
        catch (err){
            error(err)
            setLooking(false)
        }
    }

    useEffect(() => {
        getInfo()
    }, [])

    return (
        looking && 
        <section className='homepage'>
            <Hero />

            <div className="middle-section">
                {}
            </div>
        </section>
    )
}

export default Homepage