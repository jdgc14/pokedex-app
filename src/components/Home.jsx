import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';
import Configs from './Configs';
import InputTypePokemon from './InputTypePokemon';
import InputPokemon from './InputPokemon';
import '../App.css';

const Home = () => {

    // Get the username and settings from the store 
    const user = useSelector(state => state.user.name)

    const avatar = useSelector(state => state.user.avatar)

    const pokemonsVisibles = useSelector(state => state.user.pokemonsVisibles)

    // Set the initial state of the pokemons
    const [pokemons, setPokemons] = useState([])

    // Section to paginate pokemons
    const [page, setPage] = useState(1)

    const lastIndex = page * pokemonsVisibles

    const firstIndex = lastIndex - pokemonsVisibles

    const pokemonsPaginated = pokemons.slice(firstIndex, lastIndex)

    const lastPage = Math.ceil(pokemons.length / pokemonsVisibles)

    const numbersOfPages = []

    for (let i = 1; i <= lastPage;) numbersOfPages.push(i), i++

    const up = () => {
        setPage(page + 1)
    }

    const down = () => {
        setPage(page - 1)
    }

    return (
        <div className='bg-secon p-4'>
            <h2 className='paragraph'>
                <span className='headline'>Welcome {user}</span>, here you can find your favorite pokemon
            </h2>
            <div className='d-flex flex-column flex-sm-row gap-2'>
                <InputPokemon />
                <InputTypePokemon setPokemons={setPokemons} />
            </div>
            <div id='pokemons-home-container' className='row'>
                {pokemonsPaginated.map(pokemon => <PokemonCard key={pokemon.name} pokemonUrl={pokemon.url} />)}
            </div>
            <div className='d-flex p-4 mt-3 justify-content-around'>
                <button onClick={down} className={`button btn ${page === 1 && 'disabled'}`}>Prev Page</button>
                <button onClick={up} className={`button btn ${(page === lastPage || lastPage === 0) && 'disabled'}`}>Next Page</button>
            </div>
            <Configs />
        </div>
    );
};

export default Home;