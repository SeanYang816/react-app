import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import styles from './App.module.scss';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./Home";
import ScrollGenerator from "./components/ScrollGenerator/ScrollGenerator";
import Invoices from "./components/Invoices";
import Invoice from "./components/Invoice";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import Logout from "./components/Login/Logout";
import PageNotFuond from "./components/PageNotFound";
function App() {
  
  const params = useParams();
  const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
      <div className={styles.app}>
      <h1>Bookkeeper</h1>
      <BrowserRouter>
        <Navigation isLoggedIn={isLoggedIn}/>
        <Routes>
          
          {/* before login  */}
          <Route path="/login/" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/sign-up/" element={<SignUp isLoggedIn={isLoggedIn}/>} />

          {/* after login */}
          {isLoggedIn && 
          <>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path="/logout/" element={<Logout setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/routes/scrollgenerator" element={<ScrollGenerator isLoggedIn={isLoggedIn}/>} />
          <Route path="/routes/invoices" element={<Invoices isLoggedIn={isLoggedIn}/>}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          </>
          }
          
          <Route path="/:pageName" element={ <PageNotFuond /> } />
          <Route path="/routes/:pageName" element={ <PageNotFuond /> } />
        </Routes>
      </BrowserRouter>
    </div>
    );
}

export default App;
