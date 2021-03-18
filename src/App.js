import { useState, useEffect } from 'react'
import './styles/styles.css'
import Cat from './components/Cat'

function App() {
  const [state, setState] = useState(10)
  const [cats, setCats] = useState([])

  const renderCats = () => {
    if (cats.length > 0) { 
      return cats.map((cat, index) => 
        <Cat key={index} {...cat} /> 
      )
    }
  }

  useEffect(() => {
    console.log(cats)
  }, [cats])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://kittygram-api.now.sh/')
      const data = await response.json()
      setCats(data.posts)
    }

    fetchData()
  }, [])

  return (
    <>
      <p>Hola {state}</p>
      <button onClick={() => setState(state + 1)}>Más</button>
      <button onClick={() => setState(state - 1)}>Menos</button>
      {renderCats()}
    </>
  );
}

export default App;
