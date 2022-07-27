import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const InputPokemon = ( ) => {

    const isDark = useSelector(state => state.user.isDarkMode)

    const pokemons = useSelector(state => state.pokemons)

    const [pokemonName, setPokemonName] = useState('')

    const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault()
        navigate(`/pokedex/${pokemonName.toLowerCase()}`)
    }


    return (

        <div className='col-12 col-sm-6'>
            <form onSubmit={submit} className="input-group mb-3">
                <input
                    type="text"
                    value={pokemonName}
                    onChange={e => setPokemonName(e.target.value)}
                    className="form-control"
                    placeholder="Search by Name or ID"
                    list='pokemonsName' />
                <datalist id='pokemonsName'>
                    {pokemons.map(pokemon => <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>)}
                </datalist>
                <button className={`${isDark ? 'button-dark' : 'button'} p-2`}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </div>
    );
};

export default InputPokemon;