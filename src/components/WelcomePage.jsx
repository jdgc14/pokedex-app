import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeName } from '../store/slices/user.slice';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import Header from './Header';
import Footer from './Footer';



const WelcomePage = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [userName, setUserName] = useState('')

    // TODO: Validate the user name
    const submit = (e) => {
        e.preventDefault()
        dispatch(changeName(userName))
        navigate('/select-avatar')
    }

    return (
        <>
            <Header />
            <div className='bg-secon p-5'>
                <div style={{ display: 'grid', placeContent: 'center' }}>
                    <div className='d-flex'>
                        <div>
                            <h2 className='headline'>Hello trainer!</h2>
                            <h2 className='headline'>Welcome to the Pokedex!</h2>
                        </div>
                        <img src="https://static.wikia.nocookie.net/espokemon/images/7/72/Rojo_RFVH_%28Ilustraci%C3%B3n%29.png" style={{ height: '20rem' }} />
                    </div>
                    <form onSubmit={submit}>
                        <h5 className='paragraph'>Please write your name</h5>
                        <input type="text" className='form-control' value={userName} onChange={e => setUserName(e.target.value)} />
                        <button className='btn button'>Submit</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default WelcomePage;