import axios from "axios"
import {error} from '../utils/toast'
import { useEffect, useState } from "react"



export const useFetch = (endpoint) => {
    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(false)


    const goToEndPoint = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=1&api_key=${process.env.REACT_APP_TMDB_KEY}`)
    
            setData(response.data.results)
            setLoading(false)
        } 
        catch (err) {
            error(err)
            setLoading(false)
        }
    }

    useEffect( () => {
        goToEndPoint()
    }, [])

    return { data, loading }
}

export const useGenres = () => {
    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(false)


    const goToEndPoint = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${process.env.REACT_APP_TMDB_KEY}`)
    
            setData(response.data.genres)
            setLoading(false)
        } 
        catch (err) {
            error(err)
            setLoading(false)
        }
    }

    useEffect( () => {
        goToEndPoint()
    }, [])

    return { data, loading }
}

// export const useSearch = (param) => {
//     let data = []
//     let loading = false


//     const goToEndPoint = async () => {
//         loading = true
//         try {
//             const response = await axios.get(`https://api.themoviedb.org/3//search/movie?query=${param}&include_adult=false&language=en-US&page=1';&api_key=${process.env.REACT_APP_TMDB_KEY}`)
    
            
//             data.push(response.data.results)
//             loading = false
//         } 
//         catch (err) {
//             error(err)
//             loading = false
//         }
//     }

//     goToEndPoint()

//     return { data, loading }
// }