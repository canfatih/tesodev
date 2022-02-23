import jpg from "../jpg.svg"
function TodoAdd({searchTerm}) {
  return (
    <div className="Top-Component">
<img alt="logo" className="jpg" src={jpg}>
      </img>
       <ul className="list">
       </ul>
       <input className="input" type="text" onChange={event=>searchTerm(event.target.value)}></input>
        <button className="button-default">Search</button>    
    </div>
  )
}


export default TodoAdd;