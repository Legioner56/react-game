import s from './style.module.css';
import MenuHeader from "../../components/MenuHeader";

const GamePage = ({ onChangePage }) => {
    const goToBack = () => {
        onChangePage('app');
    }

    return (
        <>
            <MenuHeader bgActive={ true } />

            <div className={ s['game-page'] }>
                This GamePage!!!

                <button onClick={goToBack}>Вернуться на главную</button>
            </div>

        </>
    );
}

export default GamePage;