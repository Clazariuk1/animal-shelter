import styles from './AnimalsList.module.scss'
import Animal from '../Animal/Animal'
import { update } from 'immutable'

export default function AnimalList({
    animals,
    deleteAnimal,
    updateAnimal
}) {
    return (
        <ul>
            {
                animals.length
                    ? animals.map(animal => (
                        <Animal
                            key={animal._id}
                            animal={animal}
                            updateAnimal={updateAnimal}
                            deleteAnimal={deleteAnimal}
                        />
                    ))
                    : <>
                        <h2>No Animals on Adoption Yet... Add one in the Form Above</h2>
                    </>
            }
        </ul>
    )
}
