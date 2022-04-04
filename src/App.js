// src/App.js
import './App.css';
import Cadre from './components/Cadre';
import Carousel from './components/Carousel';


function App() {
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
  ];
  return (
    <div className="App">
      <section className="topSection">
        <nav>
        </nav>
        <div className="mainMessage">
          <h1>Welcome to Ghetto Chef</h1>
          <article> Learn how to become a great Chef from zero</article>
        </div>
      </section>
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
      <Carousel/>


    </div>
  );
}
export default App;