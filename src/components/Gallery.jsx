import Profile from "./Profile";
import { people } from "../assets/data";

export default function Gallery() {
  const listItems = people.map(person =>
      <Profile key={person.name} size={90} person={person} />
    )
  return (
    <section>
      <h1>Amazing scientists</h1>
      <section>{listItems}</section>
    </section>
  );
}
