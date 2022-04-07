// src/App.js
import './App.css'
import TopSection from './components/TopSection'
import CadresSection from './components/CadresSection'
import Carousel from './components/Carousel'
import { useState } from 'react'
import recipesFromFiles from './recipes.json'

function App() {
  const [recipes, setRecipes] = useState(recipesFromFiles)
  return (
    <div className="App">
      <TopSection recipes={recipes} setRecipes={setRecipes}/>
      <CadresSection/>
      <Carousel recipes={recipes} setRecipes={setRecipes}/>
    </div>
  );
}
export default App