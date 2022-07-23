import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InputPokemon = () => {

    const [pokemonName, setPokemonName] = useState('')

    const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault()
        navigate(`/pokedex/${pokemonName}`)
    }


    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" value={pokemonName} onChange={e => setPokemonName(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default InputPokemon;