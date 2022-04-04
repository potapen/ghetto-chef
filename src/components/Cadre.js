const Cadre = (props) => {
    return(
    <div>
      <h2>{props.title} <i className={props.icon}/> </h2>
      <article>{props.article}</article>    
    </div>
    )
  }
  export default Cadre
  