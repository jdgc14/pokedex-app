import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import '../PokemonCard.css';


const PokemonCard = ({ pokemonUrl }) => {

    const [pokemonData, setPokemonData] = useState({})

    const getPokemonData = () => {
        axios.get(pokemonUrl)
            .then(res => setPokemonData({
                id: res.data.id,
                name: res.data.name,
                types: res.data.types.map(type => type.type.name),
                image: res.data.sprites.other.dream_world.front_default,
                hp: res.data.stats[0].base_stat,
                speed: res.data.stats[5].base_stat,
                attack: res.data.stats[1].base_stat,
                defense: res.data.stats[2].base_stat,
                specialAttack: res.data.stats[3].base_stat,
                specialDefense: res.data.stats[4].base_stat,
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

    return (
        <div onClick={pokemonDetails} className='mt-5 col-12 col-md-6 col-lg-4' style={{cursor:'pointer'}}>
            <div className={`bg-${pokemonData.types?.[0]} p-4 rounded-4 m-auto`} style={{ width: '80%' }}>
                <div className='card-img' style={{}}>
                    <img src={pokemonData.image} className='img-pokemon' />
                </div>
                <div className='bg-prima text-center text-capitalize p-3 rounded-top position-relative'>
                    <h6 className='position-absolute' style={{ top: '2px', left: '10px' }}>
                        <span>N.º{pokemonData.id}</span>
                    </h6>
                    <h3 style={{ color: `var(--${pokemonData.types?.[0]}-color)` }}><span>{pokemonData.name}</span></h3>
                    <div className='d-flex gap-4 justify-content-center'>
                        {pokemonData.types?.map(type =>
                            <div key={type} className={`bg-${type} p-1 rounded-2`} style={{ width: '6rem' }}>
                                <h6 className='m-0 paragraph-white'><span>{type}</span></h6>
                            </div>
                        )}
                    </div>
                </div>
                <div className='border-top border-2 bg-prima text-center text-capitalize p-3 rounded-bottom'>
                    <div className='d-flex justify-content-evenly'>
                        <h6>HP:<br />
                            <span style={{ color: `var(--${pokemonData.types?.[0]}-color)` }}>{pokemonData.hp}</span>
                        </h6>
                        <h6>SPD:<br />
                            <span style={{ color: `var(--${pokemonData.types?.[0]}-color)` }}>{pokemonData.speed}</span>
                        </h6>
                    </div>
                    <div className='d-flex justify-content-evenly'>
                        <h6>ATK:<br />
                            <span style={{ color: `var(--${pokemonData.types?.[0]}-color)` }}>{pokemonData.attack}</span>
                        </h6>
                        <h6>DEF:<br />
                            <span style={{ color: `var(--${pokemonData.types?.[0]}-color)` }}>{pokemonData.defense}</span>
                        </h6>
                    </div>
                    <div className='d-flex justify-content-evenly'>
                        <h6>Sp. A:<br />
                            <span style={{ color: `var(--${pokemonData.types?.[0]}-color)` }}>{pokemonData.specialAttack}</span>
                        </h6>
                        <h6>Sp. D:<br />
                            <span style={{ color: `var(--${pokemonData.types?.[0]}-color)` }}>{pokemonData.specialDefense}</span>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;