import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import CreatePoint from './pages/CreatePoint/CreatePoint'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/create-point" component={CreatePoint} />
        </BrowserRouter>
    )
}

export default Routes