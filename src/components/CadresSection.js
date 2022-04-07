import Cadre from './Cadre'
const inputsArray = [
    {
      title: 'recipes',
      article: 'get step by step recipes on awesome dishes',
      icon: 'fa-solid fa-bowl-rice'
    },
    {
      title: 'stories',
      article: 'get to know more on a random item',
      icon: 'fa-solid fa-book'
    },
  ]
const CadresSection = () => {
    return(
        <section className="bottomSection">
            {inputsArray.map((input,index)=>{
            return <Cadre
                key={`cadre${index}`}
                title= {input.title}
                article={input.article}
                icon={input.icon}
                />
            })}
      </section>
    )
}

export default CadresSection