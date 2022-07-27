import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MovesPokemon = ({ urlMove }) => {

    const [move, setMove] = useState({})

    const getMove = () => {
        axios.get(urlMove)
            .then(res => setMove({
                name: res.data.name,
                type: res.data.type.name,
                power: res.data.power,
                accuracy: res.data.accuracy,
                pp: res.data.pp,
                description: res.data.effect_entries.map(
                    effect => { if (effect.language.name === 'en') { return effect.short_effect } }
                )
            }))
    }

    useEffect(() => {
        getMove()
    }, [])

    return (
        <>
            <tr>
                <td className='text-start'><small>{move.name?.replace('-', ' ')}</small></td>
                <td style={{ color: `var(--${move.type}-color)` }}><span><small>{move.type}</small></span></td>
                <td><small>{move.power? move.power:'NA'}</small></td>
                <td><small>{move.pp}</small></td>
                <td><small>{move.accuracy? move.accuracy:'NA'}</small></td>
            </tr>
            {/* <tr>
                <th scope='row'><small>DESCR</small></th>
                <td colSpan='4' className='text-justify'><small>{move.description}</small></td>
            </tr> */}
        </>

    );
};

export default MovesPokemon;