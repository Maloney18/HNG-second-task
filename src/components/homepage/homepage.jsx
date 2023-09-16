import Hero from '../hero section/hero';
import Middle from '../middle/middle';
import Footer from '../footer/footer';
import { useSelector } from 'react-redux';
import './homepage.css'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Homepage = () => {
    const { popular } = useSelector( store => store.db)

    return (
        popular.loading  ?
        <div className="loading-effect">
            <AiOutlineLoading3Quarters className="spinner"/>
        </div>
        :
        <section className='homepage'>
            <Hero />
            <Middle />
            <Footer />
        </section>
    )
}

export default Homepage