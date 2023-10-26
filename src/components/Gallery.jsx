import Profile from "./Profile";
import Search from "./Search";
import { people } from "../assets/data";

export default function Gallery() {
  
  const listItems = people.map((person) => (
    <Profile key={person.name} size={90} person={person} />
  ));

  return (
    <>
      <Search />
      <div className="profile-container">{listItems}</div>
    </>
  );
}
