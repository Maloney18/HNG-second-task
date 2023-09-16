import './footer.css'
import facebook from '../../Assets/fa-brands_facebook-square.png'
import instagram from '../../Assets/Vector.png'
import twitter from '../../Assets/Vector (1).png'
import youtube from '../../Assets/Vector (2).png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="icons-cont">
                <div className="brand-icon">
                    <img src={facebook} alt="facebook icon" />
                </div>

                <div className="brand-icon">
                    <img src={instagram} alt="instagram icon" />
                </div>

                <div className="brand-icon">
                    <img src={twitter} alt="twitter icon" />
                </div>

                <div className="brand-icon">
                    <img src={youtube} alt="youtube icon" />
                </div>
            </div>

            <div className="terms-cont">
                <div className="terms"> Conditions of Use</div>

                <div className="terms">Privacy & Policy</div>

                <div className="terms">Press Room</div>
            </div>

            <div className="copyright">
                &copy; 2021 MovieBox By Adriana Eka Prayudha
            </div>
        </div>
    )
}

export default Footer