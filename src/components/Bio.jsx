export default function Bio({ person }) {
  return (
    <div>
      <h1>Name</h1>
      <p>{person.name}</p>
      <h1>Profession</h1>
      <p>{person.profession}</p>
    </div>
  );
}
