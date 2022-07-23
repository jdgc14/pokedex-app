import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/user.slice';


const NavBar = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch()

    return (
        <div>
            <h1>NavBar</h1>
            <button onClick={() => dispatch(changeName(''))}>Exit</button>
            <button onClick={() => navigate('/pokedex')}>Home</button>
            <button onClick={(e) => navigate(-1)}>Atras</button>
        </div>
    );
};

export default NavBar;