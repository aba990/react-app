import logo from '../assets/images/paragon.png';
import Navigator from './Navigator';

const stil = {
    title : {
    fontSize:'1.5em'
}
}
const AppHeader = () => {
    return (<header>
        <div className='left'>
        <img src={logo} alt='logo' />
        </div>
        <div className='left1' style={stil.title}>
        <h2>React-App</h2></div>
        <div className='right'>
         <Navigator />
        </div>
       </header>);
}

export default AppHeader;