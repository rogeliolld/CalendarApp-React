import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth';

export const Navbar = () => {

    const dispatch = useDispatch();
    const {name} = useSelector(state => state.auth);

    const handleLogout = () =>{
        dispatch( startLogout() );
    }
    return (
        <div className='navbar navabar-dark bg-dark mb-4'>
            <span className='navbar-brand text-white'>
                { name }
            </span>
            <button 
                className='btn btn-outline-danger'
                onClick={ handleLogout }
            >
                <i className='fas fa-sign-out-alt'></i>
                <span> Salir</span>
            </button>
        </div>
    )
}
