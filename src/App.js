import {Switch, Route, useRouteMatch, Redirect} from 'react-router-dom';
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";
import HomePage from "./routes/HomePage";
import ContactPage from "./routes/ContactPage";
import AboutPage from "./routes/AboutPage";
import GamePage from "./routes/GamePage";

import cn from 'classnames';
import s from './style.module.css';
import NotFound from "./routes/NotFound";

const App = () => {
    const match = useRouteMatch('/');

    return (
        <Switch>
            <Route path='/404' render={NotFound}/>
            <Route>
                <>
                    <MenuHeader bgActive={!match.isExact}/>
                    <div className={cn(s.wrap, {
                        [s.isHomePage]: match.isExact
                    })}>
                        <Switch>
                            <Route path='/' exact component={HomePage}/>
                            <Route path='/contact' component={ContactPage}/>
                            <Route path='/game' component={GamePage}/>
                            <Route path='/about' component={AboutPage}/>
                            <Route render={() => (
                                <Redirect to='/404'/>
                            )}/>
                        </Switch>

                    </div>
                    <Footer/>
                </>
            </Route>
        </Switch>
    );

}

export default App;