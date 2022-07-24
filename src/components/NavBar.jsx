import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/user.slice';


const NavBar = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch()

    return (
        <div className='d-flex flex-column p-1' style={{ position: 'fixed', zIndex:'1'}}>
            <button onClick={() => dispatch(changeName(''))} className='btn'>
                <i className="fa-solid fa-right-from-bracket"></i>
            </button>
            <button onClick={() => navigate('/pokedex')} className='btn'>
                <i className="fa-solid fa-house"></i>
            </button>
            <button onClick={(e) => navigate(-1)} className='btn'>
                <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="fa-solid fa-gear"></i>
            </button>
        </div>
    );
};

export default NavBar;