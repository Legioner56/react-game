import { useState } from 'react';
import s from './style.module.css';

const PokemonCard = ({pokemon, imgBack}) => {
    const [isActive, setActive] = useState(false);

    const handleClick = () => {
        setActive(!isActive);
    }

    return (
        <div className={s.root} onClick={ handleClick }>
            <div className={`${s.pokemonCard} ${(isActive ? s.active : '')}`}>
                <div className={s.cardFront}>
                    <div className={`${s.wrap} ${s.front}`}>
                        <div className={`${s.pokemon} ${s[pokemon.type]}`}>
                            <div className={s.values}>
                                <div className={`${s.count} ${s.top}`}>{pokemon.values.top}</div>
                                <div className={`${s.count} ${s.right}`}>{pokemon.values.right}</div>
                                <div className={`${s.count} ${s.bottom}`}>{pokemon.values.bottom}</div>
                                <div className={`${s.count} ${s.left}`}>{pokemon.values.left}</div>
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
                    <div className={`${s.wrap} ${s.back}`}>
                        <img src={imgBack} alt="Сard Backed"/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PokemonCard;