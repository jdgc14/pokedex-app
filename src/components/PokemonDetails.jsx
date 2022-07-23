import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetails = () => {

    const {id} = useParams();

    const [pokemon, setPokemon] = useState({})

    const getPokemon = () => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        axios.get(url)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getPokemon()
    }, [id])

    console.log(pokemon)

    return (
        <div>
            <h1>Pokemon Detail</h1>
            <h2>{pokemon.name}</h2>
        </div>
    );
};

export default PokemonDetails;