import { useState } from 'react';
import cn from 'classnames';
import ImgBackCard from '../../assets/card-back-side.jpg';

import s from './style.module.css';

const PokemonCard = ({pokemon, modPokemon}) => {
    const handleClick = () => {
        modPokemon(pokemon.id);
    }

    return (
        <div className={s.root} onClick={ handleClick }>
            <div className={cn(s.pokemonCard, { [s.active]: pokemon.active })}>
                <div className={s.cardFront}>
                    <div className={cn(s.wrap, s.front)}>
                        <div className={cn(s.pokemon, s[pokemon.type])}>
                            <div className={s.values}>
                                <div className={cn(s.count, s.top)}>{pokemon.values.top}</div>
                                <div className={cn(s.count, s.right)}>{pokemon.values.right}</div>
                                <div className={cn(s.count, s.bottom)}>{pokemon.values.bottom}</div>
                                <div className={cn(s.count, s.left)}>{pokemon.values.left}</div>
                            </div>
                            <div className={s.imgContainer}>
                                <img src={pokemon.img} alt={pokemon.name}/>
                            </div>
                            <div className={s.info}>
                                <span className={s.number}>#{pokemon.id}</span>
                                <h3 className={s.name}>{pokemon.name}</h3>
                                <small>Type: <span>{pokemon.type}</span></small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={s.cardBack}>
                    <div className={cn(s.wrap, s.back)}>
                        <img src={ImgBackCard} alt="Сard Backed"/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PokemonCard;