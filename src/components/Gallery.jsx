import Profile from "./Profile";
import Search from "./Search";
import { people } from "../assets/data";
import { useState } from "react";

export default function Gallery() {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function queryFilter(items, query) {
    query = query.toLowerCase();
    const person = items.filter((item) => {
      return (
        item.name
          .split(" ")
          .some((word) => word.toLowerCase().startsWith(query)) ||
        item.profession
          .split(" ")
          .some((word) => word.toLowerCase().startsWith(query))
      );
    });
    return person;
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
