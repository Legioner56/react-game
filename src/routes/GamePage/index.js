import s from './style.module.css';

const GamePage = ({ onChangePage }) => {
    const goToBack = () => {
        onChangePage('app');
    }

    return (
        <>
            This GamePage!!!

            <button onClick={goToBack}>Вернуться на главную</button>
        </>
    );
}

export default GamePage;