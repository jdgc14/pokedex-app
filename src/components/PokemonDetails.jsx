import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Abilities from './Abilities'
import MovesPokemon from './MovesPokemon'
import { useDispatch, useSelector } from 'react-redux'
import { setType } from '../store/slices/type.slice'
import { addFavorite, deleteFavorite } from '../store/slices/pokemonsFavorites.slice'


const PokemonDetails = () => {

    const isDark = useSelector(state => state.user.isDarkMode)

    const { id } = useParams()

    const pokemonsFavorites = useSelector(state => state.pokemonsFavorites)

    const [pokemon, setPokemon] = useState({})

    const [isFavorite, setIsFavorite] = useState(false)

    const isOrNotFavorite = () => {
        if (pokemonsFavorites.find(pokemonId => pokemonId === pokemon.id)) {
            setIsFavorite(true)
        } else {
            setIsFavorite(false)
        }
    }

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const getPokemon = () => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        axios.get(url)
            .then(res => setPokemon({
                id: res.data.id,
                name: res.data.name,
                types: res.data.types.map(type => type.type.name),
                image: res.data.sprites.other.home.front_default,
                imageShiny: res.data.sprites.other.home.front_shiny,
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
            .catch(err => {
                navigate('/pokedex/not-found')
            })
    }

    const [nextPokemonName, setNextPokemonName] = useState('')
    const [prevPokemonName, setPrevPokemonName] = useState('')

    const getNextPrevPokemonName = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${Number(pokemon.id) + 1}`)
            .then(res => setNextPokemonName(res.data.name))
            .catch(err => setNextPokemonName(''))

        axios.get(`https://pokeapi.co/api/v2/pokemon/${Number(pokemon.id) - 1}`)
            .then(res => setPrevPokemonName(res.data.name))
            .catch(err => setPrevPokemonName(''))
    }

    const goNext = () => {
        navigate(`/pokedex/${Number(pokemon.id) + 1}`)
    }

    const goPrev = () => {
        navigate(`/pokedex/${Number(pokemon.id) - 1}`)
    }

    const goTypeFilter = (type) => {
        dispatch(setType(type))
        navigate(`/pokedex`)
    }

    const favorite = (id) => {
        dispatch(addFavorite(id))
    }

    const unfavorite = (id) => {
        const indexpokemon = pokemonsFavorites.indexOf(id)
        dispatch(deleteFavorite(indexpokemon))
    }


    useEffect(() => {
        getPokemon()
    }, [id])

    useEffect(() => {
        getNextPrevPokemonName()
        isOrNotFavorite()
    }, [pokemon, pokemonsFavorites, nextPokemonName])


    // const movesPaginated = pokemon.moves?.slice(0, 10)

    return (
        <div className='container'>
            <div className={`text-center text-capitalize position-relative`}>
                <div className=''>
                    {prevPokemonName && (
                        <button onClick={goPrev} className={`button bg-${pokemon.types?.[0]} position-absolute border-0 p-2 rounded`} style={{ top: '-45px', left: '30px' }}>
                            <i className="fas fa-arrow-left"></i> <small>{prevPokemonName}</small>
                        </button>
                    )}
                    {nextPokemonName && (
                        <button onClick={goNext} className={`button bg-${pokemon.types?.[0]} position-absolute border-0 p-2 rounded`} style={{ top: '-45px', right: '30px' }}>
                            <small>{nextPokemonName}</small> <i className="fas fa-arrow-right"></i>
                        </button>
                    )}
                </div>


                <div className={`m-auto mt-5 rounded p-2 col-10 col-md-8 shadow bg-${pokemon.types?.[0]} position-relative`}>
                    <div className='position-absolute text-danger' style={{ right: '10px', cursor: 'pointer' }}>
                        {isFavorite ? (
                            <i className="fa-solid fa-heart" onClick={() => unfavorite(pokemon.id)}></i>
                        ) : (
                            <i className="fa-regular fa-heart" onClick={() => favorite(pokemon.id)}></i>
                        )}
                    </div>
                    <img src={pokemon.image} className='col-8 col-sm-6 col-md-4' />
                    <div className={`rounded p-2 ${isDark ? 'bg-secon-dark' : 'bg-prima'}`}>
                        <h4>N.º{pokemon.id}</h4>
                        <div className='d-flex m-auto justify-content-center' style={{ width: '80%' }}>
                            <div className='col-3 col-sm-4 col-md-5 mt-3 border-2 border-top'></div>
                            <h3 className='mx-2' style={{ color: `var(--${pokemon.types?.[0]}-color)` }}>
                                <span>{pokemon.name}</span>
                            </h3>
                            <div className='col-3 col-sm-4 col-md-5 mt-3 border-2 border-top'></div>
                        </div>
                        <div className='d-flex justify-content-evenly'>
                            <h4>Height<br />
                                <span style={{ color: `var(--${pokemon.types?.[0]}-color)`, textTransform: 'none' }}>
                                    {pokemon.height} dm
                                </span>
                            </h4>
                            <h4>Weight<br />
                                <span style={{ color: `var(--${pokemon.types?.[0]}-color)`, textTransform: 'none' }}>
                                    {pokemon.weight} hg
                                </span>
                            </h4>
                        </div>
                        <div className='my-3'>
                            <h4><span>Types</span></h4>
                            <div className='d-flex gap-3 justify-content-center'>
                                {pokemon.types?.map(type =>
                                    <div key={type} onClick={e => goTypeFilter(type)} className={`bg-${type} p-1 rounded-2`} style={{ width: '6rem', cursor: 'pointer' }}>
                                        <h6 className='m-0 paragraph-white'><span>{type}</span></h6>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>


                <div className={`d-flex flex-column flex-sm-row mt-5 col-10 col-md-8 m-auto justify-content-evenly rounded p-2 shadow ${isDark ? 'bg-secon-dark' : 'bg-prima'}`}>
                    <div className='col-12 col-md-10'>
                        <div className='mt-3'>
                            <h4><span>Abilities</span></h4>
                            {pokemon.abilities?.map(ability => <Abilities key={ability} urlAbility={ability} type={pokemon.types?.[0]} />)}
                        </div>
                    </div>
                </div>


                <div className={`mt-5 col-10 col-md-8 m-auto d-flex flex-column flex-md-row rounded p-2 shadow ${isDark ? 'bg-secon-dark' : 'bg-prima'}`} >
                    <div className='col-10 col-md-6 m-auto mt-3'>
                        <h4><span>Stats</span></h4>
                        <div className='mt-5'>
                            {pokemon.stats?.map(stat => (
                                <h6 key={stat.name} className='text-start'>{stat.name.replace('-', ' ')} : <span style={{ color: `var(--${pokemon.types?.[0]}-color)` }}>{stat.value}</span></h6>
                            ))}
                        </div>
                    </div>
                    <div className='col-12 col-md-8 mt-3'>
                        <h4><span>Shiny</span></h4>
                        <img src={pokemon.imageShiny} className='col-6 m-auto' />
                    </div>
                </div>


                <div className={`mt-5 col-12 col-md-8 m-auto rounded p-2 scroll-vertical shadow ${isDark ? 'bg-secon-dark text-white' : 'bg-prima'}`}>
                    <h4 className='mt-3'><span>Moves</span></h4>
                    <table className={`table ${isDark && 'text-white'}`}>
                        <thead>
                            <tr>
                                <th className='text-start' scope="col">Name</th>
                                <th scope="col">Type</th>
                                <th scope="col">Power</th>
                                <th scope="col">PP</th>
                                <th scope='col'><i className="fa-solid fa-arrows-to-dot"></i></th>
                            </tr>
                        </thead>
                        <tbody>
                            {pokemon.moves?.map(move => <MovesPokemon key={move} urlMove={'https://pokeapi.co/api/v2/move/' + move} />)}
                        </tbody>
                    </table>
                </div>


                <div className={`mt-5 col-12 col-md-8 m-auto rounded p-2 shadow ${isDark ? 'bg-secon-dark text-white' : 'bg-prima'}`}>
                    <h4><span>Encounters</span></h4>
                    <h5>Not available</h5>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetails;