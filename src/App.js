import React from 'react';
import { Outlet, Link } from "react-router-dom";
import ScrollGenerator from './components/ScrollGenerator/ScrollGenerator';
import styles from './App.module.scss';
function App() {
  
    return (
      <div className={styles.app}>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="routes/invoices">Invoices</Link> |{" "}
        <Link to="routes/ScrollGenerator">ScrollGenerator</Link> |{" "}
      </nav>
      <Outlet />
    </div>
    );
}

export default App;
