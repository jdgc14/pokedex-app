import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate()

    const goHome = () => {
        navigate('/pokedex')
    }


    return (
        <div className='text-center p-4 bg-blue-dark'>
            <img onClick={goHome} style={{cursor:'pointer'}} src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="" />
        </div>
    );
};

export default Header;