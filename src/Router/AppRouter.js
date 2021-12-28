import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { startChecking } from '../actions/auth'
import { LoginScreen } from '../components/auth/LoginScreen'
import { CalendarScreen } from '../components/calendar/CalendarScreen'

export const AppRouter = () => {
    const dispatch = useDispatch();

    useEffect(() => {
       
        dispatch(startChecking()) 

    }, [dispatch])

    return (
 
            <Router>
                <div>
                    <Routes>
                        <Route  path="/" element={ <CalendarScreen/> } />
                        <Route exact path="/login" element={ <LoginScreen/> } />
                        <Route path='*' element={<Navigate replace to='/' /> } />
                    </Routes>
                </div>
            </Router>
    )
}
