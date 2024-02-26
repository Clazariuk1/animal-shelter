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
            <li>
                <div className="playing__field">
                <button onClick={() => setShowInput(!showInput)}>Edit Animal, Click Here</button>
                </div>
            <div className="animal__data">
                <h4 className="text">{animal.name}</h4>
                <h4 className="text">{animal.species}</h4>
                <div className="image">
                <img src={animal.image} />
                </div>
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
                <input
                ref={inputRef}
                style={{ display: showInput ? 'block' : 'none' }}
                type="text"
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        const species = inputRef.current.value
                        updateAnimal(animal._id, { species })
                        setShowInput(false)
                    }
                }}
                defaultValue={animal.species}
            /><input
            ref={inputRef}
            style={{ display: showInput ? 'block' : 'none' }}
            type="text"
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    const image = inputRef.current.value
                    updateAnimal(animal._id, { image })
                    setShowInput(false)
                }
            }}
            defaultValue={animal.image}
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
