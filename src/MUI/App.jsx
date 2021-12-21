import React, { Children } from 'react'
import HomePage from './HomePage/HomePage'

export default function App({ children }) {
    return <>{Children.only(children)}</>
}

