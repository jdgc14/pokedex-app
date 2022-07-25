import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';
import { changeAvatar } from '../store/slices/user.slice'
import '../App.css'
import Header from './Header'
import Footer from './Footer'
import trainer1 from '../assets/images/trainer1.png'
import trainer2 from '../assets/images/trainer2.png'
import trainer3 from '../assets/images/trainer3.png'
import trainer4 from '../assets/images/trainer4.png'
import trainer5 from '../assets/images/trainer5.png'
import trainer6 from '../assets/images/trainer6.png'


const SelectAvatar = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const avatar = [trainer1, trainer2, trainer3, trainer4, trainer5, trainer6]

    const user = useSelector(state => state.user.name)

    const selectAvatar = (character) => {
        dispatch(changeAvatar(character))
        navigate('/pokedex')
    }

    if (user) {
        return (
            <>
                <Header />
                <div className='bg-secon p-5'>
                    <h2 className='headline'>Hi {user}! Choose your avatar:</h2>
                    <div className='row'>
                        {avatar.map(character =>
                            <div key={character} className='col-sm-12 col-md-4 col-lg-3 col-xl-2 mt-3 text-center' style={{ height: '300px' }}>
                                <button className='border border-dark rounded p-4 m-auto btn btn-light zoom' style={{ width: '80%', height: '100%' }}>
                                    <img src={character} onClick={() => selectAvatar(character)} style={{ width: '100%', height: '100%' }} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <Footer />
            </>
        )
    } else {
        return (
            <Navigate to="/"/>
        )
    }    
};

export default SelectAvatar;