import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Abilities from './Abilities';

const PokemonDetails = () => {

    const { id } = useParams();

    const [pokemon, setPokemon] = useState({})

    const getPokemon = () => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        axios.get(url)
            .then(res => setPokemon({
                id: res.data.id,
                name: res.data.name,
                types: res.data.types.map(type => type.type.name),
                image: res.data.sprites.other.dream_world.front_default,
                height: res.data.height,
                weight: res.data.weight,
                stats: res.data.stats.map(stat => ({
                    name: stat.stat.name,
                    value: stat.base_stat
                })
                ),
                abilities: res.data.abilities.map(ability => ability.ability.url),
                moves: res.data.moves.map(move => move.move.name),
            }))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getPokemon()
    }, [id])

    console.log(pokemon)

    return (
        <div className='text-center p-4 bg-secon text-capitalize'>
            <div className='mt-5 bg-prima rounded p-2'>
                <img src={pokemon.image} />
                <div>
                    <h3>N.º{pokemon.id}</h3>
                    <div className='d-flex m-auto justify-content-center' style={{ width: '80%' }}>
                        <div className='col-3 col-sm-4 col-md-5 mt-3 border-2 border-top'></div>
                        <h2 className='mx-3' style={{ color: `var(--${pokemon.types?.[0]}-color)` }}>
                            <span>{pokemon.name}</span>
                        </h2>
                        <div className='col-3 col-sm-4 col-md-5 mt-3 border-2 border-top'></div>
                    </div>
                    <div className='d-flex justify-content-evenly'>
                        <h3>Height<br />
                            <span style={{ color: `var(--${pokemon.types?.[0]}-color)` }}>
                                {pokemon.height}
                            </span>
                        </h3>
                        <h3>Weight<br />
                            <span style={{ color: `var(--${pokemon.types?.[0]}-color)` }}>
                                {pokemon.weight}
                            </span>
                        </h3>
                    </div>
                    <div className='my-3'>
                        <h3><span>Types</span></h3>
                        <div className='d-flex gap-4 justify-content-center'>
                            {pokemon.types?.map(type =>
                                <div key={type} className={`bg-${type} p-1 rounded-2`} style={{ width: '6rem' }}>
                                    <h6 className='m-0 paragraph-white'><span>{type}</span></h6>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className='d-flex flex-column flex-sm-row mt-5 justify-content-evenly bg-prima rounded p-2'>
                <div className='mt-3'>
                    <h3><span>Abilities</span></h3>
                    {pokemon.abilities?.map(ability => <Abilities key={ability} urlAbility={ability} />)}
                </div>
            </div>

            <div className='mt-5 bg-prima rounded p-2'>
                <h3><span>Stats</span></h3>
                {pokemon.stats?.map(stat => (
                    <h5 key={stat.name} className='text-start'>{stat.name.replace('-', ' ')} : <span style={{ color: `var(--${pokemon.types?.[0]}-color)` }}>{stat.value}</span></h5>
                ))}
            </div>

            <div className='mt-5 bg-prima rounded p-2 scroll-vertical'>
                <h3><span>Moves</span></h3>
                <div id='pokemon-moves' className='d-flex flex-row flex-wrap'>
                    {pokemon.moves?.map(move => <small key={move} className='col-6 col-sm-4'>{move.replace('-', ' ')}</small>)}
                </div>
            </div>

            <div className='mt-5 bg-prima rounded text-start p-2'>
                <h3>Encounters</h3>
                <h5>Not available</h5>
            </div>
        </div>
    );
};

export default PokemonDetails;