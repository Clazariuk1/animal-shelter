import { useRef, useState } from 'react'
import styles from './Animal.module.scss'
export default function Animal({
    animal,
    updateAnimal,
    deleteAnimal
}) {
    const [showInput, setShowInput] = useState(false)
    const inputRef = useRef(null)
    return (
        <>
            <li>
                <h4 onClick={() => setShowInput(!showInput)}>{animal.name}</h4>
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
                <a href={animal.url}
                target="_blank" rel="noreferrer">{animal.url}</a>
                <button
                onClick={() => deleteAnimal(animal._id)}>
                    Found a New Home
                </button>
            </li>
        </>
    )
}

// must delete url and replace with the rest of the relevant animal data.
