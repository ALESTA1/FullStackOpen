
const PersonsList = (props)=>{

    const persons = props.allPersons;
    const toShow = props.persons
    if(toShow.length===0){
      return (
        <>
        {persons.map((p)=>{
          return (
            <>
            <div key = {p.id}>
              <p >{p.name} {p.number}</p>
              <button  onClick={()=>props.handleDelete(p.id)}>Delete</button>
            </div>              
            </>
          )
        })}
        </>
      )
    }
    else{
  
      return (
        <>
        {toShow.map((p)=>{
          return (
            <>
            <div key = {p.id}>
              <p >{p.name} {p.number}</p>
              <button  onClick={()=>props.handleDelete(p.id)}>Delete</button>
            </div>
            </>
          )
        })}
        </>
      )
    }
   
    
  }

  export default PersonsList;