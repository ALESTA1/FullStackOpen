import { useState ,useEffect} from 'react'
import axios from 'axios'
import PersonsList from './components/personlist';
import phoneBookService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [newFilter,setNewFilter] = useState('')
  const [toShow,setToShow] = useState([]);

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  const handleFilter = (event)=>{
    setNewFilter(event.target.value)
    if(newFilter === ''){

      setToShow([])
      return
    }
    const regex = new RegExp(newFilter, 'i');
    const filteredPersons = () => persons.filter(person => person.name.match(regex))
    setToShow(filteredPersons)
    console.log(filteredPersons)
  }
  const addName = (event)=>{
    event.preventDefault()
    var check = true
    persons.forEach(element => {
      if(newName==element.name)check = false;
    })
    if(!check){
      console.log(`${newName} already added`);
      return
    }
    const personObject = {
      name : newName,
      number : newNumber
    }
    phoneBookService
    .create(personObject)
    .then(response=>{
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')    
      })  
    .catch(error=>{
      console.log(error)
    }) 
    
  }

  const handleNameChange = (event)=>{
    
    setNewName(event.target.value)
  }
  const handleNumberChange = (event)=>{
    setNewNumber(event.target.value)
    
  }
  const handleDelete = (id)=>{
    console.log(id)
    phoneBookService.del(id)
    .then(response=>{
      console.log(response.data)
      let temp = []
      persons.forEach(p=>{
        if(p.id!=id)temp.push(p)
      })
      setPersons(temp)
    })
    .catch(error=>{
      console.log(error)
    })
    
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with : <input value={newFilter} onChange={handleFilter}/>
      </div>
      <h1>Add New</h1>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
        
      </form>
      <h2>Numbers</h2>
      <PersonsList persons = {toShow} allPersons = {persons} handleDelete = {handleDelete}/>
    </div>
  )
}

export default App