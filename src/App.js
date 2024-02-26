import { useState, useEffect } from 'react'
import Auth from './components/Auth/Auth'
import CreateAnimal from './components/CreateAnimal/CreateAnimal'
import AnimalsList from './components/AnimalsList/AnimalsList'
import styles from './App.module.scss'
import Searchbar from './components/Searchbar/Searchbar'
import SearchFilter from './components/SearchFilter/SearchFilter'

export default function App() {


  const handleChangeAuth = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }
  const handleChange = (event) => {
    setAnimal({ ...animal, [event.target.name]: event.target.value })
  }
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    name: ''
  })
  const [animal, setAnimal] = useState({
    name: '',
    species: '',
    image: '',
    reservedForAdoption: { type: Boolean, required: true, defaultValue: false }
  }, {
    timestamps: true
  })
  const [animals, setAnimals] = useState([])

  const [token, setToken] = useState('')
  const login = async () => {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })
      })
      const tokenResponse = await response.json()
      setToken(tokenResponse)
      localStorage.setItem('token', JSON.stringify(tokenResponse))
    } catch (error) {
      console.error(error)
    } finally {
      window.location.reload()
    }
  }
  const signUp = async () => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...credentials })
      })
      const tokenResponse = await response.json()
      setToken(tokenResponse)
      localStorage.setItem('token', JSON.stringify(tokenResponse))
    } catch (error) {
      console.error(error)
    } finally {
      window.location.reload()
    }
  }

  const createAnimal = async () => {
    try {
      const response = await fetch('/api/animals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ ...animal })
      })
      const data = await response.json()
      setAnimals([data, ...animals])
    } catch (error) {
      console.error(error)
    } finally {
      setAnimal({
        name: '',
        species: '',
        image: ''
      })
    }
  }

  const listAnimals = async () => {
    try {
      const response = await fetch('/api/animals', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      })
      const data = await response.json()
      setAnimals(data)
    } catch (error) {
      console.error(error)
    }
  }
  const deleteAnimal = async (id) => {
    try {
      const response = await fetch(`/api/animals/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      const data = await response.json()
      const animalsCopy = [...animals]
      const index = animalsCopy.findIndex(animal => id === animal._id)
      animalsCopy.splice(index, 1)
      setAnimals(animalsCopy)
    } catch (error) {
      console.error(error)
    }
  }
  const updateAnimal = async (id, updatedData) => {
    try {
      const response = await fetch(`/api/animals/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(updatedData)
      })
      const data = await response.json()
      const animalsCopy = [...animals]
      const index = animalsCopy.findIndex(animal => id === animal._id)
      animalsCopy[index] = { ...animalsCopy[index], ...updatedData }
      setAnimals(animalsCopy)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const tokenData = localStorage.getItem('token')
    if (tokenData && tokenData !== 'null' && tokenData !== 'undefined') {
      listAnimals()
    }
  }, [token])

  useEffect(() => {
    const tokenData = localStorage.getItem('token')
    if (tokenData && tokenData !== 'null' && tokenData !== 'undefined') {
      setToken(JSON.parse(tokenData))
    }
  }, [])


  const [searchInput, setSearchInput] = useState('')
  const handleSearch = (searchInput, animals) => {
    searchInput ? <AnimalsList animals={animals.filter(animal => animal.name.includes(searchInput))} updateAnimal={updateAnimal} deleteAnimal={deleteAnimal} />
      :
      <AnimalsList animals={animals} updateAnimal={updateAnimal} deleteAnimal={deleteAnimal} />
  }


  return (
    <>
      {
        token ?
          <button onClick={() => {
            localStorage.removeItem('token')
            window.location.reload()
          }}>
            Logout
          </button> :
          ''
      }
      <div className="banner">
        <h1 className="banner">Sunny Animal Adoption Shelter</h1>
        <h2 className="banner">Brighter Days Ahead For Our Furry Friends</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqtuoc9EQFUFrIEbZovpxdtEWNrmtPb4Ysiw&usqp=CAU" />
      </div>
      <Auth
        login={login}
        credentials={credentials}
        handleChangeAuth={handleChangeAuth}
        signUp={signUp}
        setToken={setToken}
        token={token}
      />
      <CreateAnimal
        createAnimal={createAnimal}
        animal={animal}
        handleChange={handleChange}
      />

      {/* <Searchbar
        animals={animals}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        onKeyDown={handleSearch}
        updateAnimal={updateAnimal}
        deleteAnimal={deleteAnimal}
      /> */}
      <AnimalsList
        animals={animals}
        deleteAnimal={deleteAnimal}
        updateAnimal={updateAnimal}
      />
    </>
  )
}
