import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';
import Configs from './Configs';
import InputTypePokemon from './InputTypePokemon';
import InputPokemon from './InputPokemon';

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
        <div>
            <h1>Home</h1>
            <h3>Welcome {user}, here you can find your favorite pokemon</h3>
            <InputTypePokemon setPokemons={setPokemons}/>
            <InputPokemon/>
            {pokemonsPaginated.map(pokemon => <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />)}
            <button onClick={down} className='btn btn-secondary'>Prev Page</button>
            <button onClick={up} className='btn btn-secondary'>Next Page</button>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="fa-solid fa-gear"></i>
            </button>
            <Configs />
        </div>
    );
};

export default Home;