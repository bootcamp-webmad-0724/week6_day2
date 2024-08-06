import { Route, Routes } from 'react-router-dom'
import HomePage from './../pages/HomePage/HomePage'
import MapPage from './../pages/MapPage/MapPage.jsx'

const AppRoutes = () => {

    return (

        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/mapa' element={<MapPage />} />
        </Routes>
    )
}

export default AppRoutes