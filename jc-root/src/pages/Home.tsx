import './Home.scss';
import portrait from '../images/homepic.png'
import NavBar from '../components/NavBar/NavBar'

const Home = () => {
    return (
        <div className='relative'>
            <div className='w-full block'>
                <NavBar />
            </div>
            <div className='centrepiece'>
                <img src={portrait} />
            </div>
        </div>
    )
}

export default Home



