import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputPokemon from './InputPokemon';




const PokemonNotFound = () => {

    const navigate = useNavigate()

    const goToLugiaPage = () => {
        navigate('/pokedex/lugia')
    }

    return (
        <div className='bg-secon p-4 d-flex flex-column gap-3' style={{ minHeight: '100vh' }}>
            <InputPokemon />
            <h2 style={{ color: 'red' }}><span>No Pokémon Matched Your Search!</span></h2>
            <h2>Try Again.</h2>
            <div className='col-12 col-md-6'>
                <button onClick={goToLugiaPage} className='button rounded p-2'>
                    <span>Go to Lugia page ❤</span>
                </button>
            </div>
        </div>
    );
};

export default PokemonNotFound;