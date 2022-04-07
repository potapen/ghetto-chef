import './Carousel.css'
const likeRecipe = (event,recipes,setRecipes) => {
  const id = event.target.parentNode.id
  const recipesCopy = [...recipes]
  const recipe = recipesCopy.find(recipe => recipe.id ===id)
  recipe.liked = true
  setRecipes(recipesCopy)



}

const Carousel = ({recipes,setRecipes}) => {
  return (
    <section className='Carousel'>
      {recipes.map((recipe, index) => (
        <div key={recipe.id} id={recipe.id} className='CarouselItem'>
          {recipe.name}
          <button onClick={(event)=>likeRecipe(event,recipes,setRecipes)}>❤️  </button>
        </div>
      ))}
    </section>
  )
}

export default Carousel
