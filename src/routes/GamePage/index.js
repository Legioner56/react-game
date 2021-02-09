import s from './style.module.css';
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import PokemonCard from "../../components/PokemonCard";
import React from "react";
import database from "../../service/firebase";

const GamePage = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/');
    }

    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemon(snapshot.val());
        });
    }, []);

    const addPokemon = () => {
        var newPokemonKey = database.ref().child('pokemons').push().key;
        var updates = {};
        let key = Object.entries(pokemon)[0][1];
        updates['/pokemons/' + newPokemonKey] = key;
        return database.ref().update(updates);
    }

    const modPokemon = (id) => {
        setPokemon(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (item[0] === id) {
                    database.ref('pokemons/' + item[0]).set({
                        ...pokemon,
                        isActive: !pokemon.isActive,
                    }).then(
                        acc[item[0]] = {
                            ...pokemon,
                            isActive: !pokemon.isActive
                        }
                    )
                } else {
                    acc[item[0]] = pokemon;
                }

                return acc;
            }, {});
        });
    }

    return (
        <>
            This GamePage!!!


            <div className="flex">
                {
                    Object.entries(pokemon).map(([key, item]) => <PokemonCard modPokemon={modPokemon} key={key}
                                                                              pokemon={item} pokemonId={key}/>)
                }
            </div>

            <button onClick={handleClick}>Вернуться на главную</button>
            <button className={s['new-pokemon']} onClick={addPokemon}>Новый покемон</button>

        </>
    );
}

export default GamePage;