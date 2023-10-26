import Profile from "./Profile";
import Search from "./Search";
import { people } from "../assets/data";
import { useState } from "react";

export default function Gallery() {
  const [query, setQuery] = useState("");

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
