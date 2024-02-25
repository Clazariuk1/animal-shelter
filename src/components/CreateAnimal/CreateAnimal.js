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
                        <label>Title<input type="text" value={animal.title} name="title" onChange={handleChange} placeholder={'Title'} /></label>
                        <label>Url<input type="text" value={animal.url} name="url" onChange={handleChange} placeholder={'URL'} /></label>
                    </div>
                    <input className={styles.button} type="submit" value="Create Animal" />
                </form>
            </div>
        </>
    )
}
