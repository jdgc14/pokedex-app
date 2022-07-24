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
        <div className='col-12 col-sm-6'>
            <form onSubmit={submit} className="input-group mb-3">
                <input type="text" value={pokemonName} onChange={e => setPokemonName(e.target.value)} className="form-control" placeholder="Search by Name or ID" />
                <button className="btn button">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </div>
    );
};

export default InputPokemon;