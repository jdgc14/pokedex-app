import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';
import InputTypePokemon from './InputTypePokemon';
import InputPokemon from './InputPokemon';
import '../App.css';

const Home = () => {
    const isDark = useSelector(state => state.user.isDarkMode)

    // Get the username and settings from the store 
    const user = useSelector(state => state.user.name)

    const avatar = useSelector(state => state.user.avatar)

    const pokemonsVisibles = useSelector(state => state.user.pokemonsVisibles)

    // Set the initial state of the pokemons
    const pokemons = useSelector(state => state.pokemons)

    // Section to paginate pokemons
    const [page, setPage] = useState(1)

    const lastIndex = page * pokemonsVisibles

    const firstIndex = lastIndex - pokemonsVisibles

    const pokemonsPaginated = pokemons.slice(firstIndex, lastIndex)

    const lastPage = Math.ceil(pokemons.length / pokemonsVisibles)

    const numbersOfPages = []

    for (let i = page - 3; i <= page + 3; i++) {
        if (i > 0 && i <= lastPage) {
            numbersOfPages.push(i)
        }
    }

    // if (page === 1) {
    //     numbersOfPages.push(5, 6, 7)
    // } else if (page === 2) {
    //     numbersOfPages.push(6, 7)
    // } else if (page === 3) {
    //     numbersOfPages.push(7)
    // }

    const up = () => {
        setPage(page + 1)
    }

    const down = () => {
        setPage(page - 1)
    }

    return (
        <div className='p-4 container'>
            <h2 className={`${isDark? 'paragraph-white':'paragraph'}`}>
                <span className={`${isDark? 'headline-dark':'headline'}`}>Welcome {user}</span>, here you can find your favorite pokemon
            </h2>
            <div className='d-flex flex-column flex-sm-row gap-2'>
                <InputPokemon />
                <InputTypePokemon />
            </div>
            <div id='pokemons-home-container' className='row'>
                {pokemonsPaginated.map(pokemon => <PokemonCard key={pokemon.name} pokemonUrl={pokemon.url} />)}
            </div>
            <div className='d-flex p-4 mt-3 justify-content-evenly'>
                {page !== 1 && (
                    <button onClick={down} className={`${isDark ? 'button-dark':'button'} p-2 rounded`}>
                        <i className="fa-solid fa-angle-left"></i>
                    </button>
                )}
                {numbersOfPages.map(number => (
                    <button key={number} onClick={() => setPage(number)} className={`${isDark ? 'button-dark':'button'} p-2 rounded`}>
                        {number}
                    </button>
                ))}
                {(page !== lastPage || lastPage !== 0) && (
                    <button onClick={up} className={`${isDark ? 'button-dark':'button'} p-2 rounded`}>
                        <i className="fa-solid fa-angle-right"></i>
                    </button>
                )}

            </div>
        </div>
    );
};

export default Home;