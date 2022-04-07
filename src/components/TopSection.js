import {useEffect} from 'react'
const TopSection = ({recipes}) => {

    useEffect(()=>{

    },[recipes])

    const likedRecipes = recipes.filter(recipe => recipe.liked)
    return(
        <section className="topSection">
            <div className="mainMessage">
                <h1>Welcome to Ghetto Chef</h1>
                <article> Learn how to become a great Chef from zero</article>
            </div>
            <div>
                <h2>liked recipes</h2>
                <ul>
                    {
                        likedRecipes.map(recipe => {
                        return <li key={recipe.id}>{recipe.name}</li>
                    })
                    }
                </ul>
            </div>
      </section>
    )
}

export default TopSection

