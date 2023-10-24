export default function Bio({ person }) {
    return (
        <div className="bio">
            <h1>Name</h1>
            <p>{person.name}</p>
            <h3>Profession</h3>
            <p>{person.profession}</p>
        </div>
    )
}