import { useState ,useEffect} from 'react'
import axios from 'axios'
import PersonsList from './components/personlist';
import phoneBookService from './services/phonebook'
import Notif from './components/notifications';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [newFilter,setNewFilter] = useState('')
  const [toShow,setToShow] = useState([]);
  const [notif,setNotif] = useState('')
  const [notifStyle,setNotifStyle] = useState('error')
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://phonebook-xfno.onrender.com/api/persons')
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
    var id = -1;
    persons.forEach((element,i) => {
      if(newName==element.name)id = i
    })
    if(id!=-1){
      
      var temp = persons
      temp[id].number = newNumber

      phoneBookService.update(temp[id].id,temp[id])
      .then(response=>{
        setPersons(temp)
        setNewName('')
        setNewNumber('')
        setNotif("Updated entry");
        setTimeout(()=>{
        setNotif('')
        setNotifStyle('del')
      },2000)
      })
      .catch(error=>{
        console.log(error)
      })

      return
    }
    const personObject = {
      name : newName,
      number : newNumber
    }
    phoneBookService
    .create(personObject)
    .then(response=>{
      console.log(response.data)
      personObject.id = response.data.id
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')    
      setNotif("Added New entry");
      setNotifStyle('del')
      setTimeout(()=>{
        setNotif('')
      },2000)
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
      setNotif("Deleted entry")
      setNotifStyle('del')
      setTimeout(()=>{
        setNotif('')
      },2000)
    })
    .catch(error=>{
      console.log(error)
    })
    
  }
  return (
    <div>
      <Notif message = {notif} style={notifStyle}/>
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