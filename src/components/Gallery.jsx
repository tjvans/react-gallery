import Profile from "./Profile";
import Search from "./Search";
import { people } from "../assets/data";
import { useState } from "react";

export default function Gallery() {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value)
  }

  function queryFilter(items, query) {
    query = query.toLowerCase()
    return items.filter(item =>
      item.name.split(' ').some(word => 
        word.toLowerCase().startsWith(query)))
  }

  const listItems = queryFilter(people, query).map((person) => (
    <Profile key={person.name} size={90} person={person} />
  ));

  return (
    <>
      <Search queryText={query} handleChange={handleChange} />
      <div className="profile-container">{listItems}</div>
    </>
  );
}
