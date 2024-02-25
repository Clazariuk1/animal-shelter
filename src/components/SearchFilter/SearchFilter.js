import { useState, useEffect } from 'react'
import Searchbar from '../Searchbar/Searchbar'
import SignUp from '../AnimalsList/AnimalsList'
import AnimalsList from '../AnimalsList/AnimalsList'

// export default function Auth (props){
//     const [showLogin, setShowLogin] = useState(true)
//     return(
//      <>
//        <button onClick={() => setShowLogin(!showLogin)}>{!showLogin? 'Already Have An account. Click Here To Sign In': 'New Here. Click Here Sign Up'}</button>
//        { !showLogin ? <SignUp signUp={props.signUp}/> : <Login login={props.login}/>}
//      </>
//     )
//  }

export default function SearchFilter({
    searchInput,
    searchResults,
    animals
}) {
    // const [searchInput, setSearchInput] = useState(false)

    return (
        <>
            searchInput ? <Searchbar animals={searchResults} /> : null

        </>
    )
}
