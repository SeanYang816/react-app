import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import Login from './LoginPage/Login'
import SignIn from './LoginPage/SignIn'
import Test from './Test/Parent'
import Parent from './Test/Parent'
import Child from './Test/Child'
import NoMatch from './Test/NoMatch'

function IndexRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile" element={<Test />} />
          <Route path="/account" element={<Test />} />
          <Route path="/logout" element={<Test />} />


          {/* Test */}
          <Route path="/parent" element={<Parent />}>
            <Route path="child" element={<Child />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
          {/* Test */}
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default IndexRoutes
