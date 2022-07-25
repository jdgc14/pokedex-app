import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Abilities = ( {urlAbility, type} ) => {

    const [ability, setAbility] = useState({})

    const getAbility = () => {
        axios.get(urlAbility)
            .then(res => setAbility({
                name: res.data.name,
                description: res.data.effect_entries.map(
                    effect => {if (effect.language.name === 'en') {return effect.effect}}
                )
            }))
    }

    useEffect(() => {
        getAbility()
    }, [])

    return (
        <div className='text-justify'>
            <h6 style={{color:`var(--${type}-color)`}}><span>{ability.name}</span></h6>
            <h6 className='ability-description' style={{textTransform:'none'}}>{ability.description}</h6>
        </div>
    );
};

export default Abilities;