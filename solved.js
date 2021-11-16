import React, { useState, useEffect } from 'react'
function App() {

  const [data, setData] = useState([])

  const fetchData =  () => {
    fetch('https://randomuser.me/api/')
    .then((response) =>response.json())
    .then((a) => setData([ ...data , a.results]))
  }

  useEffect(() => fetchData(), [])

  return (
    <>
      <button onClick={fetchData}>click</button>
      {data && data.map((item) => {
        return item.map((a, index) =>{
          return <p key={index}>{a.gender}</p>
        })
      } )}
    </>
  )
}

export default App
