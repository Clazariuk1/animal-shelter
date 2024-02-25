import { useRef, useState } from 'react'
import styles from './Animal.module.scss'
export default function Animal({
    animal,
    updateAnimal,
    deleteAnimal
}) {
    const [showInput, setShowInput] = useState(false)
    const [showBody, setShowBody] = useState(false)
    const inputRef = useRef(null)
    return (
        <>
            <li onClick={() => setShowInput(!showInput)}>
            <div className="animal__data">
                <h4>{animal.name}</h4>
                <h4>{animal.species}</h4>
                <img src={animal.image} />
            </div>
            {/* <h4 onClick={() => setShowInput(!showInput)}>{animal.reservedForAdoption}</h4> */}
                <input
                    ref={inputRef}
                    style={{ display: showInput ? 'block' : 'none' }}
                    type="text"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            const name = inputRef.current.value
                            updateAnimal(animal._id, { name })
                            setShowInput(false)
                        }
                    }}
                    defaultValue={animal.name}
                />
                <button
                onClick={() => deleteAnimal(animal._id)}>
                    Found a New Home
                </button>
            </li>
        </>
    )
}

// must delete url and replace with the rest of the relevant animal data.
