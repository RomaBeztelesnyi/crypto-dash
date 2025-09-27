import {Link} from 'react-router'

const Header = () => {
 return (
    <nav className='top-nav'>
        <Link to='/'>General</Link>
        <Link to='/about'>About project</Link>
        {/* <Link to='/coin'> Monet detail </Link> */}
    </nav>
 );
};


export default Header