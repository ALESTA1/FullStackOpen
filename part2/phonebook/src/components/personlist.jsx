
const PersonsList = (props)=>{

    const persons = props.allPersons;
    const toShow = props.persons
    if(toShow.length===0){
      return (
        <>
        {persons.map((p,id)=>{
          return (
            <>
              <p key={id}>{p.name} {p.number}</p>
              <button>Delete</button>
            </>
          )
        })}
        </>
      )
    }
    else{
  
      return (
        <>
        {toShow.map((p,id)=>{
          return (
            <>
              <p key={id}>{p.name} {p.number}</p>
              <button>Delete</button>
            </>
          )
        })}
        </>
      )
    }
   
    
  }

  export default PersonsList;