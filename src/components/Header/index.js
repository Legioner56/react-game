import { useHistory } from 'react-router-dom';
import s from './style.module.css';

const Header = ({ title, descr, onChangePage }) => {
    const history = useHistory();
    const handleChangeMenu = () => {
        history.push('/game');
    }

    return (
        <header className={ s.root }>
            <div className={ s.forest }></div>
            <div className={ s.silhouette }></div>
            <div className={ s.moon }></div>
            <div className={ s.container }>
                {
                    title && (<h1>{ title }</h1>)
                }
                {
                    descr && (<p>{ descr }</p>)
                }

                <button onClick={ handleChangeMenu }>Start game</button>
            </div>
        </header>
    );
}

export default Header;