import React from 'react';
import { useDispatch } from 'react-redux';
import { changeAvatar } from '../store/slices/user.slice';
import trainer1 from '../assets/images/trainer1.png'
import trainer2 from '../assets/images/trainer2.png'
import trainer3 from '../assets/images/trainer3.png'
import trainer4 from '../assets/images/trainer4.png'
import trainer5 from '../assets/images/trainer5.png'
import trainer6 from '../assets/images/trainer6.png'
import { useNavigate } from 'react-router-dom';


const SelectAvatar = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const avatar = [trainer1, trainer2, trainer3, trainer4, trainer5, trainer6]

    const selectAvatar = (character) => {
        dispatch(changeAvatar(character))
        navigate('/pokedex')
    }

    return (
        <div>
            <h1>Choose your avatar</h1>
            <div className='row'>
                {avatar.map(character =>
                    <img src={character} alt="" key={character} className='col-6' onClick={() => selectAvatar(character)}/>
                )}
            </div>
        </div>
    );
};

export default SelectAvatar;