import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePokemonsVisibles, changeIsDarkMode } from '../store/slices/user.slice';


const Configs = () => {

    const isDarkMode = useSelector(state => state.user.isDarkMode)

    const dispatch = useDispatch()

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-blue-dark paragraph-white">
                        <div className="modal-header">
                            <h2 className="modal-title" id="exampleModalLabel">Settings</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h6>Pokemons per page</h6>
                            <div className='d-flex justify-content-evenly'>
                                <button onClick={() => dispatch(changePokemonsVisibles(4))} className='btn btn-dark'>
                                    4
                                </button>
                                <button onClick={() => dispatch(changePokemonsVisibles(6))} className='btn btn-dark'>
                                    6
                                </button>
                                <button onClick={() => dispatch(changePokemonsVisibles(8))} className='btn btn-dark'>
                                    8
                                </button>
                                <button onClick={() => dispatch(changePokemonsVisibles(12))} className='btn btn-dark'>
                                    12
                                </button>
                                <button onClick={() => dispatch(changePokemonsVisibles(16))} className='btn btn-dark'>
                                    16
                                </button>
                                <button onClick={() => dispatch(changePokemonsVisibles(20))} className='btn btn-dark'>
                                    20
                                </button>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-start">
                            <div className="form-check form-switch">
                                <input onChange={() => dispatch(changeIsDarkMode(!isDarkMode))} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{isDarkMode? 'Light':'Dark'}</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Configs;