import { useState } from 'react'
import PersonsList from './components/personlist';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' ,number:123454}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [newFilter,setNewFilter] = useState('')
  const [toShow,setToShow] = useState([]);
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
    setPersons(persons.concat(personObject))
    setToShow(persons.concat(personObject))
    setNewName('')
    setNewNumber('')    
    
  }

  const handleNameChange = (event)=>{
    
    setNewName(event.target.value)
  }
  const handleNumberChange = (event)=>{
    setNewNumber(event.target.value)
    
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
      <PersonsList persons = {toShow} allPersons = {persons}/>
    </div>
  )
}

export default App