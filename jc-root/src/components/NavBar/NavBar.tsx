import './NavBar.scss';
import { ReactComponent as MenuIcon } from '../../images/menu.svg';

const NavBar = () => {
    return (
        <div className='navBar grid grid-cols-2'>
            {/* <MenuIcon className='menuIcon' /> */}
            <div>
                jane yao | @janes.camera
            </div>
            <div className='text-right'>
                menu
            </div>
        </div>
    )
}

export default NavBar
