import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ( {pokemonUrl} ) => {

    const [pokemonData, setPokemonData] = useState({})

    const getPokemonData = () => {
        axios.get(pokemonUrl)
            .then(res => setPokemonData ({
                name: res.data.name,
                types: res.data.types.map(type => type.type.name),
                image: res.data.sprites.other.dream_world.front_default,
                id: res.data.id
            }))
    }
            
            // .then(res => setPokemonData(res.data))
    

    useEffect(() => {
        getPokemonData()
    }, [])

    const navigate = useNavigate()

    const pokemonDetails = () => {
        navigate(`/pokedex/${pokemonData.id}`)
    }

    // console.log(pokemonData)

    return (
        <div onClick={pokemonDetails}>
            <h1>{pokemonData.name}</h1>
            <img src={pokemonData.image} alt="" />
        </div>
    );
};

export default PokemonCard;