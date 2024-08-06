
const Number = ({ person, deletePerson }) => {
    return (
      <li>{person.name} {person.number}
      <button onClick={deletePerson}>delete</button>
      </li>
    )
  }


const Persons = ({ people, deletePersonOf }) => {
    return (
      <ul>
        {people.map(person =>
          <Number 
            key={person.id} 
            person={person}
            deletePerson={() => deletePersonOf(person.id)}  
          />
          )}
      </ul>
    )
  } 

  export default Persons