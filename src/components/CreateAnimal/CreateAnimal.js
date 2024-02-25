import styles from './CreateAnimal.module.scss'

export default function CreateAnimal({
    createAnimal,
    animal,
    handleChange
}) {
    return (
        <>
            <h2>Contribute an Animal to the Adoption Community</h2>
            <div className={styles.container}>
                <form
                    className={styles.form}
                    onSubmit={(e) => {
                        e.preventDefault()
                        createAnimal()
                    }}>
                    <div>
                        <label>Name<input type="text" value={animal.name} name="name" onChange={handleChange} placeholder={'Name'} /></label>
                        <label>Species<input type="text" value={animal.species} name="species" onChange={handleChange} placeholder={'Species'} /></label>
                        <label>Image Url <input type="text" value={animal.image} name="image" onChange={handleChange} placeholder={'Image Url'} /> </label>
                    </div>
                    <input className={styles.button} type="submit" value="Create Animal" />
                </form>
            </div>
        </>
    )
}
