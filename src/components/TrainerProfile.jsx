import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';

const TrainerProfile = () => {

    const user = useSelector(state => state.user)

    const pokemonsFavoritesID = useSelector(state => state.pokemonsFavorites)

    return (
        <div className='p-4 text-center' style={{ minHeight: '100vh' }}>
            <h2>Hi {user.name}</h2>
            <div className='col-12 col-md-4 m-auto'>
                <img src={user.avatar} style={{ width: '40%' }} />
            </div>
            <div>
                {pokemonsFavoritesID.length ? (
                    <>
                        <h2>These are your favorite pokemons:</h2>
                        <div>
                            {pokemonsFavoritesID.map(id =>
                                <PokemonCard key={id} pokemonUrl={`https://pokeapi.co/api/v2/pokemon/${id}`} />
                            )}
                        </div></>
                ) : (
                    <h2>You have no favorite pokemons</h2>
                )}
            </div>
        </div>
    );
};

export default TrainerProfile;