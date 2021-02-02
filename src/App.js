import { useState } from 'react';
import HomePage from "./routes/HomePage";
import GamePage from "./routes/GamePage";

const App = () => {
    const [page, setPage] = useState('app');

    const handleChangePage = (pageInfo) => {
        setPage(pageInfo);
    }

    switch (page) {
        case 'app':
            return <HomePage />;
        case 'game':
            return <GamePage onChangePage={ handleChangePage } />;
        default:
            // return <HomePage />;
            return <HomePage/>;
    }
}

export default App;