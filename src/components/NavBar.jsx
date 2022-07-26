import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/user.slice';


const NavBar = () => {

    const isDark = useSelector(state => state.user.isDarkMode)

    const navigate = useNavigate();

    const dispatch = useDispatch()

    return (
        <div className='d-flex flex-column p-1' style={{ position: 'fixed', zIndex: '1' }}>
            <button onClick={() => dispatch(changeName(''))} className={`${isDark ? 'button-dark':'button'} p-2 rounded`}>
                <i className="fa-solid fa-right-from-bracket"></i>
            </button>
            <button onClick={() => navigate('/pokedex')} className={`${isDark ? 'button-dark':'button'} p-2 rounded`}>
                <i className="fa-solid fa-house"></i>
            </button>
            <button onClick={(e) => navigate(-1)} className={`${isDark ? 'button-dark':'button'} p-2 rounded`}>
                <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button type="button" className={`${isDark ? 'button-dark':'button'} p-2 rounded`} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="fa-solid fa-gear"></i>
            </button>
            <button type="button" onClick={() => navigate('/pokedex/profile')}  className={`${isDark ? 'button-dark':'button'} p-2 rounded`}>
                <i className="fa-solid fa-user"></i>
            </button>
        </div>
    );
};

export default NavBar;