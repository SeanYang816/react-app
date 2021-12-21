import React from 'react'
import App from './App'
import IndexRoutes from './IndexRoutes'

function Home() {
    return (
        <React.StrictMode>
            <App>
                <IndexRoutes />
            </App>
        </React.StrictMode>
    )
}

export default Home
