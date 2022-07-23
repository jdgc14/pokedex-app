import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const InputTypePokemon = ( {setPokemons} ) => {

    const pokemonsVisibles = useSelector(state => state.user.pokemonsVisibles)

    const [types, setTypes] = useState([])

    const getTypes = () => {
        axios.get('https://pokeapi.co/api/v2/type')
            .then(res => setTypes(res.data.results.map(type => type.name)))
    }

    useEffect(() => {
        getTypes()
    }, [])

    const getPokemonByType = (type) => {
        if (type === 'all') {
            axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1154')
                .then(res => setPokemons(res.data.results))
    }   else {
        axios.get(`https://pokeapi.co/api/v2/type/${type}`)
            .then(res => setPokemons(res.data.pokemon.map(pokemon => pokemon.pokemon)))
    }
    }

    useEffect(() => {
        getPokemonByType('all')
    }, [pokemonsVisibles])

    console.log(pokemonsVisibles)

    return (
        <div>
            <select onChange={(e) => getPokemonByType(e.target.value)} defaultValue='all'>
                <option id='all' value="all">All Pokemons</option>
                {types.map(type => <option key={type} value={type}>{type}</option>)}
            </select>
        </div>
    );
};

export default InputTypePokemon;