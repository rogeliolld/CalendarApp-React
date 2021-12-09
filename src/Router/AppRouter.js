import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { CalendarScreen } from '../components/calendar/CalendarScreen'

export const AppRouter = () => {
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
