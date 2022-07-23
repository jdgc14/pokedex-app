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
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title" id="exampleModalLabel">Settings</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <button onClick={() => dispatch(changePokemonsVisibles(4))}>4</button>
                                <button onClick={() => dispatch(changePokemonsVisibles(6))}>6</button>
                                <button onClick={() => dispatch(changePokemonsVisibles(8))}>8</button>
                                <button onClick={() => dispatch(changePokemonsVisibles(12))}>12</button>
                                <button onClick={() => dispatch(changePokemonsVisibles(16))}>16</button>
                                <button onClick={() => dispatch(changePokemonsVisibles(20))}>20</button>
                            </div>
                            <div>
                                <div className="form-check form-switch">
                                    <input onChange={() => dispatch(changeIsDarkMode(!isDarkMode))} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Configs;