import './Home.scss';
import portrait from '../images/homepic.png'

const Home = () => {
    return (
        <div>
            <div className='centrepiece'>
                <img src={portrait} />
            </div>
        </div>
    )
}

export default Home



